import { NavLink } from "react-router";
import { LayoutDashboard, PlaySquare, PlusSquare, Store, User } from "lucide-react";

function PartnerNav() {
  const linkStyle =
    "flex flex-col items-center justify-center text-xs text-gray-600 dark:text-neutral-400";

  const activeStyle = "text-orange-500 dark:text-orange-500";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 h-16 flex justify-around items-center">

      <NavLink
        to="/partner/dashboard"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        <LayoutDashboard size={22} />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/partner/add-reel"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        <PlusSquare size={22} />
        <span>Add Reel</span>
      </NavLink>

      <NavLink
        to="/partner/store"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        <Store size={22} />
        <span>Store</span>
      </NavLink>

      <NavLink
        to="/partner/profile"
        className={({ isActive }) =>
          `${linkStyle} ${isActive ? activeStyle : ""}`
        }
      >
        <User size={22} />
        <span>Profile</span>
      </NavLink>

    </div>
  );
}

export default PartnerNav;