import './Projects.css';

const projects = [
    {
        id: 1,
        title: "Banking-System",
        description: "A banking system application.",
        tags: ["C#", "ASP.NET"],
        link: "https://github.com/HassanAhmadAli/Banking-System"
    },
    {
        id: 2,
        title: "E-Store-Nest",
        description: "E-commerce backend built with NestJS.",
        tags: ["NestJS", "TypeScript"],
        link: "https://github.com/HassanAhmadAli/E-Store-Nest"
    },
    {
        id: 3,
        title: "Yasmin-React",
        description: "Frontend application built with React.",
        tags: ["React", "TypeScript"],
        link: "https://github.com/HassanAhmadAli/Yasmin-React"
    },
    {
        id: 4,
        title: "medicine_warehouse",
        description: "Warehouse management system.",
        tags: ["TypeScript"],
        link: "https://github.com/HassanAhmadAli/medicine_warehouse"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Work</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link">View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
