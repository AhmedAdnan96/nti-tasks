const chalk = require('chalk');
const fs = require('fs') ;
const readFile = function(){
    try{
        customers = JSON.parse(fs.readFileSync('customer.json').toString()) ;
    }
    catch(e){
        customers = []
    }
    return customers; 
}


//add custom
const addCustom = function (custom){
    customer = readFile();
    customers.push(custom); 
    fs.writeFileSync('customer.json' , JSON.stringify(customer))
    console.log(chalk.green.inverse(` Congrats ... welcome dear `));

} 
//delet custom
const deletCustm = function(customerId){
    customer = readFile();
    index = customers.findIndex(custm=>{
        return custm.id == customerId
    })
    if(index == -1) console.log(chalk.red.inverse(` please try Again `))
    else {
        customers.splice(index , 1)
        fs.writeFileSync('customer.json' , JSON.stringify(customer))
        console.log(chalk.yellow.inverse(` delet done `));
    } 
}
//add balance
const addBalance = (customerId , newBalance) =>{
    customer = readFile();
    index = customers.findIndex(custm=>{
        return custm.id == customerId
    })
    if(index == -1 ) console.log(chalk.red.inverse('the balance not found'))
    else{
        customer[index].balance  = (Number(customer[index].balance) + Number(newBalance)).toString() ;
        fs.writeFileSync('customer.json' , JSON.stringify(customer))
        console.log(chalk.yellow.inverse(` balance done `));
    }
}
//show customer
const  showCutsom  = (id)=>{
    customer = readFile();
    const custom = customers.find(customer=>customer.id==id)
    if(!custom){
        console.log(chalk.white.inverse('the customer is not found'))
    }else {
        console.log(chalk.yellow.inverse(`name : ${custom.name}  balance :${custom.balance} id: ${custom.id} status: ${custom.status} `))
    }
}
//edit status for customer 
const editStatus = (name)=>{
    customer = readFile();
    const index = customers.findIndex(customer=>customer.name == name)
    if(index == -1)console.log(chalk.red.inverse('customer is not found'))
    else{
        customers[index] = {
            id:customers[index].id,
            name:customers[index].name,
            balance:customers[index].balance,
            status:true
        }
        fs.writeFileSync('customer.json' , JSON.stringify(customer))
        console.log(chalk.blue.inverse(`status is done `));
    }
}
module.exports={addCustom , deletCustm , addBalance ,  showCutsom , editStatus }
