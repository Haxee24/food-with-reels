import React from 'react'
import { NavLink } from 'react-router';
import {Search, PlaySquare, Utensils, User} from 'lucide-react';

function CustomerNav() {
    const linkStyle =  "flex flex-col items-center justify-center text-xs text-gray-600 dark:text-neutral-400";
    const activeStyle = "dark:text-orange-500 text-orange-500";

    return (
        <div className="sticky bottom-0 left-0 w-full bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 h-16 flex justify-around items-center ">
            <NavLink
                to="/search"
                className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }
            >
                <Search size={22} />
                <span>Search</span>
            </NavLink>

            <NavLink
                to="/reels"
                className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }
            >
                <PlaySquare size={22} />
                <span>Reels</span>
            </NavLink>

            <NavLink
                to="/stores"
                className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }
            >
                <Utensils size={22} />
                <span>Food</span>
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
                }
            >
                <User size={22} />
                <span>Profile</span>
            </NavLink>

        </div>
  )
}

export default CustomerNav