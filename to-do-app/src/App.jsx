import { useState } from 'react'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto bg-violet-400 p-4'>
      <h1 className='text-3xl text-gray-900'>To-do</h1>
      <Task tarea={{name: "Lavantarse", desc: "Levantarse de la cama", fecha: "02/05/2023", hora: "08:00 AM", status: "Pendiente"}}/>
      <Task tarea={{name: "Lavarse los dientes", desc: "Con pasta de dientes", fecha: "02/05/2023", hora: "09:00 AM", status: "Pendiente"}}/>
      <Task tarea={{name: "Llevar a la niña al colegio", desc: "Llevar a la catita al cole", fecha: "02/05/2023", hora: "10:00 AM", status: "Pendiente"}}/>
      <Task tarea={{name: "Hacer gimnasia", desc: "Rutina diaria de ejercicios de gymnasia", fecha: "02/05/2023", hora: "11:00 AM", status: "Pendiente"}}/>
      <Task tarea={{name: "Tomar desayuno", desc: "Tostadas con mantequilla y leche", fecha: "02/05/2023", hora: "12:00 AM", status: "Pendiente"}}/>
      <Task tarea={{name: "Ducharse", desc: "Lavarse el poto con agua y jabon", fecha: "02/05/2023", hora: "13:00 PM", status: "Pendiente"}}/>
    </div>
  )
}

export default App
