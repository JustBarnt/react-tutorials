import { animals } from './animals';
import './App.css';

function App() {
    const title = '';
    const background = <img className="background" src="./images/ocean.jpg" alt="ocean"/>;

    const images = [];

    for(const animal in animals)
    {
        console.log(animal);
        images.push(<img onClick={displayFact} src={animals[animal].image} alt={animal} key={animal} className="animal" aria-label={animal} role="button" />)
    }

    const animalFacts = (
        
        <div>
            <h1>{title === '' ? 'Click an animal for a fun fact':title}</h1>
            {background}
            <div className="animals">{images}</div>
            <p id="fact"></p>
        </div>
        
    );

    function displayFact(e)
    {
        let animal = animals[e.target.alt];
        let randInd = Math.floor(Math.random() * animal.facts.length);
        let fact = animal.facts[randInd];
        document.getElementById('fact').innerHTML = fact;
    }

  return animalFacts;
}

export default App;
