
let plane = document.getElementById("plane")
function planeNextOther(randomPlane)
{
    let closeDistanceTop = 
    Math.abs(parseInt(plane.style.top.replace("","")) -parseInt(randomPlane.style.top.replace("","")))
    

    let closeDistanceLeft = 
    Math.abs(parseInt(plane.style.left.replace("","")) - parseInt(randomPlane.style.left.replace("","")) )

    if(closeDistanceLeft <=50 &&closeDistanceTop<=50)

    {
        plane.style.backgroundColor = "red";
        plane.style.borderRadius = "90px";
        document.getElementById("info").innerHTML = "!Warning!: " + closeDistanceLeft + " HZT"  + closeDistanceTop + " VTC"

        setTimeout(()=>
        {      
              plane.style.backgroundColor = "transparent";
            document.getElementById("info").innerHTML = ""},20000) // to check every 5 second to git rid of the warning messages

    }



 


  
   
}

export {planeNextOther}