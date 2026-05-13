import GithubLogo from '../../assets/images/GithubLogo.svg'
import './style.css'
export const Header = () => {

    return (

        <header>
            <div className="header-wrapper">
                <a href="">
                    <span>LuizMiguel</span>
                    <img src={GithubLogo} alt="Logo GitHub" />
                </a>
            </div>
        </header>

    )
}