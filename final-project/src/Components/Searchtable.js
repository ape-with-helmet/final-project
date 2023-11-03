import React from 'react'

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>SKU</th>
                </tr>
                {data.map((item)=>(
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.sku}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    )
}

export default Table