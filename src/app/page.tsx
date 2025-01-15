import Aboutpage from "./about/page";
import Contact from "./contact/page";
import Projectpage from "./project/page";

import MarqueeDemo from "./skills/page";


;

export default function Home() {
  return (
    <div className="">
     <Aboutpage/>
     <div>
      
     {/* dagtfhg */}
     <MarqueeDemo/>
     <Projectpage/>
     <Contact/>
     </div>

    </div>
  );
}
