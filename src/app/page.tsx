import Image from "next/image";
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
import Headers from "@/components/Header";
import About from "@/components/about";
import Area from "@/components/Area";
import Rates from "@/components/rates";
import Notice from "@/components/Notice";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Contact_1 from "@/components/contact";

export default function Home() {
  return (
<div>
     <Headers/>
   <About />
   <Area  />
   <Rates/>
   <Notice/>
   <Quote/>
   <FAQ />
   <Contact_1/>
   <div className="border-t border-[#353535] w-full" />

   <Footer />
</div>
  );
}
