import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card } from '../Card'

export const SectionCharacter = ()=>{

    const [character, setCharacter] = useState ([])

    useEffect(()=>{

        axios.get("https://rickandmortyapi.com/api/character")
        .then(res=>{
            setCharacter(res.data.results);
        })
    },[])

    return(

        <section className='section-character'>

            <h2>Nossos <span>Personagens</span></h2>
        
        <div className='container-cards-characters'>

        {
            character.map((character)=>{

                <Card
                image={character.image}
                name={character.name}
                specie={character.specie}
                status={character.status}
                location={character.origin.name}/>

            })
        }

        </div>
        
        </section>
    )
}