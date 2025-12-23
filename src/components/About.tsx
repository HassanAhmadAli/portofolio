import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a developer from Syria, currently based in Moscow. I study at Damascus University FITE.
                            I am passionate about building web applications using modern technologies like React, NestJS, and ASP.NET.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source,
                            or working on personal projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
