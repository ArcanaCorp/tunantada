import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../views/Hero";
import History from "../views/History";
import Characters from "../views/Characters";
import Program from "../views/Program";
import Counter from "../views/Counter";
import Info from "../views/Info";

export default function HomePage () {

    const { pathname } = useLocation();
    
    useEffect(() => {
        AOS.init({
            duration: 800,      // velocidad de animación
            once: true,         // si solo quieres que se ejecute 1 vez
            easing: "ease-out", // ajuste fino
        });
    }, []); 
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    
        // Reinicia AOS para que reconozca nuevos elementos
        setTimeout(() => {
            AOS.refreshHard();
        }, 150); // pequeño delay para asegurar render
    }, [pathname]);

    return (

        <>
        
            <Hero/>

            <History/>

            <Characters/>

            <Counter/>

            <Program/>

            <Info/>

        </>

    )

}