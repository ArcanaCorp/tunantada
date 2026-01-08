import bg from '../shared/img/mas-informacion-tunantera-2026.jpg'
import './styles/info.css'
export default function Info () {

    return (

        <section className="--home-info w-full h-dvh relative overflow-hidden" id='identidad'>
            <picture>
                <source  srcSet={bg} media="(max-width: 768px)" />
                <img src={bg} alt="Tunantada, danza tradicional de Jauja - Patrimonio cultural del Perú" loading='eager' decoding='async'/>
            </picture>
            <div className="info-overlay absolute w-full h-full flex items-end">
                <div className="info-content w-90 pv-8 flex flex-col gap-4">
                    <h2 className='title text-white' data-aos="fade-up">Tunantada, identidad que se vive</h2>
                    <p className='text-white text-md' data-aos="fade-up">
                        La Tunantada es una expresión viva de la identidad cultural de Jauja y del Valle del Mantaro.
                        Esta plataforma digital tiene como objetivo difundir, preservar y poner en valor esta manifestación cultural, fortaleciendo su reconocimiento a nivel local, nacional e internacional.
                    </p>
                </div>
            </div>
        </section>

    )

}