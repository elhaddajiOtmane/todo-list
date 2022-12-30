import '../style/Navbar.css';
const Navbar = () =>{
    return(
       
       
        <nav className="navbar">

            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/" style={{
                    color:"white",
                    textSize:"10px"

                }}>n\New Blog</a>
            </div>
        </nav>
       
    );
    }
export default Navbar;