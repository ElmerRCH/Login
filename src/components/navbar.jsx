import {NavLink} from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className=" flex flex-wrap  justify-center w-screen ">
            <h1 className="font-serif text-5xl text-center">Bienvenido</h1>
            <div className="my-4 ml-2 space-x-4 ">
                <NavLink className="bg-purple-700 cursor-pointer rounded " to="/signup">Registrarse</NavLink>
                <NavLink className="bg-indigo-600 cursor-pointer rounded " to="/" >Iniciar Sesion</NavLink>
            </div>
           
        </nav>
    )
}

export default NavBar;