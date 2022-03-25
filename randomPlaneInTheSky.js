import { planeNextOther } from "./maydays.js";
import {removePlanes} from "./removeRandomPlane.js"
 

 
 function randomPlaneInTheSky()
 {
    for(let x = 0;x<200;x++)
    {
        let divMap = document.getElementById("map")
        let divRandomPlane = document.createElement("div") // div to put an image plane and its flight reference
        const randomPlane = document.createElement("img");
        const flightRef = document.createElement("p");
        randomPlane.src = "./img/randomPlane.png"
        divRandomPlane.appendChild(randomPlane)
        divRandomPlane.appendChild(flightRef)

        divRandomPlane.style.position = "absolute"
        
        divMap.appendChild(divRandomPlane);
        flightRef.innerHTML = refFilght()

        randomPlane.style.height = "25px";
        randomPlane.style.width = "25px"
        flightRef.style.fontSize = "8px"
        flightRef.style.color ="white"

        divRandomPlane.style.left = randomIntFromInterval(0,2370) + "px"

        divRandomPlane.style.top = randomIntFromInterval(0,1280) + "px"
        //flightRef.style.top = (parseInt(randomPlane.style.top.replace("px","")) + 30) + "px"
        //flightRef.style.left = randomPlane.style.left
        let degrees = [360, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5]
        let index = randomIntFromInterval(0,15)
        let deg = degrees[index]
        //console.log(deg)
        randomPlane.style.transform =  "rotate(" + deg +"deg)"
        let speeds = [0.2,0.4,0.6]
        let speedRandomPlane = speeds[randomIntFromInterval(0,2)]


        switch (deg) {
            case 360:
              setInterval(()=>{
                divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + speedRandomPlane)+"px";
                planeNextOther(divRandomPlane);
                removePlanes(divRandomPlane)},1000)
                

              break;
            case 22.5:
              setInterval(()=>{
                divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.75*speedRandomPlane)+"px";
                divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.25*speedRandomPlane)+"px";
                planeNextOther(divRandomPlane);
                removePlanes(divRandomPlane)
                }
                ,1000)
                
              break;
            case 45:
                setInterval(()=>{
                divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.50*speedRandomPlane)+"px";
                divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.50*speedRandomPlane)+"px";
                planeNextOther(divRandomPlane)
                removePlanes(divRandomPlane)
                
                }
                ,1000)
              break;
            case 67.5:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)


              break;
              case 90:
                setInterval(()=>{
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)


              break;
            case 112.5:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)
                    
              break;
            case 135:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.50*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.50*speedRandomPlane)+"px";
                planeNextOther(divRandomPlane);
                removePlanes(divRandomPlane)
                }
                ,1000)
              break;
            case 157.5:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)

            case 180:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)
                break;
            case 202.5:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)

                break;
            case 225:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)
                break;
            case 247.5:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    }
                    ,1000)
                    removePlanes(divRandomPlane)
                break;
            case 270:
                setInterval(()=>{
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)}
                    ,1000)
                    
                break;
            case 292.5:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)

                break;
            case 315:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.5*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)
                    
            case 337.5:
                setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane)
                    removePlanes(divRandomPlane)
                    }
                    ,1000)
                    
                break;
          }



    }
 }


 
 function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function refFilght() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < 2; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   result =result+"-"+String(randomIntFromInterval(1, 9)) + String(randomIntFromInterval(0,9)) + String(randomIntFromInterval(0, 9))
   return result;
}


 export {randomPlaneInTheSky,randomIntFromInterval}