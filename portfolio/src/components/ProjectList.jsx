export default function ProjectList() {
    const projects = [
        {
            name: 'Project 1',
            description: 'This is a project',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        }
    ]
    return (
        <section>
            <h2>Projects</h2>
            <ul>
            {
                projects.map((project, i) => {
                    <li key={i}>
                        <a href={project.link}>
                            <img src={project.image} alt={project.name} />
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </a>
                    </li>
                })
            }
            </ul>
        </section>
    )   
}