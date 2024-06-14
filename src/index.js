import ReactDOM from "react-dom/client"
import MovieCard from "./MovieCard";
import './Style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <div className="movie-cards-container">
            <MovieCard
                title="End Game"
                rating="8.9"
                releaseDate="26-04-2019"
                director="Anthony Russo "
                url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT515RlSg4oF3G2vf_ecREgaWsgUu9YPfKwzg&s://https://images-cdn.ubuy.co.in/634d0a48023cd2292277f3df-avengers-endgame-marvel-studios-framed.jpg.rsc.cdn77.org/tamil/home/salaar_1.jpg"
            />
            <MovieCard
                title="Avtar"
                rating="7.9"
                releaseDate="18-12-2009"
                director="James Cameron"
                url="https://historyofinformation.com/images/Screen_Shot_2019-07-11_at_5.28.45_PM.png"
            />
            <MovieCard
                title="Men Black"
                rating="6.8"
                releaseDate="2022-04-13"
                director="Barry Sonnenfeld"
                url="https://upload.wikimedia.org/wikipedia/en/8/8a/Men_In_Black_3.jpg"
            />
        </div>
    </>
)

