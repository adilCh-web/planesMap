


  //speed

  var speed = 0;
  function getSpeed()
  {
      return speed
  }


 

function speedup()
{


    if (speed <=0.6)
    {
        speed+=0.2
        document.getElementById("displaySpeed").innerHTML = "Speed: " + parseInt(speed*1200) + "km/h";
        console.log(speed.toFixed(1))
        if(speed.toFixed(1)==0.2)
        {
            document.getElementById("landingDiv").style.display = "flex"
        }
        else
        {
            document.getElementById("landingDiv").style.display = "none"
           
        }
    }
    if (speed !==0)
    {
        document.getElementById("btn").disabled = false;
    }

}
function speeddown()
{

    if (speed.toFixed(1) !=0.2 && speed !=0)
    {
        speed-=0.2

        document.getElementById("displaySpeed").innerHTML = "Speed: " + parseInt(speed*1200) + "km/h"
        if(speed.toFixed(1)===0.2)
        {
            document.getElementById("landingDiv").style.display = "flex"
          
        }

    }
    if(speed.toFixed(1) ==0.2)
    {
        document.getElementById("landingDiv").style.display = "flex"
    }
}

export {speeddown,speedup,getSpeed}
