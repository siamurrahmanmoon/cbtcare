import Header from "../header.comp.js";
import Hero from "../home/compenent/hero.js";
import Section1 from "../home/compenent/section1.js";
import Section2 from "../home/compenent/section2.js";
import Section3 from "../home/compenent/section3.js";
import Section4 from "../home/compenent/section4.js";
import Footer from "../footer.comp.js";

export default function HomeComp() {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
