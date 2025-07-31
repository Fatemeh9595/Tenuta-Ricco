import { Container } from "react-bootstrap"
import MyCarousel from "../myCarousel/MyCarousel"
import MyNavbar from "../myNavbar/MyNavbar"
import "./Home.css"
import About from "../about/About"
import Counts from "../counts/Counts"
import Clietns from "../clients/Clients"
import WhyUs from "../whyUs/WhyUs"
import Team from "../team/Team"
import Portfolio from "../portfolio/Portfolio"
import Review from "../review/Review"
import Pricing from "../pricing/Pricing"
import Faq from "../faq/Faq"
import Contact from "../contact/Contact"
import Footer from "../footer/Footer"
import React, { useRef } from "react";
import Services from "../services/Services"




function Home(){

    const portfolioRef = useRef(null); 

    return(
       <>
          <Container fluid style={{padding:"0"}}>
            <header style={{width:"100%"}}>
              <MyNavbar/>
            </header>
             <section>
               <MyCarousel portfolioRef={portfolioRef}/>
               <About/>
               <Counts/>
               <Clietns/>
               <Services/>
               <WhyUs/>
               <Portfolio ref={portfolioRef}/>
               <Review/>
               <Pricing/>
               <Faq/>
               <Contact/>
               <Team/> 
             </section>
             <footer>
               <Footer/>
             </footer>
          </Container>
       </>
    )
}



export default Home