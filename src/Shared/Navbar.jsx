import { useEffect, useState } from "react";
import logo from "../assets/image/logo.png"
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    // set theme
    const [theme,setTheme] = useState('light');
    const handleTheme = (e) => {
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
        console.log(theme);
    }
    useEffect(() => {
        localStorage.setItem('theme',theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])

    

    const navLink = <>
        <NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-orange-400 font-medium text-xl eb-serif border-b-2  border-orange-400"
                : isPending
                    ? "text-white font-medium text-xl eb-serif"
                    : "text-white font-medium text-xl eb-serif"
        } to="/"><a>Home</a></NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-orange-400 font-medium text-xl eb-serif border-b-2  border-orange-400"
                : isPending
                    ? "text-white font-medium text-xl eb-serif"
                    : "text-white font-medium text-xl eb-serif"
        } to="/allCraftItem"><a>All Art&Craft Items</a></NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-orange-400 font-medium text-xl eb-serif border-b-2  border-orange-400"
                : isPending
                    ? "text-white font-medium text-xl eb-serif"
                    : "text-white font-medium text-xl eb-serif"
        } to="/addCraft"><a>Add Craft Item</a></NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-orange-400 font-medium text-xl eb-serif border-b-2  border-orange-400"
                : isPending
                    ? "text-white font-medium text-xl eb-serif"
                    : "text-white font-medium text-xl eb-serif"
        } to="/craftList"><a> My Art&Craft List</a></NavLink>
    </>

    return (
        <div className="navbar container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52 space-y-3">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 ">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleTheme} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                <Link to="/login" className="px-4 py-2 rounded-md text-white border bg-orange-500 border-orange-500 hover:bg-transparent hover:text-orange-500 eb-serif font-medium text-xl">Login</Link>
                <Link to="/register" className="px-4 py-2 rounded-md text-white border bg-orange-500 border-orange-500 hover:bg-transparent hover:text-orange-500 eb-serif font-medium text-xl">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;