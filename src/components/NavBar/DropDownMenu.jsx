import { useState, useEffect, useRef } from 'react';

const DropDownMenu = (props) => {
    return (
        <>
            <details>
                <summary>{props.title}</summary>
                {props.children}
            </details>
        </>
    )
}

export default DropDownMenu