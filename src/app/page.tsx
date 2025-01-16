import Footer from "@/component/Fotter/Fotter";
import Aboutpage from "./about/page";
import Banner from "./Component/Banner";
import Contact from "./contact/page";
import Projectpage from "./project/page";

import MarqueeDemo from "./skills/page";


;

export default function Home() {
  return (
    <div className="">
      <Banner/>
     <Aboutpage/>
     <div>
      
     {/* dagtfhg */}
     <MarqueeDemo/>
     <Projectpage/>
     <Contact/>
     <Footer/>
     </div>

    </div>
  );
}
