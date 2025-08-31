import App from "../App.jsx"
import Data from "./data.js"

export default function Call() {
    return (
        <div>
            <div className="mainHead">
                <header>
                    Recipe Menu Card
                </header>
            </div>

            <div className="cards-container">
                {Data.map((item, index) => (
                    <App 
                        key={index}
                        title={item.title}
                        prep={item.prep}
                        cook={item.cook}
                        serves={item.serves}
                        difficulty={item.difficulty}
                        type={item.type}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    )
}
