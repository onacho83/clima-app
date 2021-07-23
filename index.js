const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")



const main = async()=>{
    let opt;
   do {
       console.clear();
       opt = await inquirerMenu();
      console.log(opt);

       await pausa();

   } while (opt!==0);


}

main();