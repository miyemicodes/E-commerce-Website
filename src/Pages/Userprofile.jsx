import React from "react";
import { useNavigate } from "react-router-dom";
import { LuPackage2 } from "react-icons/lu";
import { RxCaretRight } from "react-icons/rx";
import { FaRegAddressBook, FaRegBookmark } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { RiNewsLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Cart } from "../Components/CART/Cart";
import { Outlet } from 'react-router-dom';

const userpageRoutes = [
  {
    id: 'orders',
    name: 'Orders',
    icon: <LuPackage2 />,
  },
  {
    id: 'saved-items',
    name: 'Saved items',
    icon: <GiSelfLove />,
  },
  {
    id: 'cart',
    name: 'Cart',
    icon: <BsCart4 />,
  },
  {
    id: 'bookmark',
    name: 'Bookmark',
    icon: <FaRegBookmark />,
  },
  {
    id: 'recently-viewed',
    name: 'Recently Viewed',
    icon: <LuPackage2 />,
  },
  {
    id: 'account-managment',
    name: 'Account Managment',
    icon: <MdOutlineManageAccounts />,
  },
  {
    id: 'newsletter',
    name: 'Newsletter',
    icon: <RiNewsLine />,
  },
  {
    id: 'close-account',
    name: 'Close Account',
    icon: <LuPackage2 />,
  },
];

export default function User() {
	const navigate = useNavigate();

  /* check main.jsx - i declear the children routes there */
  const handleNavigateToChildRoute = (userPassdInRoute) => {
    console.log('aUserRoute:::', userPassdInRoute) /* TODO: remove console when done */
	navigate(userPassdInRoute?.id);
  };
	return (
    <>
      <div className='w-[100%]  flex items-start justify-center gap-2 p-3'>
        <div className=' w-full md:w-[30%]'>
          <h2 className='p-3 font-semibold bg-[#fbf3de]'>MY YesEL ACCOUNT</h2>

          <ul className=' w-[100%] px-2 flex flex-col gap-1'>
            {userpageRoutes?.map((aUserRoute) => (
              <li
                className='w-full p-2 flex flex-col hover:bg-[#f5f5f2]'
                key={aUserRoute.id}
              >
                <button className='flex items-center justify-between' onClick={() => handleNavigateToChildRoute(aUserRoute)}>
                  <div className='flex items-center gap-3'>
                    {aUserRoute.icon}
                    <span>{aUserRoute.name}</span>
                  </div>
                  <RxCaretRight />
                </button>
              </li>
            ))}
          </ul>

          <button className='p-3 font-semibold text-center text-[#d6af74]'>
            LOG OUT
          </button>
        </div>

        {/* other children of user routes are here */}
        <Outlet />
      </div>
    </>
  );
}
