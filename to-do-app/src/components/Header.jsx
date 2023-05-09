import logo from '../assets/Granadina-logo.png'
function Header() {
    return(
        <header className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-32 w-auto"
            src={logo}
            alt="Todo - Granadina Logo"
          />
          <h2 className="mt-2 text-center text-3xl text-cien-100 font-bold leading-9 tracking-tight">
            OrganizaT
          </h2>
        </header>    
    )
}

export default Header