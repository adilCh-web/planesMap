import { getSpeed } from "./controlSpeed.js"
import {clearTime,clearDistance} from "./time_Km_perFlight.js"

let plane = document.getElementById("plane")




function planeNextOther(randomPlane,reference)
{
    if (getSpeed() != 0)  // while the plane landed no crashes
    {
        if (typeof(document.getElementById("plane"))!='undefined' && document.getElementById("plane") != null) // when its not removed (after crash)
        {
            let closeDistanceTop = 
            Math.abs(parseInt(plane.style.top.replace("","")) -parseInt(randomPlane.style.top.replace("","")))
            

            let closeDistanceLeft = 
            Math.abs(parseInt(plane.style.left.replace("","")) - parseInt(randomPlane.style.left.replace("","")) )


            if (0 <=closeDistanceLeft && closeDistanceLeft<=30 && 0<=closeDistanceTop && closeDistanceTop<=30) 

            {
                plane.style.backgroundColor = "red";
                plane.style.opacity = .3
                plane.style.borderRadius = "90px";
                document.getElementById("info").innerHTML = "!Warning!: " + closeDistanceLeft + " HZT - "  + closeDistanceTop + " VTC" + "<br>" + "Plane Reference: " + reference
                console.log(closeDistanceLeft,closeDistanceTop)

                /*setTimeout(()=>
                {
                    plane.style.backgroundColor = "transparent";
                    document.getElementById("info").innerHTML = "---------"
                },7000)*/
                if(closeDistanceLeft>=29 || closeDistanceTop>=29)
                {
                    plane.style.backgroundColor = "transparent";
                    document.getElementById("info").innerHTML = ""
                }
                



            }
            if (closeDistanceLeft <10 && closeDistanceTop<10)
            {
                //console.log(closeDistanceLeft,closeDistanceTop)
                let top = plane.style.top
                let left = plane.style.left;

                let explosion = document.createElement("img")
                explosion.src = "./img/explosion-gif-transparent-12.gif"
                explosion.style.position = "absolute"
                explosion.style.height= "40px"

                document.getElementById("map").appendChild(explosion)

                plane.remove()
                document.getElementById("info").innerHTML = "EXPLOSION"
                randomPlane.remove()
                explosion.style.top = top
                explosion.style.left = left
                setTimeout(()=>{explosion.style.display = "none"},5000)
                clearTime()
                clearDistance()


        }
    }

   
}

    }






export {planeNextOther}