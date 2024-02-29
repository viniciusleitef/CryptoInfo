    import './Header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <nav>
            <div className='logo'>
                <Link to='/' className='noTextDecoration'><h1 className='logo'>Cripto Info</h1></Link>
            </div>

            <div className='menu'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/Ativos' className='link'>Ativos</Link>
                <Link to='#' className='link'>Sobre</Link>
                <Link to='#' className='link'>Contato</Link>
            </div>
        </nav>
    )
}

export default Header;

