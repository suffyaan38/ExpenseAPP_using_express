const Expense = require('../models/expense');

exports.saveExpenses = (req, res, next) => {
    const {amount,description,category} =req.body
    console.log(amount);
    console.log(description);
    console.log(category);
  const newExpense = new Expense(amount,description,category);
//   console.log(newExpense.amount);
//   console.log(newExpense.description);
//   console.log(newExpense.category);

  newExpense.save()
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
      // Handle the error, e.g., send an error response
    });
};

exports.getAll=(req,res,next)=>{
    Expense.fetchAll()
    .then((rows)=>{
        const expenseData=rows[0];
        const htmlContent=`<html>
        <body>
          <h1>ALL EXPENSES</h1>
          <ul>
          <li><a href="/add">ADD</li>
          <ul>
          <ul>
            ${expenseData.map((expense) => `
              <li>
                <h3>Amount: ${expense.amount}</h3>
                <p>Description: ${expense.description}</p>
                <p>Category: ${expense.category}</p>
                <form action="/delete" method="post">
                  <input type="hidden" name="id" value="${expense.id}">
                  <input type="submit" value="Delete">
                </form>
                <form action="/edit" method="post">
                  <input type="hidden" name="id" value="${expense.id}">
                  <input type="submit" value="Edit">
                </form>
              </li>
            `).join('')}
          </ul>
        </body>
      </html>`;
      res.send(htmlContent);
    })
}

exports.deleteData=(req,res,next)=>{
    console.log(req.body.id)
    Expense.deleteById(req.body.id)
    .then(
        res.redirect('/home')
    ).catch(err=>console.log(err));
}
