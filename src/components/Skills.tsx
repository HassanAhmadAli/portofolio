import './Skills.css';

const skills = [
    { name: "TypeScript", level: "Advanced" },
    { name: "NestJS", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "C#", level: "Intermediate" },
    { name: "ASP.NET", level: "Intermediate" }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill-card">
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="skill-level">{skill.level}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
