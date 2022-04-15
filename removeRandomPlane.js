
import {getZoom} from "./zoom.js"


function removePlanes(randomPlane)
{
    if (parseInt(randomPlane.style.left.replace("px","")) < 0
     ||
    parseInt(randomPlane.style.left.replace("px","")) > 2400*getZoom()
    || 
    parseInt(randomPlane.style.top.replace("px","")) > 1325*getZoom()
     || 
     parseInt(randomPlane.style.top.replace("px",""))  < 0)
{
    console.log("somthing removed")
    
    randomPlane.remove()
    

}
}

export {removePlanes}