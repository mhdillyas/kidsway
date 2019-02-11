const express =require('express');
const router =express.Router();
router.get('/test',(req,res)=>res.json({msg:'its works'}));
module.exports=router;