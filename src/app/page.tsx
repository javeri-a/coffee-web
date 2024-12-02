
import About from "./about/page";
import ContactUs from "./contact/page";
import Header from "./header/page";
import LatestProducts from "./latest product/page";
import Menu from "./menu/page";
import CustomerReviews from "./reviews/page";



export default function Home(){
  return(
    <div>
  <Header/>
<About/>
<Menu/>
<LatestProducts/>
<CustomerReviews/>
   <ContactUs/>

    
    </div>
  )
}