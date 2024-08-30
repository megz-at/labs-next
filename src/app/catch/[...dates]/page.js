import React from 'react'

export default function Dates({ params }) {
    console.log(params);
    return (
        <div className='text-center'>
            <ul>
                {
                    params.dates.map((param) => <li>{param}</li>)
                }
            </ul>
        </div>
    )
}
