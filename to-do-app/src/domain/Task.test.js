const {Task} = require("./models/Task")

describe('Pruebas de Domminio para las Tareas', () => {
    const Tarea = {
        id: 1,
        name: 'Levantarse', 
        description: 'Apagar el despertador y levantarse de la cama', 
        dateProgram: new Date("2023/05/10 11:00 AM"), 
        dateStart: undefined, 
        dateFinish: undefined, 
        duration: 0, 
        status: undefined
    }
    const nuevaTarea = new Task()
    test('Creacion de la tarea', () => {
        let tareaCreada = nuevaTarea.newTask(Tarea)
        expect(tareaCreada.status).toBe('PENDIENTE')
        expect(tareaCreada.dateProgram).not.toBeUndefined()
    })
    test('Inicio de una tarea', () => {
        nuevaTarea.startTask()
        expect(nuevaTarea.status).toBe('EN CURSO')
    })
    test('Terminar una tarea', () => {
        nuevaTarea.finishTask()
        expect(nuevaTarea.status).toBe('TERMINADA')
    })
})