import logo from '../assets/Granadina_logo-color.png'
function Header() {
    return(
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white">
          <img
            className="mx-auto h-32 w-auto"
            src={logo}
            alt="Todo - Granadina Logo"
          />
          <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            To do - Organiza tu dia
          </h2>
        </div>    
    )
}

export default Header