import bgHistoria from '../shared/img/tunantada-historia.webp'
import './styles/history.css'
export default function History () {

    return (

        <section className="--home-history w-full relative overflow-hidden" id='historia'>
            <picture>
                <source srcSet={bgHistoria} media='(max-width: 768px)' />
                <img src={bgHistoria} alt='La Tunantada es una danza tradicional originaria de la provincia de Jauja, en la región Junín, Perú. Se celebra cada año durante el mes de enero y representa, a través de personajes simbólicos, la historia social, cultural y colonial del Valle del Mantaro.'/>
            </picture>
            <div className="history-overlay absolute w-full h-full flex items-end">
                <div className="history-content w-90 pv-8 flex flex-col gap-4">
                    <h2 className='title text-white' data-aos="fade-up">¿Qué es la Tunantada?</h2>

                    <p className='text-white text-md' data-aos="fade-up">
                        La Tunantada es una danza tradicional originaria de la provincia de Jauja, en la región Junín, Perú. Se celebra cada año durante el mes de enero y representa, a través de personajes simbólicos, la historia social, cultural y colonial del Valle del Mantaro.
                    </p>
                    <p className='text-white text-md' data-aos="fade-up">
                        Esta manifestación cultural es una de las expresiones más importantes de la identidad jaujina y congrega a miles de danzantes, músicos y visitantes nacionales e internacionales.
                    </p>
                </div>
            </div>
        </section>

    )

}