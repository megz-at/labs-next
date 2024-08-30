import { TfiDashboard, TfiWrite } from 'react-icons/tfi'
import React from 'react'
import { FaComment, FaSearch, FaSlidersH, FaUser } from 'react-icons/fa'

export default function SideBar () {
  return (
    <aside className='bg-light p-3 rounded-2'>
      <ul>
        <li className='text-capitalize my-3'>
          <button
            type='button'
            className='btn btn-primary p-2 w-100 text-start d-flex align-items-center gap-2'
          >
            Posts
          </button>
        </li>

        <li className='text-capitalize my-3'>
          <button
            type='button'
            className='btn btn-primary p-2 w-100 text-start d-flex align-items-center gap-2'
          >
            Add post
          </button>
        </li>

        <li className='text-capitalize my-3'>
          <button
            type='button'
            className='btn btn-primary p-2 w-100 text-start d-flex align-items-center gap-2'
          >
            about
          </button>
        </li>

        <li className='text-capitalize my-3'>
          <button
            type='button'
            className='btn btn-primary p-2 w-100 text-start d-flex align-items-center gap-2'
          >
            log out
          </button>
        </li>
      </ul>
    </aside>
  )
}
