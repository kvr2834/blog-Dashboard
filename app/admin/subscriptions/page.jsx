'use client';
import Sub from '@/components/AdminComponents/Sub';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

function Page() {
    const [email, setEmail] = useState([]);

    const fetchemail = async () => {
        const response = await axios.get('/api/email')
        setEmail(response.data.email)
    }
    useEffect(() => {
        fetchemail();
    }, [])

    const deleteEmail = async (mongoId) => {
        const response = await axios.delete('/api/email', {
            params: {
                id: mongoId
            }
        })
        if (response.data.success) {
            toast.success(response.data.msg)
            fetchemail();
        }
        else {
            toast.error("Error")
        }
    }

    return (
        <div className='text-black flex flex-col gap-8 mt-8 px-6'>
            <div>
                <h1 className='text-center text-2xl'>Subscriptions</h1>
            </div>

            <div className='flex items-center justify-center'>
                <table className='border-black border-1 text-sm text-left uppercase w-full lg:w-[1450px]'>
                    <thead>
                        <tr>
                            <th scope='col' className='hidden sm:block py-3 px-6'>Email Subscription</th>
                            <th scope='col' className='py-3 px-6'>Date</th>
                            <th scope='col' className='py-3 px-6'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {email && email.length > 0 ? (
                            email.map((item, index) => (
                                <Sub
                                    key={index}
                                    mongoId={item._id}
                                    deleteEmail={deleteEmail}
                                    email={item.email}
                                    date={item.date}
                                />
                            ))
                        ) : (
                            <tr>
                                <td className='px-6 py-4'>No Email Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Page
