import react, {Component} from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = {
      dei1: "one",
      dei2: "one",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const newDies1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDies2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({dei1: newDies1, dei2: newDies2, rolling: true});

    setTimeout(() => {
      this.setState({rolling: false});
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <Die face={this.state.dei1} rolling={this.state.rolling } />
        <Die face={this.state.dei2} rolling={this.state.rolling } />
        <div>
          <button onClick={this.roll}  disabled={this.state.rolling } >
            {this.state.rolling ? "Rolling ....." : "Roll Dice"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
