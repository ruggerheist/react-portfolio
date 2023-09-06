import musicale from "../assets/musicale.png";
import recipedia from "../assets/recipedia.png";
import weatherDashboard from "../assets/weather-dashboard.png";
import noteTaker from "../assets/note-taker.png";
import passwordGenerator from "../assets/password-generator.png";
import codingQuiz from "../assets/coding-quiz.png";
import fitguide from "../assets/fitguide.png";

export default function ProjectList() {
  const projects = [
    {
      name: "FitGuide",
      description:
        "A fitness app that uses Open AI to provide macros, custom meal plans, and workout routines, based on user input.",
      image: fitguide,
      githublink: "https://github.com/jjsdunc88/health-wellness-planner",
      deployedlink: "https://health-wellness-intro-planner-15375fd8b435.herokuapp.com/",
    },
    {
      name: "Musicale",
      description:
        "An app that allows users to search Ticketmaster for concerts and add them to their own calendar.",
      image: musicale,
      githublink: "https://github.com/ruggerheist/musicale",
      deployedlink: "https://musicale-app-f8a5312a774d.herokuapp.com/",
    },
    {
      name: "Recipedia",
      description:
        "Recipedia allows users to search for a main ingredient and get a return of different receipes. A nutritional breakdown of each ingredient is then provided.",
      image: recipedia,
      githublink: "https://github.com/ruggerheist/recipedia",
      deployedlink: "https://ruggerheist.github.io/recipedia/",
    },
    {
      name: "Weather Dashboard",
      description:
        "A simple to use application that provides daily and 5 day weather forecasts for any city in the world.",
      image: weatherDashboard,
      githublink: "https://github.com/ruggerheist/weather-dashboard",
      deployedlink: "https://ruggerheist.github.io/weather-dashboard/",
    },
    {
      name: "Express Note Taker",
      description:
        "A browser based note taking application that utilizes Express.js to save and retrieve note data from a JSON file.",
      image: noteTaker,
      githublink: "https://github.com/ruggerheist/express.js-note-taker",
      deployedlink: "https://express-js-note-take.herokuapp.com/",
    },
    {
        name: "Password Generator",
        description: "Generates a random password based on user selected criteria.",
        image: passwordGenerator,
        githublink: "https://github.com/ruggerheist/password-generator",
        deployedlink: "https://ruggerheist.github.io/password-generator/",
    },
    {
        name: "Coding Quiz",
        description: "A timed quiz that tests a user's knowledge of Git, HTML, CSS, and JavaScript.",
        image: codingQuiz,
        githublink: "https://github.com/ruggerheist/coding-quiz",
        deployedlink: "https://ruggerheist.github.io/coding-quiz/",
    },

  ];
  return (
    <div className="row row-cols-sm-1 row-cols-md-3 h-100 project-list">
      {projects.map((project, i) => {
        return (
          <div key={i} className="project-card">
            <div className="card">
              <img
                src={project.image}
                class="card-img-top"
                alt={project.name}
              />
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <p class="card-text">{project.description}</p>
                <a href={project.githublink}>GitHub Link </a>
                <a href={project.deployedlink}>Deployed Link </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}