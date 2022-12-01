import { Routes, Route, useNavigate } from "react-router-dom";
import Video from "./video"


export default function App(){

    const navigate = useNavigate();

    const navigateToContacts = () => {
    navigate('/superapp');
    };

    const navigateHome = () => {
    navigate('/');
    };

    return (
        <div className="bg"
          >
        <div id = 'container'>
            <button className = 'button-30' onClick={navigateHome}>Home</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button className = 'button-30' onClick={navigateToContacts}>Superapp</button>
        
        <Routes>
            <Route path="/superapp" element={<Superapp />} />
            <Route path="/" element={<Home />} />
        </Routes>
        </div>
        </div>
    );

    function Home() {
    return (
        <div className="home">
            <h1>Hello</h1>
            <p>
                Jest to głowna strona projektu na kurs przetwarzanie obrazów i widzenie komputerowe. 
                <br />
                Projekt ten powstał dzięki ciężkiej pracy Michała Skibińskiego i Macieja Rutkowskiego 
            </p>
        </div>
    );
    }

    function Superapp() {
    return (
      <Video />
      );
    }
};