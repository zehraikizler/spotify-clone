import React from 'react'
import logo from "img/logo.svg"

export default function Sidebar() {
  return (
    <aside className='w-60'>
      <img src={logo} alt="spotify" className='h-10' />
    </aside>
  )
}
