require('dotenv').config()


const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
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
                const termino = await leerInput('Ciudad: ');
                //buscar los Lugares
                const lugares = await busquedas.ciudad(termino);
                //seleccionar lugar
                const id = await listarLugares(lugares);
                
                const lugarSel = lugares.find( l => l.id === id );
                console.log(lugarSel);
                const clima = await busquedas.climarLugar( lugarSel.lat, lugarSel.lng );
               

                //clima

                //mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
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