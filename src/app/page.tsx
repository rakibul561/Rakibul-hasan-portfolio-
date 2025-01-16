import Aboutpage from "./about/page";
import Banner from "./Component/Banner";

import Contact from "./contact/page";
import Projectpage from "./project/page";

import MarqueeDemo from "./skills/page";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Banner />
        <Aboutpage />

        {/* dagtfhg */}
        <MarqueeDemo />
        <Projectpage />
        <Contact />
      </div>
     
    </div>
  );
}
