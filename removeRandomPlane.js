
function removePlanes(randomPlane)
{
    if (parseInt(randomPlane.style.left.replace("px","")) < 0
     ||
    parseInt(randomPlane.style.left.replace("px","")) > 2400
    || 
    parseInt(randomPlane.style.top.replace("px","")) > 1341
     || 
     parseInt(randomPlane.style.top.replace("px",""))  < 0)
{
    //console.log(randomPlane.style.left,randomPlane.style.top)
    randomPlane.remove()

}
}

export {removePlanes}