import CustomerNav from "./CustomerNav";
import PartnerNav from "./PartnerNav";
import { useAuth } from "../../context/auth/authContext";

export default function Navbar(){
  const { user } = useAuth();
  const partner = user?.role === "partner";
  
  return partner? <PartnerNav />:<CustomerNav/>
}