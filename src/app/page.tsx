import {Services} from "./components/Services"
import {About} from "./components/About"
import Image from "next/image";
import {Header} from "./components/Header"
import {Hero} from "./components/Hero"
import  Testimonials  from "./components/Testimonials";

export default function Home() {
 return (
    <>
      <Header />
      <main>
        <Hero />
        {/* You can add other sections of your page here */}
      <About/>
      <Services/>
      <Testimonials/>

      </main>
      
    </>
  );
}
