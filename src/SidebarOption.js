import React from 'react'
import './SidebarOption.css'

export default function SidebarOption({ option, Icon }) {
    return (
        <div className='sidebarOption'>
            <p>{option}</p>
        </div>
    )
}

