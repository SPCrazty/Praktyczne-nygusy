import './globals.css'

const Navbar = () => {
    
    let nav1= "Strona Główna"
    return ( 
        <nav className='w-screen'>
            <li className="list-none inline-flex items-center justify-items-center">
                <ul className='ms-10'>Usługi</ul>
                <ul className='ms-10'>{ nav1 }</ul>
                <ul className='ms-10'>O Nas</ul>
            </li>
        </nav>
     );
}
 
export default Navbar;