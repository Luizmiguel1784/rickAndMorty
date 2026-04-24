import axios from 'axios'
import logoAlien from '../../assets/logoAlien.svg'
import logoHeart from '../../assets/logoHeart.svg'
import logoPlanet from '../../assets/logoPlanet.svg'

export const Card =({image,name,specie,status,location}) => {

    return(

        <div className='card-characters'>

            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className='description-characters'>

                <ul>

                    <li>
                        <img src={logoAlien} alt='' />
                        {specie}
                    </li>

                    <li>
                        <img src={logoHeart} alt="" />
                        {status}
                    </li>
                    <li>
                        <img src={logoPlanet} alt="" />
                        {location}
                    </li>

                </ul>
            </div>
        
        </div>
        
    )
}