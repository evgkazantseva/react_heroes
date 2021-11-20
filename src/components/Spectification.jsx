import './Specification.css';

function Spectification(props) {
  return (
    <div className="specification-text">
      <span className="specification-name">{props.name}: </span>
      {props.text}
    </div>
  )
}

export default Spectification
