import React from 'react'

function Sub({email, date, mongoId, deleteEmail}) {
    const emailDate = new Date(date);
    return (
        <tr className='border-black border-1'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 font-medium text-gray-900 whitespace-nowrap py-4'>
                {email?email : "No email"}
            </th>
            <td className='px-6 py-4'>
                {emailDate.toDateString()}
            </td>
            <td className='px-6 py-4 cursor-pointer' onClick={() => deleteEmail(mongoId)}>
                X
            </td>
        </tr>
    )
}

export default Sub
