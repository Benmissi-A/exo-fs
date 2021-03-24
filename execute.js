const fs = require('fs')
const { program } = require('commander');
program.version('0.0.1');

switch(process.argv[2]){

  case 'touch' :

    if(process.argv.length === 4){

      fs.writeFileSync(process.argv[3],'')
      console.log(process.argv[3]+' created ')
      break

    }else if(process.argv.length === 5){

      fs.writeFileSync(process.argv[3],process.argv[4])
      console.log(process.argv[3]+' created '+process.argv[4])
      break

    }else{
      console.log('error')
      process.exit(1)
    }
  case 'rm':

    if(process.argv.length === 4){

    fs.unlinkSync(process.argv[3])
    console.log(process.argv[3]+' removed')
    break

    }else{

      console.log('error')
      process.exit(1)

    }
  
  case 'read':

    if(process.argv.length === 4){
    
      let txt = fs.readFileSync(process.argv[3],'utf-8')
      console.log(txt)  
      break

    }else{

      console.log('error')
      process.exit(1)

    }
}