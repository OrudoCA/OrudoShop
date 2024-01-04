import '../styles/FrontPage.scss'

export default function FrontPage(){
    const Logo = () => {
        return (
            <img src="../assets/Logo.png" alt="Logo" className='front-page__logo'/>
        )
    }


    return(
        <div className="front-page">
            <Logo />
        </div>
    )
}