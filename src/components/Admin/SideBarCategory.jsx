import React from 'react'

const SideBarCategory = (props) => {
    return (
        <div className="space-y-3 ">
            <label className="px-3 text-xs uppercase">
                {props.title}
            </label>
            {props.children}
        </div>
    )
}

export default SideBarCategory