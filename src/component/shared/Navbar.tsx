import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logo from "../../assets/book.ico"

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/books">Books</Link></li>
                            <li><Link href="/listed-books">Listed Books</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className=" flex items-center gap-3 text-xl">
                        <Image src={logo} alt='logo' width={30} height={30} />
                        <span className='text-xl font-bold'>Book Vibe</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/books">Books</Link></li>
                        <li><Link href="/listed-books">Listed Books</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn btn-success">SignIn</a>
                    <a className="btn btn-error">Signup</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;