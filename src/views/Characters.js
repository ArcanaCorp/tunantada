import chuto from '../shared/img/chuto.jpg'
import arriero from '../shared/img/arriero.jpg'
import principe from '../shared/img/principe.jpg'
import huatrila from '../shared/img/huatrila.jpg'
import jaujina from '../shared/img/jaujina.jpg'
import './styles/characters.css'
export default function Characters () {

    const personajes = [
        {
            id: 1,
            name: 'Chuto',
            text: '',
            image: chuto
        },
        {
            id: 2,
            name: 'Jaujina',
            text: '',
            image: jaujina
        },
        {
            id: 3,
            name: 'Príncipe',
            text: '',
            image: principe
        },
        {
            id: 4,
            name: 'Huatrila',
            text: '',
            image: huatrila
        },
        {
            id: 5,
            name: 'Arriero',
            text: '',
            image: arriero
        }
    ];

    return (

        <section className="--home-characters w-full relative overflow-hidden" id='personajes'>
            <ul className='--characters-list'>
                {personajes.map((p) => (
                    <li key={p.id} className='--character relative'>
                        <picture>
                            <img src={p.image} alt={`Personaje de ${p.name} - ${p.text}`} />
                        </picture>
                        <div className='--character-overlay absolute'>
                            <h2>{p.name}</h2>
                            <p>{p.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <a href='/' className='absolute'>Ver más</a>
        </section>

    )

}