import { useCallback, useEffect, useMemo, useState } from 'react'
import counterBg from '../shared/img/contador-regresivo-tunantero-2026.jpg'
import counterMobileBg from '../shared/img/contador-regresivo-tunantero-2026-mobile.jpg'
import './styles/counter.css'
export default function Counter () {

    const targetDate = useMemo(() => new Date('2026-01-19T00:00:00'), [])

    const agendarLink = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Tunantada+2026&dates=20260119/20260125&details=Festividad+tradicional+de+la+Tunantada+en+Jauja,+Perú&location=Jauja,+Junín,+Perú'

    const getTimeLeft = useCallback(() => {
        const now = new Date()
        const diff = targetDate - now

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        }
    }, [targetDate])

    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [getTimeLeft])

    return (

        <section className="--home-counter w-full relative overflow-hidden" id='faltan'>
            <picture>
                <source  srcSet={counterMobileBg} media="(max-width: 768px)" />
                <img src={counterBg} alt="Tunantada, danza tradicional de Jauja - Patrimonio cultural del Perú" loading='eager' decoding='async'/>
            </picture>
            <div className="counter-overlay absolute w-full h-full flex items-end">
                <div className="counter-content w-90 pv-8 flex flex-col gap-4">
                    <h2 className='title text-white' data-aos="fade-up">La Tunantada comienza en</h2>
                    <div className="counter-grid flex gap-4 text-white" data-aos="fade-up">
                        <div className='flex flex-col gap-2'>
                            <span className='text-bold'>{timeLeft.days}</span>
                            <small>Días</small>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-bold'>{timeLeft.hours}</span>
                            <small>Horas</small>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-bold'>{timeLeft.minutes}</span>
                            <small>Min</small>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-bold'>{timeLeft.seconds}</span>
                            <small>Seg</small>
                        </div>
                    </div>
                    <p className="text-white text-md" data-aos="fade-up">Del <strong>19 al 25 de enero</strong> – Jauja, Perú</p>
                    <div className="hero-cta flex gap-2 flex-wrap" data-aos="fade-up">
                        <a href={agendarLink} target="_blank" rel="noopener noreferrer" className="btn-primary block ph-6 pv-4 bg-white rounded-pill text-dark text-bold">Agregar al calendario</a>
                        <a href="#programa" className="btn-secondary block ph-6 pv-4 rounded-pill text-white text-medium">Ver programa</a>
                    </div>
                </div>
            </div>
        </section>

    )

}