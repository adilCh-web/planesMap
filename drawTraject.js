

function drawTraject()
{
     if (typeof(document.getElementById("plane"))!='undefined' && document.getElementById("plane") != null)
    {
            let plane = document.getElementById("plane")
            let dotTraject = document.createElement("img")
            dotTraject.src = "./img/dot.png"
            dotTraject.style.height = "5px"
            dotTraject.style.width = "5px"
            dotTraject.style.zIndex =1
            let map = document.getElementById("map")
            map.appendChild(dotTraject)
            dotTraject.style.position = "absolute"
        
        
            dotTraject.style.left = (parseInt(plane.style.left.replace("px","")) + 7.5) + "px";
            dotTraject.style.top = 
            (parseInt(plane.style.top.replace("px",""))+ 7.5) + "px"
            //console.log(plane.style.left + "---" + dotTraject.style.left)
    }
    




}

export {drawTraject}