function Task(props) {
    const {tarea} = props
    return(<article className="flex items-start space-x-6 p-6 bg-slate-50 rounded-sm">
        <div className="min-w-0 relative flex-auto">
            <aside className="flex-none rounded-md bg-slate-100">
                <h1 className="text-red-600">{tarea.hora}</h1>
            </aside>
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20">{tarea.name}</h2>
                <p className="text-slate-400">{tarea.desc}</p>
                <p className="text-slate-400">{tarea.status}</p>
            </div>
        </div>
    </article>)
}
export default Task