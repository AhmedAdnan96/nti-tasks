const yargs = require("yargs")  ;
const dataApi = require('./myFunction') ; 
const chalk = require('chalk');

yargs.command({
    command:'showApi',
    builder :{
        name:  {
              type: 'string', 
              demanOption : true ,
              descripe : 'name api url'  
    },
    id :{
        type: 'number', 
        demanOption : true ,
        descripe : 'name api id' 

    }
},
    handler: function (argv) {
        dataApi.showApi(argv.name, argv.id)
    }
})
yargs.parse()