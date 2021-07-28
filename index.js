const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busqueda");



const main = async()=>{

    const busquedas = new Busquedas();
    let opt;

   do {
       console.clear();
       opt = await inquirerMenu();
       

       switch ( opt ) {
           case 1:
                //Mostrar Mensaje
                const lugar = await leerInput('Ciudad: ');
                console.log(lugar);
                //buscar los Lugares

                //seleccionar lugar

                //clima

                //mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
                console.log('Temperatura:',);
                console.log('Minima:',);
                console.log('Maxima:',);
               break;
       
           default:
               break;
       }

       if ( opt !== 0 )await pausa();

   } while (opt!==0);


}

main();