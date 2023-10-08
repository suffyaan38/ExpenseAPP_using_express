const express=require('express');
const router=express.Router();
const path=require('path');
const expenseController=require('../controllers/expense')

router.post('/delete',expenseController.deleteData)
router.get('/add',(req,res,next)=>{
    //console.log('in get')
    res.sendFile(path.join(__dirname,'../','views','add.html'));
})

router.post('/add',expenseController.saveExpenses);
router.get('/',expenseController.getAll);





module.exports=router;