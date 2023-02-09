import './Hero.css';
import heroImage from '../../Assets/SeatedPortrait.png';

const Hero = () => {
    return (
        <div className="hero section__padding" id="home">
            <div className="hero__content">
                <h1 className="hero__content-title">Ryan<br></br>Bruton</h1>
                <h2 className="hero__content-subtitle">Developer</h2>
                <div>
                    <p>That does handstands*</p>
                    <p>Plays a lot of guitar**</p>
                    <p>Seeking self improvement***</p>
                    <p>Can be found riding around on an eboard****</p>
                    <p>Generally has too many interests*****</p>
                </div>
            </div>
            <div className="hero__image-container">
                <img className="hero__image" src={heroImage} />
            </div>
        </div>
    );
}

export default Hero;