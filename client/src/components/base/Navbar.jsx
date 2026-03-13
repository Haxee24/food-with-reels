import {NavLink} from "react-router";
import CustomerNav from "./CustomerNav";

import {Search, PlaySquare, Utensils, User} from 'lucide-react';

export default function Navbar(){
  const linkStyle =  "flex flex-col items-center justify-center text-xs text-gray-600 dark:text-neutral-400";
  const activeStyle = "dark:text-orange-500 text-orange-500";

  return (
    <CustomerNav/>
  )
}