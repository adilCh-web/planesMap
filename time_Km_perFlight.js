import { getSpeed } from "./controlSpeed_and _Landing.js"


var intervalTime;
var intervalDistance
var distance = 0
var sec = 0
let mins = document.getElementById("min")
let altitude = document.getElementById("altitude")
let altitudeSlide= document.getElementById("AltitudeRange")

function clearTime()
{
    clearInterval(intervalTime)
}

function flightTime()
{

        intervalTime = setInterval(()=>
        {
            sec +=1

            let min = parseInt(sec/60)
            let restSec = sec%60
            let restMin = min%60
            let hrs =  parseInt(min/60)


        


            mins.innerHTML = "FlightTime: " + hrs + "H:" + restMin + "MIN" + " " + restSec + "s"
    
        },100)
        
}

function getAltitude() //changing plane Size
{

    document.getElementById("plane").style.height =altitudeSlide.value/400+"px"
    console.log(document.getElementById("plane").style.height )
    altitude.innerHTML= "Altitude: " + altitudeSlide.value


}


function clearDistance()
{
    clearInterval(intervalDistance)
}


function getDistanceFlight()
{
    intervalDistance = setInterval(()=>
    {
        //console.log(getSpeed())
        switch (parseInt(getSpeed()*10))
        {
            case 0:
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
              break;
            case 10:
                distance+=1200/3600
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
                break;     

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
            case 8:
                distance+= 960/3600     
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
                break;
            
      
  


        }
    },100)
}



export {flightTime,getAltitude,getDistanceFlight,clearTime,clearDistance}