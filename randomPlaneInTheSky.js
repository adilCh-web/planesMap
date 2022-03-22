import { planeNextOther } from "./maydays.js";


 
 function randomPlaneInTheSky()
 {
    for(let x = 0;x<200;x++)
    {
        let divMap = document.getElementById("map")
        const randomPlane = document.createElement("img");
        randomPlane.src = "./img/randomPlane.png"
        randomPlane.style.position = "absolute"
        divMap.appendChild(randomPlane);
        randomPlane.style.height = "20px";
        randomPlane.style.width = "20px"

        randomPlane.style.left = randomIntFromInterval(0,2900) + "px"

        randomPlane.style.top = randomIntFromInterval(0,1630) + "px"
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
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + speedRandomPlane)+"px";
                planeNextOther(randomPlane)},1000)
                
              break;
            case 22.5:
              setInterval(()=>{
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.75*speedRandomPlane)+"px";
                randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.25*speedRandomPlane)+"px";
                planeNextOther(randomPlane)
                }
                ,1000)
              break;
            case 45:
               setInterval(()=>{
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.50*speedRandomPlane)+"px";
                randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.50*speedRandomPlane)+"px";
                planeNextOther(randomPlane)
                }
                ,1000)
              break;
            case 67.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)

              break;
              case 90:
                setInterval(()=>{
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)

              break;
            case 112.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
              break;
            case 135:
                setInterval(()=>{
                randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.50*speedRandomPlane)+"px";
                randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.50*speedRandomPlane)+"px";
                planeNextOther(randomPlane)
                }
                ,1000)
              break;
            case 157.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
            case 180:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
                break;
            case 202.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
                break;
            case 225:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
                break;
            case 247.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
                break;
            case 270:
                setInterval(()=>{
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - speedRandomPlane)+"px";
                    planeNextOther(randomPlane)}
                    ,1000)
                break;
            case 292.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.25*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.75*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
                break;
            case 315:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.5*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.5*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
            case 337.5:
                setInterval(()=>{
                    randomPlane.style.left = (parseFloat(randomPlane.style.left.replace("px","")) + 0.75*speedRandomPlane)+"px";
                    randomPlane.style.top = (parseFloat(randomPlane.style.top.replace("px","")) - 0.25*speedRandomPlane)+"px";
                    planeNextOther(randomPlane)
                    }
                    ,1000)
                break;
          }



    }
 }


 
 function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


 export {randomPlaneInTheSky}