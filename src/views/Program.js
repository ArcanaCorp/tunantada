import programbg from '../shared/img/programa-tunantada-2026.png'
import './styles/program.css'
export default function Program () {

    const programs = [
        {
            day: '19',
            subtext: 'Vispera de la fiesta Tunantera',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/85daf2164131151.63f1d29de92b2.jpg'
        },
        {
            day: '20',
            subtext: 'Primer día de la fiesta Tunantera',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5eb075164131151.63f1d298de6ba.jpg'
        },
        {
            day: '21',
            subtext: 'Segundo día de la fiesta Tunantera',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/eed0be164131151.63f1d298df7db.jpg'
        },
        {
            day: '22',
            subtext: 'Tercer día de la fiesta Tunantera',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/adfdaa164131151.63f1d2999b7f3.jpg'
        },
        {
            day: '23',
            subtext: 'Cuarto día de la fiesta Tunantera y muestra de la Tunantada',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/46aa8b164131151.63f1d29b18be0.jpg'
        },
        {
            day: '24',
            subtext: 'Quinto día de la fiesta Tunantera, segunda muestra de la Tunantada y presentación de la Orquesta más grande del Mundo.',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/e93388164131151.63f1d298555e8.jpg'
        },
        {
            day: '25',
            subtext: 'Sexto día de la fiesta Tunantera y Concurso de la Tunantada',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/eab214164131151.63f1d29c9c591.jpg'
        }
    ];

    return (
        <section className="--home-program w-full overflow-hidden" id='programa'>
            <ul className="--program-list flex flex-col">
                <li className="--program-item w-full relative overflow-hidden">
                    <picture>
                        <img src={programbg} alt={`Programa de actividades del fiesta Tunantera del 2026 - Yauyos - Jauja`} />
                    </picture>
                </li>
                {programs.map((p, index) => (
                    <li key={index} className="--program-item w-full relative overflow-hidden">
                        <picture>
                            <img src={p.image} alt={`${p.day} de Enero - ${p.subtext}`} />
                        </picture>
                        <div className="--program-item-overlay w-full absolute flex flex-col items-end p-8">
                            <h3 className='text-white'>{p.day} de Enero</h3>
                            <p className='text-white text-right'>{p.subtext}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}