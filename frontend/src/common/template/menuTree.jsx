import React from 'react'

export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)