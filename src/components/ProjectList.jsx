import musicale from '../assets/musicale.png';
import recipedia from '../assets/recipedia.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import noteTaker from '../assets/note-taker.png';


export default function ProjectList() {
    const projects = [
        {
            name: 'Musicale',
            description: 'An app that allows users to search Ticketmaster for concerts and add them to their own calendar.',
            image: musicale,
            githublink: 'https://github.com/ruggerheist/musicale',
            deployedlink: 'https://www.google.com'
        },
        {
            name: 'Recipedia',
            description: 'Recipedia allows users to search for a main ingredient and get a return of different receipes. A nutritional breakdown of each ingredient is then provided.',
            image: recipedia,
            githublink: 'https://github.com/ruggerheist/recipedia',
            deployedlink: 'https://ruggerheist.github.io/recipedia/'
        },
        {
            name: 'Weather Dashboard',
            description: 'A simple to use application that provides daily and 5 day weather forecasts for any city in the world.',
            image: weatherDashboard,
            githublink: 'https://github.com/ruggerheist/weather-dashboard',
            deployedlink: 'https://ruggerheist.github.io/weather-dashboard/'
        },
        {
            name: 'Express Note Taker',
            description: 'A browser based note taking application that utilizes Express.js to save and retrieve note data from a JSON file.',
            image: noteTaker,
            githublink: 'https://github.com/ruggerheist/express.js-note-taker',
            deployedlink: 'https://www.google.com'
        },
    ]
    return (
            <div className="container row">
            {
                projects.map((project, i) => {
                    return (
                    <div className="card col project-wrapper" key={i} style={{padding: "40px", margin: "20px", border: "4px solid #E2BF36", background: "#E9DCC9", font: "sans-serif"}} >
                        <h3>{project.name}</h3>
                            <img src={project.image} alt={project.name} />                            
                            <a href={project.githublink}>GitHub Link </a>
                            <a href={project.deployedlink}>Deployed Link </a>
                            <p>{project.description}</p>                     
                    </div>
                    )
                })
            }
            </div>
    )  
}