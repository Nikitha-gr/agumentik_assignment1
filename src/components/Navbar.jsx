import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{display:"flex", justifyContent:"space-evenly",padding:"10px", background:"orchid",color:"white"}}>
            {/* <div> */}
                <Link to="/" style={{textDecoration:"none",color:"white",fontSize:"1.5rem"}}>Home</Link>
                <Link to="/cart" style={{textDecoration:"none",color:"white",fontSize:"1.5rem"}}>Cart</Link>
                <Link to="/login" style={{textDecoration:"none",color:"white",fontSize:"1.5rem"}}>Login</Link>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;