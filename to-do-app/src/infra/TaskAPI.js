class TaskAPI {
    constructor() {
        console.log("API Tareas Instanciada")
    }
    async getTaskbyId(id) {
        const data = await fetch(`http://localhost:3000/getTaskById?id=${id}`)
            .then(response => response.json())
        return data ? Task.newTask(data) : null
    }

    async save(task) {
        const data = Task.toJSON(task)
        const {id} = task
        if (id) {
            await fetch("http://localhost:3000/update")
        }
    }
}

modules.exports = {TaskAPI}