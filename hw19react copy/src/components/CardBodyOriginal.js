import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const CardBody = props => (
  <div className="card-body">
    <p className="card-text">Click Count: {props.count}</p>
    <button className="btn btn-primary" onClick={props.handleReset}>
      Reset
    </button>{" "}
    {/*<button className="btn btn-danger" onClick={props.handleDecrement}>
      Decrement
</button>*/}
    
    <a onClick={props.handleDecrementSnoopy}>
  <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png" alt = "Snoopy" style={{width:'25%', height:'25%', border:'0'} }/></a>

          <a onClick={props.handleDecrementMJ}>
      <img src="https://i.pinimg.com/originals/6c/c9/18/6cc918995cf1930b628af9a0fabb8b67.jpg" alt = "MJ" style={{width:'25%', height:'25%', border:'0'}}/></a>

              <a onClick={props.handleDecrementMarcusAurelius}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Marcus_Aurelius_Louvre_MR561_n01.jpg" alt = "Marcus" style={{width:'25%', height:'25%', border:'0'}}/></a>

  
  </div>


);

export default CardBody;
