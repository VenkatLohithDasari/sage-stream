import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const DropDownMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
            <li ref={dropdownRef} className='relative'>
                <Link onClick={toggleMenu} href="#">{props.title} <label className="daisy-swap daisy-swap-rotate w-4 h-4">
                    <input type="checkbox" checked={isOpen} />
                    <ChevronUpIcon className="daisy-swap-on w-full h-full" />
                    <ChevronDownIcon className="daisy-swap-off w-full h-full" />
                </label></Link>
                <ul className={`menu rounded-box !bg-neutral-800 text-neutral-200 daisy-dropdown-content grid grid-rows-6 grid-flow-col gap-4 absolute top-[160%] left-[-15%] p-2 ${isOpen ? 'scale-y-100' : 'scale-y-0'} origin-top transition-all ease-in-out duration-150`}>
                    {props.children}
                </ul>
            </li >
        </>
    )
}

export default DropDownMenu