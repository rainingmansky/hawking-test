'use client'

import { Cart } from "@/app/widgets"
import { useGetHeader } from "../api/useGetHeader"

export const Header = () => {
  const  { headerData } = useGetHeader();

  return <nav className="w-full flex justify-between h-20 bg-header-bg px-40 py-3 items-center">
    <ul className='flex gap-x-5 w-full'>
      <li>
        Привет, {headerData?.UserName ?? 'user'}
      </li>
      <li>
        <button>
          Home
        </button>
      </li>
      <li>
        <button>
        About
        </button>
      </li>
      <li>
        <button>
        Favourite
        </button>
      </li>
      <li>
        <button>
        Orders
        </button>
      </li>
      <li>
        <button>
        Account
        </button>
      </li>
    </ul>
      <div>
        <Cart />
      </div>
    

  </nav>
}