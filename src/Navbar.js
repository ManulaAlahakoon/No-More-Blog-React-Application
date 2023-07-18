import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>No More Blog</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: 'rgb(2, 154, 249)',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;