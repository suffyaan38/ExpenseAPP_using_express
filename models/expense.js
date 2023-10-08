const path=require('path');
const db=require('../util/database');

class Expense{
    constructor(amount,description,category){
        this.amount=amount;
        this.description=description;
        this.category=category;
    }
    save(){
        // console.log('this.amount:',this.amount)
        // console.log('this.description:',this.description)
        // console.log('this.category:',this.category)
        return db.execute('insert into expense1(amount,description,category) values (?,?,?)',
        [this.amount,this.description,this.category]);
    }
    static fetchAll(){
        return db.execute('select * from expense1');
    }

    static deleteById(id){
        return db.execute('delete from expense1 where id=?',[id]);
    }
}

module.exports=Expense;
