
let plane = document.getElementById("plane")
function planeNextOther(randomPlane)
{
    let closeDistanceTop = 
    Math.abs(parseInt(plane.style.top.replace("","")) -parseInt(randomPlane.style.top.replace("","")))
    

    let closeDistanceLeft = 
    Math.abs(parseInt(plane.style.left.replace("","")) - parseInt(randomPlane.style.left.replace("","")) )

    if(closeDistanceLeft <=30 &&closeDistanceTop<=30)

    {
        plane.style.backgroundColor = "red";
        plane.style.borderRadius = "90px";
        document.getElementById("info").innerHTML = "!Warning!: " + closeDistanceLeft + " HZT"  + closeDistanceTop + " VTC"

    }
  
   
}

export {planeNextOther}