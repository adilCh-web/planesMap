import { getSpeed } from "./controlSpeed.js"

var distance = 0
var sec = 0
let mins = document.getElementById("min")
let altitude = document.getElementById("altitude")
let altitudeSlide= document.getElementById("AltitudeRange")
function flightTime()
{

        setInterval(()=>
        {
            sec +=1

            let min = parseInt(sec/60)
            let restSec = sec%60
            let restMin = min%60
            let hrs = parseInt(restMin/60)


        


            mins.innerHTML = "FlightTime: " + hrs + "H:" + restMin + "MIN" + " " + restSec + "s"
    
        },100)

        document.getElementById("startButton").setAttribute('disabled', 'disabled')
        
}

function getAltitude() //changing plane Size
{

    document.getElementById("plane").style.height =altitudeSlide.value/400+"px"
    console.log(document.getElementById("plane").style.height )
    altitude.innerHTML= "Altitude: " + altitudeSlide.value


}


function getDistanceFlight()
{
    setInterval(()=>
    {
        //console.log(getSpeed())
        switch (parseInt(getSpeed()*10))
        {

            case 6:
                distance+= 720/3600     //720km/h    h=3600 sec
              document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
              break;
            case 4:
                distance+= 480/3600     
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
              
                break;
            case 2:
                distance+= 240/3600     
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
                break;
      
  


        }
    },100)
}



export {flightTime,getAltitude,getDistanceFlight}