import '../style/Header.css'
function Header(){
    return(
            <div className="Menu">
                    <div className="Menu_1">
                        <a href="/" className='link'>Home</a>
                        <a href="/Class" className='link'>Class</a>
                        <a href="/Teacher" className='link'>Teacher</a>
                        <a href="/About" className='link'>About</a>
                    </div>
                
                    <div className="LogIn">
                        <a href="." className='link' id='LogIn'>Log In</a>    
                        <a href="." className='link' id='Reg'>Register</a>
                    </div>
            </div>
    )
}
export default Header