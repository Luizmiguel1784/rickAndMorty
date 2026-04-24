import Rick from '../../assets/images/Rick.svg'
import LogoRick from '../../assets/images/Logo.svg'
import './style.css'
export const Main =() =>{

    return(
        <main>

            <div>
            <img src={Rick} alt="Image do rick" />
            </div>
            
            
            <div className="main-content">

            <img src={LogoRick} alt="Logo rick and morty" />
            <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
            <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>

            <div className="container-btn-main">
                <a href="" className="btn-primary">Veja agora</a>
                <a href=""className="btn-secondary">Saiba Mais</a>
            </div>

            </div>


        </main>

    )


}