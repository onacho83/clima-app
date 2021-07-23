const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.cyan} Elegir Ciudad`
            },
            {
                value: 2,
                name: `${'2.'.cyan} Historial`
            },
            {
                value: 0,
                name: `${'0.'.cyan} salir`
            }
         ]
    }
]


const inquirerMenu =  async()=>{

    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opcion'.white);
    console.log('=======================\n'.green);
    
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;

}
const pausa = async()=>{    

    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presiones ${'Enter'.green} para continuar`
    }]
    
    await inquirer.prompt(question);
}

const leerInput = async (message)=>{

    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if(value.length === 0){
                return 'Por favor ingrese un valor;'
            }
            return true;
        }
    }];
    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareaBorrar = async(tareas =[])=>{
    
    const choices = tareas.map((tarea, i) =>{
        const idx = `${i+1}. `.cyan

          return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`

            }
        }
    );

    choices.unshift({
        value: '0',
        name: '0.'.cyan + '  cancelar'
    })

    const preguntas =[
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmacion = async(mensaje)=>{

    const pregunta= [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje,
        }   
    ]

    const {ok} = await inquirer.prompt(pregunta);
    return ok;

}

const mostrarListadoChecklist = async(tareas =[])=>{
    
    const choices = tareas.map((tarea, i) =>{
        const idx = `${i+1}. `.cyan

          return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
            }
        }
    );

   
    const pregunta =[
        {
            type: 'checkbox',
            name: 'ids',
            message: 'selecciones',
            choices
        }
    ]
    
    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareaBorrar,
    confirmacion,
    mostrarListadoChecklist
}