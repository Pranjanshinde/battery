const express=require("express");
const { Todomodel } = require("../Model/Todomodel");
const PDFDocument = require('pdfkit');
const { Readable } = require('stream');

const TodoRouter=express.Router();

TodoRouter.post("/",async(req,res)=>{
    try {
      console.log(req.body,1);
        const post=new Todomodel(req.body);
        await post.save();
        res.send({"msg":"new todo added"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

TodoRouter.get("/",async(req,res)=>{
    try {
      const {user_id}=req.query;
      console.log(user_id);
    

      const Todos=await Todomodel.find({user_id:user_id});
      console.log(Todos);
      res.send(Todos);
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

TodoRouter.get('/download-pdf', async (req, res) => {
  try {
    const {user_id}=req.query;
    const data = await Todomodel.find({user_id:user_id}).exec();
    console.log(data);
    const doc = new PDFDocument();
    let filename = 'data.pdf';
    filename = encodeURIComponent(filename);

    res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-type', 'application/pdf');

    doc.on('data', (chunk) => res.write(chunk));
    doc.on('end', () => res.end());

    doc.fontSize(12).text('Data Table', { align: 'center' });
    doc.moveDown();

    // Add table headers
    doc.fontSize(10).text('title', 100, doc.y, { width: 150, align: 'left' });
    doc.fontSize(10).text('description', 250, doc.y, { width: 150, align: 'left' });
    doc.fontSize(10).text('date', 250, doc.y, { width: 150, align: 'left' });
    doc.fontSize(10).text('status', 250, doc.y, { width: 150, align: 'left' });
    doc.fontSize(10).text('image', 250, doc.y, { width: 150, align: 'left' });
    doc.moveDown();

    // Add table rows
    data.forEach(item => {
      doc.text(item.title, 100, doc.y, { width: 150, align: 'left' });
      doc.text(item.desc, 250, doc.y, { width: 150, align: 'left' });
      doc.text(item.date, 250, doc.y, { width: 150, align: 'left' });
      doc.text(item.status, 250, doc.y, { width: 150, align: 'left' });
      doc.text(item.image, 250, doc.y, { width: 150, align: 'left' });
      doc.moveDown();
    });

    doc.end();
  } catch (error) {
    res.status(500).send('Error generating PDF');
  }
});


TodoRouter.get("/:id",async(req,res)=>{
  try {
    const {id}=req.params;
    console.log(id);
    let todo=await Todomodel.findOne({_id:id});
    res.send(todo);
  } catch (error) {
    res.send({"msg":error.message});  
  }
});

TodoRouter.patch("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await Todomodel.findByIdAndUpdate({_id:id},req.body);
        res.send({"msg":"post edited successfully"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

TodoRouter.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await Todomodel.findByIdAndDelete({_id:id});
        res.send({"msg":"post deleted successfully"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

module.exports={TodoRouter};