import { TfiDashboard, TfiWrite } from 'react-icons/tfi'
import React from 'react'
import { FaComment, FaSearch, FaSlidersH, FaUser } from 'react-icons/fa'

export default function SideBar () {
  return (
    <aside className='bg-light p-3 rounded-2'>
      <ul>
        

        <li className='text-capitalize'>
          <div className='input-group flex-nowrap'>
            <span className='input-group-text' id='addon-wrapping'>
              <FaSearch />
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='Search'
              aria-label='Username'
              aria-describedby='addon-wrapping'
            />
          </div>
        </li>

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
