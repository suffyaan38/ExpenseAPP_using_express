const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const expenseRouter=require('./routes/expenses')
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(expenseRouter);
app.listen(4000);