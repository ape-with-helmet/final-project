import React from 'react'

const Table = ({data}) => {
    return (
        <ul>
            {data.map((item)=>(
                <li key={item.id}>
                {item.name}
            </li>
            ))}
        </ul>
    )
}

export default Table