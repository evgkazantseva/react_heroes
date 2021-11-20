import './Hero.css';
import Specification from './Spectification.jsx';

function Hero(props) {
  return (
    <div className="hero-card" id={props.id}>
      <div className="hero-name">{props.name}</div>

      <img className="hero-img" src={props.img}></img>
      <div>
      <Specification
        name="Вселенная"
        text={props.properties.universe}
      ></Specification>
      <Specification
        name="Друзья"
        text={props.properties.friends}
      ></Specification>
      <Specification
        name="Суперспособность"
        text={props.properties.power}
      ></Specification>
      </div>
      <div className="hero-text">{props.text}</div>
    </div>
  )
}

export default Hero
