import { NavLink, Link, Outlet } from 'react-router-dom';
import "../styles/index.css"

function RootLayout(){
    return <>
        <NavLink className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/" style={{marginLeft:"5px", marginRight:"5px"}}>Home</NavLink> | 
        
        <NavLink className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/blog" style={{marginLeft:"5px", marginRight:"5px"}}>Blog</NavLink> | 
        
        <NavLink className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/about" style={{marginLeft:"5px", marginRight:"5px"}}>About</NavLink>
        <p/>
        <Outlet/>
    </>
}

export default RootLayout;