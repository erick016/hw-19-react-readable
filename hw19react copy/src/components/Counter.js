import React from "react";
import CardBody from "./CardBody";









// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    total: 45,
    count: 10,
    checksum: 0
  };

  // handleIncrement increases this.state.count by 1
  handleReset = () => {
    // We always use the setState method to update a component's state
    this.setState({
      total: 45,
      count: 9,
      checksum: 0
    });
    window.location.reload();
  };






    

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Click Counter!</h3>
        </div>

        <CardBody
          count={this.state.count}
          checksum={this.state.checksum}
          total={this.state.total}
          handleReset={this.handleReset}
          /*handleDecrementSnoopy={this.handleDecrementSnoopy}
          handleDecrementMJ={this.handleDecrementMJ}
          handleDecrementMarcusAurelius={this.handleDecrementMarcusAurelius}*/
        />
      </div>
    )
  }
}

export {Counter as default}