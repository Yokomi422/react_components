import React, { useState } from "react";
import { AcademicCapIcon, CheckIcon, ArrowPathIcon, HomeIcon, RadioIcon, ReceiptRefundIcon, TrashIcon, 
  BookmarkIcon, PowerIcon, ChevronDoubleUpIcon} from "@heroicons/react/24/solid";

export default function Sidebar() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0 transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} p-2 overflow-y-auto text-center bg-gray-900`}>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <AcademicCapIcon className="h-6 w-6 text-gray-200 bg-blue-600 rounded p-1" />
            <h1 className="font-bold text-gray-200 tex-[15px] ml-3">Tailwindbar</h1>
            <CheckIcon className="ml-20 cursor-pointer h-6 w-6" onClick={toggleSidebar}></CheckIcon>
          </div>
          <hr className="my-2 tet-gray-600"/>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <ArrowPathIcon className="text-sm h-6 w-6" />
          <input type="text" placeholder="Search" className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"/>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
          <HomeIcon className="text-sm h-6 w-6" />
          <span className="text-[15px] ml-4 text-gray-200">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
          <RadioIcon className="text-sm h-6 w-6" />
          <span className="text-[15px] ml-4 text-gray-200">Download</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
          <ReceiptRefundIcon className="text-sm h-6 w-6" />
          <span className="text-[15px] ml-4 text-gray-200">Reload</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white" onClick={toggleSubmenu}>
          <BookmarkIcon className="text-sm h-6 w-6" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200">ChatBox</span>
            <span className="text-sm rotate-180" id="arrow">
              <ChevronDoubleUpIcon className={`h-6 w-6 ${isSubmenuOpen ? "" : "rotate-180"}`}/>
            </span>
          </div>
        </div>
        <div className={`text-left text-sm font-thick mt-2 w-4/5 mx-auto text-gray-100 transition-all duration-100 transform ${isSubmenuOpen ? "max-h-[100vh]" : "max-h-0 overflow-hidden"}`} id="submenu">
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded mt-1">Social</h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded mt-1">Personal</h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded mt-1">Friends</h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
          <TrashIcon className="text-sm h-6 w-6" />
          <span className="text-[15px] ml-4 text-gray-200">Trash</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-blue-700 text-white">
          <PowerIcon className="text-sm h-6 w-6" />
          <span className="text-[15px] ml-4 text-gray-200">Logout</span>
        </div>
      </div>
    </div>
  );
}
