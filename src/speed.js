function checkSpeed() {
    let speed = document.getElementById("speeds").value;
    const speedLimit = 70;
    const kmPerPoint = 5;
  // if to check if the speedlimit is ok and console Ok
    if (speed < speedLimit + kmPerPoint) {
      //console.log("Ok");
      document.getElementById("out").innerText = `Ok.`
      return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    // it checks if the point is 12 or more 
    if(points >= 12) {
    document.getElementById("out").innerText = `License suspended.`
    //document.getElementById("display").innerText = `Points: ${points}`
  }
    else {
      // console.log("Points:", points);
       document.getElementById("out").innerText = `Points: ${points}`
  }
  }