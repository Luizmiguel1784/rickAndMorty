import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card } from '../Card'
import './style.css'

export const SectionCharacter = () => {

    const [character, setCharacter] = useState([])

    useEffect(() => {

        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                setCharacter(res.data.results)
            })

    }, [])

    return (

        <section className='section-characters'>

            <h2>Nossos <span>Personagens</span></h2>

            <div className='container-cards-characters'>

                {
                    character.map((character) => (

                        <Card
                            key={character.id}
                            image={character.image}
                            name={character.name}
                            species={character.species}
                            status={character.status}
                            location={character.origin.name}
                        />

                    ))
                }

            </div>

        </section>
    )
}