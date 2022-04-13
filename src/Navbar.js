const Navbar = () => {
    return (
        <>
        <nav className="Navbar">
        <div className="links">
           <a href="/" className="anchors">Home</a>
                <a href="/Create" className="anchors">New Blog</a>
                <a href="/About" className="anchors">History</a>
                <a href="/Registration" className="anchors">Sign-up</a>
                <a href="/Login" className="anchors">Login</a>
                <a href="/Logout" className="anchors">Logout</a>
            <h1>The Stars Blog</h1>
                
            </div>
        </nav>
        </>
    );
}

export default Navbar;