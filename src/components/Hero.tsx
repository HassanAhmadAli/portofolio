import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Hassan</span>.<br />
                    I build <span className="highlight">digital experiences</span>.
                </h1>
                <p className="hero-subtitle">
                    Student at Damascus University FITE | Based in Damascaus.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
