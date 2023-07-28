import React from 'react'
import Link from 'next/link'

const SideBarMenuBtn = (props) => {
    return (
        <>
            <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-gray-200 hover:text-gray-700"
                href={props.href}
            >
                {props.children}
            </Link>
        </>
    )
}

export default SideBarMenuBtn