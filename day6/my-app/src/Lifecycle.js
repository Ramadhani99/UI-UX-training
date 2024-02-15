import { React, Component } from "react";
class Lifecycle extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    //state
    this.state = {
      data: 0,
    };
    this.setNewNumber = this.setNewNumber.bind(this);
    this.setLowNumber = this.setLowNumber.bind(this);
  }

  componentWillMount() {
    console.log("Component WILL MOUNT! parent");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!parent ");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  setLowNumber() {
    this.setState({ data: this.state.data > 0 ? this.state.data - 1 : 0 });
  }
  render() {
    return (
      <div>
        <button class="btn btn-success mx-3" onClick={this.setNewNumber}>
          INCREMENT
        </button>
        <button class="btn btn-danger" onClick={this.setLowNumber}>
          DeCREMENT
        </button>
        From current class - Lifecycle component:{" "}
        <span class="text-orange-900">{this.state.data} </span>
        {/* From Childclass Content : <Content myNumber={this.state.data}></Content> */}
      </div>
    );
  }
}
class Content extends Component {
  componentWillMount() {
    console.log("Component WILL MOUNT! child");
  }
  componentDidMount() {
    console.log("Component DID MOUNT! child");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default Lifecycle;
