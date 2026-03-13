import CustomerNav from "./CustomerNav";
import PartnerNav from "./PartnerNav";

export default function Navbar(){
  const partner = true;
  
  return partner? <PartnerNav />:<CustomerNav/>
}