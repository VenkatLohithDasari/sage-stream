"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getCsrfToken } from "next-auth/react"

import SearchBar from '../SearchBar';
import Container from '../Container';
import DropDownMenu from './DropDownMenu';
import websiteLogo from "../../../public/assets/images/sage stream logo.png";


const NavBar = ({ session }) => {
    const router = useRouter();
    const [logoutProgress, setLogoutProgress] = useState(false)

    const logoOutHandle = async () => {
        setLogoutProgress(true)
        try {
            let csrfToken = await getCsrfToken()
            const response = await axios.post("api/auth/signout", { csrfToken })
            if (response.status == 200) {
                setUser({
                    isLoggedIn: false,
                    data: null,
                })
            }
        } catch (error) {
            console.log(" ")
        } finally {
            setLogoutProgress(false)
            window.location.href = '/'
        }
    }


    return (
        <>
            <nav className="bg-neutral-800">
                <Container>
                    <div className="flex items-center py-3 h-16">
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
                            <ul className="daisy-menu daisy-menu-horizontal px-1 hidden 2xl:flex">
                                <li><Link href="/">Home</Link></li>
                                <li>
                                    <DropDownMenu title="Genre">
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
                                    </DropDownMenu>
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
                        {session &&
                            // <div className="daisy-avatar ml-4">
                            //     <div className="rounded-full h-12">
                            //         <img src={user.data.profilePicture} fill alt="User Profile Picture" />
                            //     </div>
                            // </div>
                            <div className="daisy-dropdown daisy-dropdown-end ml-4">
                                <label tabIndex={0} className="daisy-btn daisy-btn-ghost daisy-btn-circle daisy-avatar">
                                    <Image className="w-10 rounded-full" src={session?.user.profilePicture} fill alt="User Profile Picture" />
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow daisy-menu daisy-menu-sm daisy-dropdown-content !bg-neutral-800 text-neutral-200 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="daisy-badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><Link href="#" onClick={!logoutProgress ? logoOutHandle : null}>
                                        {logoutProgress ?
                                            <span className="daisy-loading daisy-loading-dots daisy-loading-sm"></span>
                                            :
                                            "Logout"
                                        }
                                    </Link></li>
                                </ul>
                            </div>
                        }
                        {!session &&
                            <Link href="/auth/signin">
                                <div className="daisy-btn daisy-btn-primary ml-4 focus:outline-none h-0">
                                    Sign In
                                </div>
                            </Link>
                        }
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default NavBar