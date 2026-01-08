import hero from '../shared/img/tunantada-jauja-hero.jpg'
import heroMobile from '../shared/img/tunantada-jauja-hero-mobile.jpg'
import './styles/hero.css'
export default function Hero () {

    return (

        <section className="--home-hero w-full relative overflow-hidden" id='inicio'>
            <picture>
                <source  srcSet={heroMobile} media="(max-width: 768px)" />
                <img src={hero} alt="Tunantada, danza tradicional de Jauja - Patrimonio cultural del Perú" loading='eager' decoding='async'/>
            </picture>
            <div className="hero-overlay absolute w-full h-full flex items-end">
                <div className="hero-content w-90 pv-8 flex flex-col gap-4">
                    <h1 className='title text-white' data-aos="fade-up">Tunantada: Patrimonio Cultural Vivo de Jauja</h1>

                    <p className='text-white text-md' data-aos="fade-up">
                        La danza tradicional que representa la historia, identidad y orgullo 
                        del pueblo jaujino, celebrada cada enero en el corazón del Valle del Mantaro.
                    </p>

                    <div className="hero-cta flex gap-2 flex-wrap" data-aos="fade-up">
                        <a href="#historia" className="btn-primary block ph-2 pv-4 ph-6 bg-white rounded-pill text-dark text-bold">Conoce la historia</a>
                        <a href="#programa" className="btn-secondary block ph-2 pv-4 ph-6 rounded-pill text-white text-medium">Tunantada 2026</a>
                    </div>
                </div>
            </div>
        </section>

    )

}