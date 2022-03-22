import {getSpeed} from "./controlSpeed.js"

function planeLanding() 
{
  // access properties using this keyword
  if ( this.checked ) 
  {
      let speed_ = getSpeed()
      document.getElementById("speedDown").disabled = true;
      document.getElementById("speedUp").disabled = true;
      //console.log(parseInt(getSpeed()*10))
      setTimeout(()=>{speed_ -=0.05;document.getElementById("displaySpeed").innerHTML = "Speed: "+ parseInt(speed_*1200) + "km/h";
      document.getElementById("plane").style.height = "15px"},1000)
      setTimeout(()=>{speed_ -=0.05;document.getElementById("displaySpeed").innerHTML = "Speed: "+ parseInt(speed_*1200) + "km/h";
      document.getElementById("plane").style.height = "10px"},3000)
      setTimeout(()=>{speed_ -=0.05;document.getElementById("displaySpeed").innerHTML = "Speed: "+ parseInt(speed_*1200) + "km/h";
      document.getElementById("plane").style.height = "10px"},5000)

      setTimeout(()=>{speed_ = 0;document.getElementById("displaySpeed").innerHTML = "Speed: "+ speed_ + "km/h";
      document.getElementById("plane").style.height = "5px";
      landing = true},8000) //getSpeed()=0

      

      }
}

export {planeLanding}