export default function ProjectList() {
    const projects = [
        {
            name: 'Project 1',
            description: 'This is a project',
            image: 'https://via.placeholder.com/150',
            githublink: 'https://www.google.com',
            deployedlink: 'https://www.google.com'
        },
        {
            name: 'Project 2',
            description: 'This is a project',
            image: 'https://via.placeholder.com/150',
            githublink: 'https://www.google.com',
            deployedlink: 'https://www.google.com'
        }
    ]
    return (
            <ul>
            {
                projects.map((project, i) => {
                    return (
                    <li key={i}>
                        <h3>{project.name}</h3>
                            <img src={project.image} alt={project.name} />                            
                            <a href={project.githublink}>GitHub Link </a>
                            <a href={project.deployedlink}>Deployed Link </a>
                            <p>{project.description}</p>                     
                    </li>
                    )
                })
            }
            </ul>
    )  
}