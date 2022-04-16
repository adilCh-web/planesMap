
import {getZoom} from "./zoom.js"


function removePlanes(randomPlane,interval)
{
    if(
    parseInt(randomPlane.style.left.replace("px","")) > 2400*getZoom()
    || 
    parseInt(randomPlane.style.top.replace("px","")) > 1325*getZoom())

{
    console.log("somthing removed")
    console.log(randomPlane)
    randomPlane.remove()
    clearInterval(interval)
    
    

}
}

export {removePlanes}