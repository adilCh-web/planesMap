import {clearTime,clearDistance} from "./time_Km_perFlight.js"

function planeLanding() 
{
  // access properties using this keyword
  if ( this.checked ) 
  {

      document.getElementById("speedDown").disabled = true;
      document.getElementById("speedUp").disabled = true;
      //console.log(parseInt(getSpeed()*10))
      setTimeout(()=>{speed -=0.05;document.getElementById("displaySpeed").innerHTML = "Speed: "+ parseInt(speed*1200) + "km/h";
      },1000)
      setTimeout(()=>{speed -=0.05;document.getElementById("displaySpeed").innerHTML = "Speed: "+ parseInt(speed*1200) + "km/h";
      },3000)
      setTimeout(()=>{speed -=0.05;document.getElementById("displaySpeed").innerHTML = "Speed: "+ parseInt(speed*1200) + "km/h";
      },5000)

      setTimeout(()=>{speed -=0.05;document.getElementById("displaySpeed").innerHTML = "Speed: 0 km/h";
      document.getElementById("plane").style.height = "15px";
      clearTime()
      clearDistance()},8000) 
      

      }
}




  //speed

  var speed = 0;
  function getSpeed()
  {
      return speed
  }


 

function speedup()
{


    if (speed <1)
    {
        speed+=0.2
        document.getElementById("displaySpeed").innerHTML = "Speed: " + parseInt(speed*1200) + "km/h";
        if(speed.toFixed(1)==0.2)
        {
            document.getElementById("landingDiv").style.display = "flex"
        }
        else
        {
            document.getElementById("landingDiv").style.display = "none"
           
        }
    }
    if (speed.toFixed(1) !==0 )
    {
        document.getElementById("btn").disabled = false;
    }

}
function speeddown()
{

    if (speed.toFixed(1) !=0.2 && speed.toFixed(1) !=0 )
    {
        speed-=0.2

        document.getElementById("displaySpeed").innerHTML = "Speed: " + parseInt(speed*1200) + "km/h"

    }

    if(speed.toFixed(1) ==0.2)
    {
        document.getElementById("landingDiv").style.display = "flex"
    }
}

export {speeddown,speedup,getSpeed,planeLanding}
