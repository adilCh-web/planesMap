
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
    //console.log(randomPlane.style.left,randomPlane.style.top)
    randomPlane.remove()
    print("somthing removed")

}
}

export {removePlanes}