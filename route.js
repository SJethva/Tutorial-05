var express = require('express');
var computer = require('./Model/compute')
var router = express.Router();


//to fetch movies
router.get('/getdata',async(req,res)=>{
    const cdata = await computer.find()
    res.send(cdata)
})

//to add the movies
router.post("/computer",async(req,res)=>{
    const cdata = new computer({
        name:req.body.name,
        password:req.body.password
    })

    await cdata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/computer/:id',async (req,res)=>{
    const cdata = await computer.findOne({_id:req.params.id})
    cdata.name = req.body.name
    cdata.password = req.body.password
    await cdata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/computer/:name",async(req,res)=>{
    await computer.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})

module.exports = router 