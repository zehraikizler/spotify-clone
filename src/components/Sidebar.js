import React from 'react';
import logo from "img/logo.svg";
import Menu from "components/Sidebar/Menu";
import { Icon } from "./../Icons";
import PlayList from "./Sidebar/PlayList";
import DownloadApp from "./Sidebar/DownloadApp";

export default function Sidebar() {
  return (
    <aside className='w-60 pt-6 flex flex-col flex-shrink-0 bg-black'>
      <div className='mb-7 px-6'> 
        <img src={logo} alt="spotify" className='h-10' />
      </div>

      <Menu />

      <nav className='mt-6'>
        <ul>
          <li>
            <a href='#' className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black'>
                <Icon name='plus' size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href='#' className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-200 bg-white rounded-sm bg-opacity-90 group-hover:bg-opacity-100'>
                <Icon name='heart' size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <PlayList />

      <DownloadApp />

    </aside>
  )
}
