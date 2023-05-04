// Modelo Task
const TaskData = ({id, name, description, dateProgram, dateStart, dateFinish, duration, status}) => {
    Object.freeze({id, name, description, dateProgram, dateStart, dateFinish, duration, status})
}

class Task {
    constructor() {
        console.log('Task Instanciada')
    }
    newTask(TaskData) {
        this.TaskData = TaskData
        const ahora = new Date()
        if (this.TaskData.name === undefined) {throw new Error ("Debe darle un nombre a la tarea")}
        if (this.TaskData.dateProgram === undefined) {throw new Error ("Debe definir una fecha para la tarea")}
        if (this.TaskData.dateProgram < ahora) {throw new Error ("La fecha tiene que ser una fecha futura")}
        return({...TaskData, status: "PENDIENTE"})
    }
    startTask() {
        this.TaskData.dateStart = new Date()
        if (this.TaskData.dateProgram > this.TaskData.dateStart) {
            this.status = "EN CURSO"
        } else {
            this.status = "ATRASADA"
        }
        return({...TaskData, dateStart: this.TaskData.dateStart, staus: this.status})    
    }
    finishTask() {
        this.dateFinish = new Date()
        this.status = "TERMINADA"
        const dateEnd = Date.parse(this.dateFinish)
        const dateIni = Date.parse(this.TaskData.dateStart)
        this.duration = dateEnd - dateIni
        console.log(this.duration)
    }
}
module.exports = {Task}