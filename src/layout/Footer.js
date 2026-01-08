import './styles/footer.css'
export default function Footer () {

    const year = new Date().getFullYear();

    return (

        <footer className='w-full pv-6 bg-dark'>
            <div className='w-90 m-auto flex gap-4 flex-col'>
                <ul className='flex flex-wrap gap-4 justify-center'>
                    <li><a href='#inicio' className='text-white'>Inicio</a></li>
                    <li><a href='#historia' className='text-white'>Historia</a></li>
                    <li><a href='#faltan' className='text-white'>¿Cuánto falta?</a></li>
                    <li><a href='#personajes' className='text-white'>Personajes</a></li>
                    <li><a href='#programa' className='text-white'>Programa {year}</a></li>
                    <li><a href='#identidad' className='text-white'>Identidad</a></li>
                </ul>
                <p className='text-center text-white text-sm'>© {year} Tunantada.info – Todos los derechos reservados</p>
            </div>
        </footer>

    )

}