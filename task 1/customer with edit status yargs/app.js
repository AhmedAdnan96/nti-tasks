const chalk = require('chalk') ; 
const { argv } = require('yargs');
const yargs = require("yargs") ;
const myMethods  = require('./myFunction');

//add customer 
yargs.command({
    command: "addCustomer" , 
    describe : "enter detail customer" , 
    builder : {
            nCustomer : {
                type : "string"  ,
                describ : 'name customer' , 
                demandOption : true  
            } , 
            bCustomer : {
                type : 'string ' , 
                describe : 'balance customer' , 
            } ,
            idCustomer : {
                type: 'string' ,
                describe : " id your custmer"
            }
    } , 
    handler : function(argv){
        let cust = {
            name : argv.nCustomer, 
            balance: argv.bCustomer , 
            id : argv.idCustomer ,
            status:false
            
        }
        myMethods.addCustom(cust);
    }
})

// delet customer
yargs.command({
    command : "delCustomer" ,
    builder: {
        id : {
        type: "number" ,
        demandOption : true , 
        }

    } ,
    handler :function(argv){
        myMethods.deletCustm(argv.id)
    }
})
//add balance
yargs.command({
    command:'addBalance',
    describe:'add your balance',
    builder:{
        id:{
            type:'string',
            demandOption:true
        },
        addBalance:{
            type:'string',
            describe:' new balance',
            demandOption:true
        },

    },
    handler:function(argv){
        myMethods.addBalance(argv.id, argv.addBalance)
    }
})
//showCustomer by id
yargs.command({
    command : "showCustomer" , 
    describe : 'show one customer' , 
    builder : {
        id : {
            type : 'string' , 
            demandOption: 'true'
        }
    } , 
    handler : (argv)=>{
        myMethods.showCutsom(argv.id)
    }
})
// yargs edit status for customer
yargs.command({
    command: "editStatus",
    describe: "edit status customer",
    builder:{
        name:{
            type: 'string',
            demandOption:true
        }
    },
    handler:function(argv){
        myMethods.editStatus(argv.name)
    }
})

yargs.parse();

