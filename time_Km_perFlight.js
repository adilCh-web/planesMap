

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
    
        },200)

        document.getElementById("startButton").setAttribute('disabled', 'disabled')
        
}

function getAltitude() //changing plane Size
{

    document.getElementById("plane").style.height =altitudeSlide.value/400+"px"
    console.log(document.getElementById("plane").style.height )
    altitude.innerHTML= "Altitude: " + altitudeSlide.value


}



export {flightTime,getAltitude}