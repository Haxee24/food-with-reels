import CustomerNav from "./CustomerNav";
import PartnerNav from "./PartnerNav";

export default function Navbar(){
  const partner = false;
  
  return partner? <PartnerNav />:<CustomerNav/>
}