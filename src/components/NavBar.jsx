import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import SearchBar from './SearchBar';
import Container from './Container';

import websiteLogo from "../../public/assets/images/sage stream logo.png";


const NavBar = () => {
    return (
        <nav className="bg-neutral-800">
            <Container>
                <div className="flex items-center py-3">
                    <div className="daisy-dropdown 2xl:hidden">
                        <label tabIndex={0} className="daisy-btn daisy-btn-circle daisy-swap mr-4 !bg-neutral-800 text-neutral-200 border-none">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* hamburger icon */}
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        </label>
                        <ul tabIndex={0} className="daisy-dropdown-content daisy-menu !bg-neutral-800 text-neutral-200 w-56 rounded-box">
                            <li><Link href="/">Home</Link></li>
                            <li>
                                <details>
                                    <summary>Genre</summary>
                                    <ul className="max-h-60 overflow-auto">
                                        <li><Link href="#">Action</Link></li>
                                        <li><Link href="#">Adventure</Link></li>
                                        <li><Link href="#">Avant Garde</Link></li>
                                        <li><Link href="#">Award Winning</Link></li>
                                        <li><Link href="#">Boys Love</Link></li>
                                        <li><Link href="#">Comedy</Link></li>
                                        <li><Link href="#">Drama</Link></li>
                                        <li><Link href="#">Fantasy</Link></li>
                                        <li><Link href="#">Girls Love</Link></li>
                                        <li><Link href="#">Gourmet</Link></li>
                                        <li><Link href="#">Horror</Link></li>
                                        <li><Link href="#">Mystery</Link></li>
                                        <li><Link href="#">Romance</Link></li>
                                        <li><Link href="#">Sci-Fi</Link></li>
                                        <li><Link href="#">Slice of Life</Link></li>
                                        <li><Link href="#">Sports</Link></li>
                                        <li><Link href="#">Supernatural</Link></li>
                                        <li><Link href="#">Suspense</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href="#">Types</Link></li>
                            <li><Link href="/newest">Newest</Link></li>
                            <li><Link href="/updated">Updated</Link></li>
                            <li><Link href="/ongoing">Ongoing</Link></li>
                            <li><Link href="#">Request</Link></li>
                        </ul>
                    </div>
                    <div className="mr-4 w-56">
                        {/* Replace with your website logo */}
                        <Image src={websiteLogo} alt="Logo" width={224} className="w-full" />
                    </div>
                    <div className="flex-grow">
                        <ul class="daisy-menu daisy-menu-horizontal px-1 hidden 2xl:flex">
                            <li><Link href="/">Home</Link></li>
                            <li tabindex="0">
                                <details>
                                    <summary>Genre</summary>
                                    <ul className="!bg-neutral-800 text-neutral-200 grid grid-cols-3 gap-4 w-96">
                                        <li><Link href="#">Action</Link></li>
                                        <li><Link href="#">Adventure</Link></li>
                                        <li><Link href="#">Avant Garde</Link></li>
                                        <li><Link href="#">Award Winning</Link></li>
                                        <li><Link href="#">Boys Love</Link></li>
                                        <li><Link href="#">Comedy</Link></li>
                                        <li><Link href="#">Drama</Link></li>
                                        <li><Link href="#">Fantasy</Link></li>
                                        <li><Link href="#">Girls Love</Link></li>
                                        <li><Link href="#">Gourmet</Link></li>
                                        <li><Link href="#">Horror</Link></li>
                                        <li><Link href="#">Mystery</Link></li>
                                        <li><Link href="#">Romance</Link></li>
                                        <li><Link href="#">Sci-Fi</Link></li>
                                        <li><Link href="#">Slice of Life</Link></li>
                                        <li><Link href="#">Sports</Link></li>
                                        <li><Link href="#">Supernatural</Link></li>
                                        <li><Link href="#">Suspense</Link></li>

                                    </ul>
                                </details>
                            </li>
                            <li><Link href="#">Types</Link></li>
                            <li><Link href="/newest">Newest</Link></li>
                            <li><Link href="/updated">Updated</Link></li>
                            <li><Link href="/ongoing">Ongoing</Link></li>
                            <li><Link href="#">Request</Link></li>
                        </ul>
                    </div>
                    <div className="w-96">
                        <SearchBar />
                    </div>
                    <button className="text-gray-200 bg-transparent border border-gray-200 rounded py-2 px-4 ml-4 focus:outline-none">
                        Sign In
                    </button>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar