import '../App.css';
import snake from "../assets/game_snake.jpeg";
import car from "../assets/car.jpg";
import hangman from "../assets/hangman.jpg";
import drink from "../assets/drink2.png";
import Card from '../components/card';
import Header from '../components/header';
export default function Projects() {
    return (
        <>
            <div style={{  marginLeft: "10%", marginRight: "10%", marginBottom: "10%" }}>
                <Header title="Projects" />
                <div
                    style={{
                    width: "100%",
                    marginTop: "3%",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", 
                    justifyContent: "center",
                    gap: "40px"
                    }}
                >
                    <Card image={drink} title="Truth or Drink" text="Built with Javascript" link="https://github.com/Marielaquintanarr/TruthOrDrink" />
                    <Card image={snake} title="Snake Game" text="Built with Python" link="kmckmdlcm" />
                    <Card image={car} title="Race Game" text="Built with Python" link="kmckmdlcm" />
                    <Card image={hangman} title="Hangman" text="Built with Python" link="https://github.com/Marielaquintanarr/TruthOrDrink" />

                </div>
            </div>
        </>
    )
}