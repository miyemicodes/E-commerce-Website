import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuPackage2 } from "react-icons/lu";
import { RxCaretRight } from "react-icons/rx";
import { FaRegBookmark } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";
import { RiNewsLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Outlet } from "react-router-dom";

const userpageRoutes = [
	{
		id: "orders",
		name: "Orders",
		icon: <LuPackage2 />,
	},
	{
		id: "saved-items",
		name: "Saved items",
		icon: <GiSelfLove />,
	},
	{
		id: "cart",
		name: "Cart",
		icon: <BsCart4 />,
	},
	{
		id: "bookmark",
		name: "Bookmark",
		icon: <FaRegBookmark />,
	},
	{
		id: "recently-viewed",
		name: "Recently Viewed",
		icon: <LuPackage2 />,
	},
	{
		id: "account-managment",
		name: "Account Managment",
		icon: <MdOutlineManageAccounts />,
	},
	{
		id: "newsletter",
		name: "Newsletter",
		icon: <RiNewsLine />,
	},
	{
		id: "close-account",
		name: "Close Account",
		icon: <LuPackage2 />,
	},
];

export default function User() {
	const navigate = useNavigate();
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);

	/* check main.jsx - i declear the children routes there */
	const handleNavigateToChildRoute = (userPassdInRoute) => {
		console.log(
			"aUserRoute:::",
			userPassdInRoute
		); /* TODO: remove console when done */
		navigate(userPassdInRoute?.id);

		// Hide sidebar on mobile screens
		if (window.innerWidth < 768) {
			setIsSidebarVisible(false);
		}
	};

	/* Show sidebar when Back button is clicked */
	const handleBackToMenu = () => {
		setIsSidebarVisible(true);
	};

	return (
    <div className='w-full flex flex-col md:flex-row items-start justify-center gap-2 p-3'>
      <div
        className={`w-full md:w-[350px] flex-col ${isSidebarVisible ? 'flex' : 'hidden md:flex'}`}
      >
        <h2 className='p-3 font-semibold bg-[#fbf3de]'>MY YesEL ACCOUNT</h2>
        <ul className=' w-full px-2 flex flex-col gap-1'>
          {userpageRoutes?.map((aUserRoute) => (
            <li
              className='w-full p-2 flex flex-col hover:bg-[#f5f5f2]'
              key={aUserRoute.id}
            >
              <button
                className='flex items-center justify-between'
                onClick={() => handleNavigateToChildRoute(aUserRoute)}
              >
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
      <div
        className={`w-full md:flex-1 flex-col ${!isSidebarVisible ? 'flex' : 'hidden md:flex'}`}
      >
        {/* Back button for mobile screens */}
        <div className='mb-3 mD:hidden'>
          <button
            className='p-2 text-sm font-semibold text-[#967f50] bg-[#fbf3de] rounded-md'
            onClick={handleBackToMenu}
          >
            ← Back to Menu
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
