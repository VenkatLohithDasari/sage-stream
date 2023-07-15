import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="lg:container mx-auto px-4">{children}</div>
    )
}

export default Container