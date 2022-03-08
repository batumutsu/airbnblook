import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
//import player from "./images/player.png"
import data from './data';

function App() {
  const cards = data.map(x =>
                          <Card 
                          key = {x.id}
                          {...x}
                          //x = {x} similar to above
                          />
                        )
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
  );
}

export default App;
