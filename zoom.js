


var zoom = 1
let plane = document.getElementById("plane")
let map = document.getElementById("img")





function getZoom()
{
    return zoom
}

function changeSize(element,label,number)
{
    if(label === "top")
    {
        let newTop = parseFloat(element.style.top.replace("px",""))*number + "px"
        
        element.style.top = newTop
    }
    if(label === "left")
    {
        let newLeft = parseFloat(element.style.left.replace("px",""))*number + "px"
        
        element.style.left = newLeft
    }
    else if(label === "width")
    {
        let newWidth = element.width*number
        
        element.width = newWidth
 
    }
    else if (label === "height")
    {
        let newHeight = element.height*number
        element.height = newHeight
    }
}


function zoomIn()

{
    if(zoom !=1.5625)
    {
        zoom*=1.25

        changeSize(map,"width",1.25)
        changeSize(plane,"top",1.25)
        changeSize(plane,"left",1.25)
        changeSize(document.getElementById("c1"),"width",1.25)
        changeSize(document.getElementById("c1"),"top",1.25)
        changeSize(document.getElementById("c1"),"left",1.25)
        console.log(document.getElementById("c1").width + " - " + document.getElementById("c1").height)
        changeSize(document.getElementById("c2"),"width",1.25)
        changeSize(document.getElementById("c2"),"top",1.25)
        changeSize(document.getElementById("c2"),"left",1.25)
        changeSize(document.getElementById("c3"),"width",1.25)
        changeSize(document.getElementById("c3"),"top",1.25)
        changeSize(document.getElementById("c3"),"left",1.25)
        changeSize(document.getElementById("c4"),"width",1.25)
        changeSize(document.getElementById("c4"),"top",1.25)
        changeSize(document.getElementById("c4"),"left",1.25)


        for(let i=0;i<200;i++)
        {
            if( typeof(document.getElementById("randomPlane"+ i)) !== "undefined" || document.getElementById("randomPlane"+ i) !== null)
            {
    
            let newTopPositionRandomPlane = parseFloat(document.getElementById("randomPlane"+ i).style.top.replace("px",""))*1.25
            document.getElementById("randomPlane" + i).style.top = newTopPositionRandomPlane + "px"
            let newLeftPositionRandomPlane = parseFloat(document.getElementById("randomPlane" + i).style.left.replace("px",""))*1.25
            document.getElementById("randomPlane" + i).style.left = newLeftPositionRandomPlane + "px"
            }
            else
            {
                continue; // when a randomPlane is removed than we skip its id attribute so we avoid errors
            }
        
        }
    }



}


function zoomOut()

{
    if(zoom !=1)
    {
        zoom/=1.25

        changeSize(map,"width",1/1.25)
        changeSize(plane,"top",1/1.25)
        changeSize(plane,"left",1/1.25)
        changeSize(document.getElementById("c1"),"width",1/1.25)
        changeSize(document.getElementById("c1"),"top",1/1.25)
        changeSize(document.getElementById("c1"),"left",1/1.25)
 
        console.log(document.getElementById("c1").width + " - " + document.getElementById("c1").height)
        changeSize(document.getElementById("c2"),"width",1/1.25)
        changeSize(document.getElementById("c2"),"top",1/1.25)
        changeSize(document.getElementById("c2"),"left",1/1.25)
    
        changeSize(document.getElementById("c3"),"width",1/1.25)
        changeSize(document.getElementById("c3"),"top",1/1.25)
        changeSize(document.getElementById("c3"),"left",1/1.25)

        changeSize(document.getElementById("c4"),"width",1/1.25)
        changeSize(document.getElementById("c4"),"top",1/1.25)
        changeSize(document.getElementById("c4"),"left",1/1.25)


        for(let i=0;i<200;i++)
        {
            if(typeof(document.getElementById("randomPlane"+ i))!== "undefined" || document.getElementById("randomPlane"+ i) !== null)
            {
                changeSize(document.getElementById("randomPlane"+ i),"top",1/1.25)
                changeSize(document.getElementById("randomPlane"+ i),"left",1/1.25)
            }
            else
            {
                continue; // when a randomPlane is removed than we skip its id attribute so we avoid errors
            }

        }
        //console.log(newTopPosition)
    }



}


export {zoomIn,getZoom,zoomOut}