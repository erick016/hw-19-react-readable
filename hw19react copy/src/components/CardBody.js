import React from "react";


// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

/*<button className="btn btn-primary" onClick={props.handleReset}>
      Reset
    </button>*/

var myGlobalObj = {checksum: 0, total: 9, count: 45};







function handleDecrement(obj,checkNum)  {
  // We always use the setState method to update a component's state
  if (obj.checksum < obj.total + 1 )
  obj.count= obj.count - 1; //should always be 1.
  obj.checksum= checkNum + obj.checksum;
  //console.log("old: "+CardBody.myObj)
  console.log(obj)
  myGlobalObj = obj;
  console.log(myGlobalObj);
  document.getElementById("scoreTracker").innerHTML = "Score: " + myGlobalObj.checksum.toString() + (  (myGlobalObj.checksum === 45) ? " You win!" : "")
};

  





function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class CardBody extends React.Component {
  
  myObj = {checksum: this.props.checksum, total: this.props.total, count: this.props.count
  };


  htmlElements = [{ onClick: () => handleDecrement(this.myObj,1),
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png",
    alt : "Snoopy",
    style : {width:'25%', height:'25%', border:'0'}
    },{onClick: () => handleDecrement(this.myObj,2),
      img: "https://media.pitchfork.com/photos/59299316c0084474cd0bea3b/1:1/w_300/16c81688.jpg",
      alt : "Michael Jackson",
      style : {width:'25%', height:'25%', border:'0'}},{onClick: () => handleDecrement(this.myObj,3),
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Marcus_Aurelius_Louvre_MR561_n01.jpg",
        alt : "Marcus Aurelius",
        style : {width:'25%', height:'25%', border:'0'}},{onClick: () => handleDecrement(this.myObj,4),
          img: "https://cdn.shopify.com/s/files/1/0558/2081/products/Mitchell_DarthVader_FINAL_sm_1024x1024.jpg?v=1493912085",
          alt : "Darth Vader",
          style : {width:'25%', height:'25%', border:'0'}},{onClick: () => handleDecrement(this.myObj,5),
            img: "http://www.startrek.com/uploads/assets/db_articles/6ee08d45f7a94d4c6fda9ee84833054a687ddf77.jpg",
            alt : "Spock",
            style : {width:'25%', height:'25%', border:'0'}},{onClick: () => handleDecrement(this.myObj,6),
              img: "http://www.ncregister.com/images/uploads/Mann-JOANOFARC.jpg",
              alt : "Joan Of Arc",
              style : {width:'25%', height:'25%', border:'0'}},{onClick: () => handleDecrement(this.myObj,7),
                img: "https://vignette.wikia.nocookie.net/egamia/images/b/bc/Lara_Croft_TRA.jpg/revision/latest/scale-to-width-down/220?cb=20090811074418",
                alt : "Lara Croft",
                style : {width:'25%', height:'25%', border:'0'}},{onClick: () => handleDecrement(this.myObj,8),
                  img: "https://vignette.wikia.nocookie.net/clonewarsadventurescharacter/images/a/a1/Master_Chief_Halo_3.jpg/revision/latest?cb=20130603170558",
                  alt : "Master Chief",
                  style : {width:'25%', height:'25%', border:'0'}},{onClick: () => handleDecrement(this.myObj,9),
                    img: "https://vignette.wikia.nocookie.net/lotr/images/7/70/Gandalf%3B_The_White.jpg/revision/latest/scale-to-width-down/250?cb=20140110102343",
                    alt : "Gandalf",
                    style : {width:'25%', height:'25%', border:'0'}}];
    
  render() {
    const shuffledPosts = shuffleArray(this.htmlElements);
    console.log(this.myObj);
    return (
      <div>
      <button className="btn btn-primary" onClick={this.props.handleReset}>
      Reset
    </button>
      <p className="card-text" id="scoreTracker">Score: {myGlobalObj.checksum}</p>
      <ul>
        {shuffledPosts.map((post, idx) => {
          return (
            
            <div key={idx}>
                  <a onClick = {post.onClick}> <img src = {post.img.toString()} alt = {post.alt.toString()} style = {post.style} id = {idx}></img></a>
            </div>
          );
        })}
      </ul>
      </div>
    );

  }
}



export default CardBody;
