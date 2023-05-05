function Task(props) {
    const {tarea} = props
    return(<article className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3">
                <div key={tarea.hora} className="group relative flex gap-x-5 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-18 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <p className="tx-brown-100 font-bold text-xs">{tarea.hora}</p>
                  </div>
                  <div>
                      <span className="absolute inset-0" />
                      {tarea.name}
                    <p className="mt-1 text-gray-600">{tarea.desc}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {tarea.status}
                    </span>
                  </div>
                </div>
            </div>
    </article>)
}
export default Task