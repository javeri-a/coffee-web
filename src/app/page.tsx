
import About from "./about/page";
import ContactUs from "./contact/page";


import Header from "./header/page";


import P from "./Latest/page";

import MenuListing from "./ourmenu/page";
import CustomerReviews from "./reviews/page";





export default function Home(){
  return(
    <div>
  <Header/>
<About/>
<MenuListing/>
<P/>
<CustomerReviews/>
   <ContactUs/>


  
    
    </div>
  )
}