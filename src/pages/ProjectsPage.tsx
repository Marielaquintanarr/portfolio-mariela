import '../App.css';
import snake from "../assets/game_snake_logo.jpeg";
import car from "../assets/car_game_logo.jpg";
import hangman from "../assets/hangman_logo.jpg";
import drink from "../assets/truth_or_drink_logo.png";
import Card from '../components/ProjectCard';
import Header from '../components/TitleHeader';
export default function ProjectsPage() {
    return (
        <>
            <div className="projects-container">
                <Header title="Projects" />
                <div className="projects-grid">
                    <Card image={drink} title="Truth or Drink" text="Built with Javascript" link="https://github.com/Marielaquintanarr/TruthOrDrink" />
                    <Card image={snake} title="Snake Game" text="Built with Python" link="kmckmdlcm" />
                    <Card image={car} title="Race Game" text="Built with Python" link="kmckmdlcm" />
                    <Card image={hangman} title="Hangman" text="Built with Python" link="https://github.com/Marielaquintanarr/TruthOrDrink" />
                </div>
            </div>
        </>
    )
}