import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Carousel from "./components/Carousel";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  let items = [
    "Rhythm Resonance",
    "Super Rosalina Sis",
    "Meteor Mayhem",
    "Space Invaders",
    "VolunteerHub",
    "Sumplete",
    "Full Joint Distribution",
    "Logic Grid Puzzle",
  ];

  let imageSrcs = [
    [
      "/images/rhythm_resonance/0.png",
      "/images/rhythm_resonance/1.png",
      "/images/rhythm_resonance/2.png",
      "/images/rhythm_resonance/3.png",
      "/images/rhythm_resonance/4.png",
    ],
    [
      "/images/super_rosalina_sis/0.png",
      "/images/super_rosalina_sis/1.png",
      "/images/super_rosalina_sis/2.png",
      "/images/super_rosalina_sis/3.png",
      "/images/super_rosalina_sis/4.png",
    ],
    ["/images/meteor_mayhem.png"],
    [
      "/images/space_invaders/0.png",
      "/images/space_invaders/1.png",
      "/images/space_invaders/2.png",
      "/images/space_invaders/3.png",
    ],
    [
      "/images/volunteerhub/0.png",
      "/images/volunteerhub/1.png",
      "/images/volunteerhub/2.png",
      "/images/volunteerhub/3.png",
      "/images/volunteerhub/4.png",
    ],
    [
      "/images/sumplete/0.png",
      "/images/sumplete/1.png",
      "/images/sumplete/2.png",
    ],
    [
      "/images/full_joint_distribution/0.png",
      "/images/full_joint_distribution/1.png",
    ],
    [
      "/images/logic_grid_puzzle/0.png",
      "/images/logic_grid_puzzle/1.png",
    ],
  ];

  let projects = [
    {
      name: "Rhythm Resonance",
      imageSrc: "/images/rhythm_resonance/0.png",
      description:
        "Rhythm Resonance is a pixel rhythm PC game that features four instrumental beatmaps: a triangle, guitar, piano, and violin.\
        The player can flip between 2D and 3D perspectives, hit normal or long notes to form combos, and view their resulting scores.\
        Built using the Unity game engine and C#, this project analyzes a MIDI (Musical Instrument Digital Interface) file to generate notes at the correct time.\
        ",
      url: "https://github.com/Lillianh3195/Rhythm_Resonance",
      link: "https://lillianh3195.github.io/Rhythm_Resonance_Site/",
    },
    {
      name: "Super Rosalina Sis",
      imageSrc: "/images/super_rosalina_sis/0.png",
      description:
        "Super Rosalina Sis bears a striking resemblance to Super Mario Bros, but with key differences-- unique character sprites and novel attack powers.\
        Built with the Pygame python library and the Tiled map editor, the game features enemies such as Koopa Troopas and Goombas.\
        Racing against time, the player must reach the flag pole in order to clear the stage. \
        ",
      url: "https://github.com/Lillianh3195/Super_Rosalina_Sis",
    },
    {
      name: "Meteor Mayhem",
      imageSrc: "/images/meteor_mayhem",
      description:
        "Meteor Mayhem is a trivia quiz web application. Questions appear on asteroids and must be answered correctly\
        within a timely manner. Failure to do so causes the player's ship to explode.\
        Built using JavaScript, HTML, and CSS, this project uses a datastore to store the user's input, \
        a formhandler to add event listeners to mouse clicks, a quizmanager to add and recieve information from the datastore,\
        and an html canvas to create the game attributes.\
        ",
      url: "https://github.com/Lillianh3195/CSPC-349-Quiz-App",
    },
    {
      name: "Space Invaders",
      imageSrc: "/images/space_invaders/0.png",
      description:
        "A blast from the past with the 1978 classic, Space Invaders is an action-packed shooting game where the player\
        faces endless waves of aliens. Coded in python within Pygame, this project uses a Timer class to animate both sprites and explosions,\
        a Barrier class made up of BarrierPieces to represent a barrier slowly getting chipped away, and rect attributes to detect sprite collisions.\
        ",
      url: "https://github.com/Lillianh3195/Space_Invaders",
    },
    {
      name: "VolunteerHub",
      imageSrc: "/images/volunteerhub/0.png",
      description:
        "VolunteerHub is a volunteer site where users can post a volunteer activity and apply for volunteering.\
        Built with Svelte and SvelteKit, this website lets users write a brief description of the activity,\
        post the time and date, as well as set the location of the event \
        through the use of Google Maps API\
        ",
      url: "https://github.com/Lillianh3195/Group-Project-CPSC-362/tree/main",
    },
    {
      name: "Sumplete",
      imageSrc: "/images/sumplete/0.png",
      description:
        "The Sudoku-inspired clone, Sumplete, involves removing numbers from the grid so that each\
      row and column adds up to the target numbers outside the grid. In our representation, the variables are the number of rows and \
      columns, whereas the domain is the combinations of possible answers for each row and column.\
      Coded in python, this project applies constraint propagation and backtracking search.\
      ",
      url: "https://colab.research.google.com/drive/1YkXcnEeEVibqacs2BU1usQwDU_ncVsmJ",
    },
    {
      name: "Full Joint Distribution",
      imageSrc: "/images/full_joint_distribution/0.png",
      description:
        "This project implements a full joint distribution, a Bayesian network containing boolean-variable nodes, and likelihood-weighting\
      to answer queries.\
      ",
      url: "https://colab.research.google.com/drive/1aVHcoeCuZCxOpYJ9VH5l8DmxtFWOQgYA#scrollTo=6DcsxgVyTKGD",
    },
    {
      name: "Logic Grid Puzzle",
      imageSrc: "/images/logic_grid_puzzle/0.png",
      description:
        "By constructing a knowledge base consisting of propositions for the rules of the puzzle and the given clues,\
      we told the knowledge base all possible moves and gave constraints that no option in any category will ever be used more than once.\
      As a result, we ensured that the solution is entailed by our knowledge base.\
      ",
      url: "https://colab.research.google.com/drive/1hBZdaUy3AqTkBRE1h55p7G-ozQ5h-8Oq#scrollTo=lZn8c-5XWj22",
    },
  ];

  const handleSelectItem = (item, index) => {
    console.log(item, index);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/projects">
            <Navbar />
            <div className="sidebar">
              <Sidebar
                items={items}
                heading="My Projects"
                onSelectItem={handleSelectItem}
              />
            </div>
            <div className="projects-container">
              {projects.map((project, index) => (
                <Projects
                  key={index}
                  projects={[project]}
                  slides={imageSrcs[index]}
                />
              ))}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
