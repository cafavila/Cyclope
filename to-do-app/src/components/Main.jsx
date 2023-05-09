import Task from "./Task"
function Main() {
  const tareas = [{name: "Lavantarse", desc: "Levantarse de la cama", fecha: "02/05/2023", hora: "08:00 AM", status: "Pendiente", id: 1},
                  {name: "Lavarse los dientes", desc: "Con pasta de dientes", fecha: "02/05/2023", hora: "09:00 AM", status: "Pendiente", id: 2},
                  {name: "Llevar a la niña al colegio", desc: "Llevar a la catita al cole", fecha: "02/05/2023", hora: "10:00 AM", status: "Pendiente", id: 3},
                  {name: "Hacer gimnasia", desc: "Rutina diaria de ejercicios de gymnasia", fecha: "02/05/2023", hora: "11:00 AM", status: "Pendiente", id: 4},
                  {name: "Tomar desayuno", desc: "Tostadas con mantequilla y leche", fecha: "02/05/2023", hora: "12:00 AM", status: "Pendiente", id: 5},
                  {name: "Ducharse", desc: "Lavarse el poto con agua y jabon", fecha: "02/05/2023", hora: "13:00 PM", status: "Pendiente", id: 6}]
  
  const taskList = tareas.map(t => <li key={t.id}><Task tarea={t}/></li>)

  return (<section className="container mx-auto">
    <ul role="list">
      {taskList}
    </ul>
    </section>)
}

export default Main


//<Task tarea={{tarea}}/>
