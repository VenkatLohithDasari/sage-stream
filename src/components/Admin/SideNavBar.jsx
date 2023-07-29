"use client"
import { useState, useEffect, useRef } from 'react'

import websiteLogo from "../../../public/assets/images/sage stream logo.png";
import Image from 'next/image';

import SideNavBarMenu from './SideNavBarMenu'

const SideNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="w-64 min-h-screen bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-neutral-800 dark:border-gray-700 hidden 2xl:block">
                <aside className="px-5 py-8 overflow-y-auto">
                    <a href="#">
                        <Image
                            className="w-auto h-7"
                            src={websiteLogo}
                            alt="Website logo"
                        />
                    </a>
                    <div className="flex flex-col justify-between flex-1 mt-6">
                        <SideNavBarMenu />
                    </div>
                </aside>
            </div>
            <div className="relative">
                <div className={`${isOpen ? "w-64 absolute" : "w-12"} min-h-screen bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-neutral-800 dark:border-gray-700 2xl:hidden transition-all ease-in-out duration-150`} ref={menuRef}>
                    <aside className={`${isOpen ? "overflow-y-auto px-5 py-8" : ""}`}>
                        <label className={`daisy-swap daisy-swap-rotate ${isOpen ? "" : "px-3 py-8"}`}>
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" checked={isOpen} onClick={toggleMenu} readOnly />
                            {/* hamburger icon */}
                            <svg className="daisy-swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            {/* close icon */}
                            <svg className="daisy-swap-on fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </label>
                        <div className={`${isOpen ? "block" : "hidden"}`}>
                            <a href="#">
                                <Image
                                    className="w-auto h-7"
                                    src={websiteLogo}
                                    alt="Website logo"
                                />
                            </a>
                            <div className="flex flex-col justify-between flex-1 mt-6">
                                <SideNavBarMenu />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default SideNavBar