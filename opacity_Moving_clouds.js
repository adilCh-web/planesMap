import {randomIntFromInterval} from "./randomPlaneInTheSky.js";

let c1 = document.getElementById("clouds_1")
let c2 = document.getElementById("clouds_2")
let c3 = document.getElementById("clouds_3")
let c4 = document.getElementById("clouds_4")
c1.style.top = "-300px"
c1.style.left = "500px"
c3.style.top = "0px"
c3.style.left = "1800px"
c2.style.top = "0px"
c2.style.left = "0px"
c4.style.top = "-120px"
c4.style.left = "1679px"
c1.style.opacity = .8
c2.style.opacity = .8
c3.style.opacity = .4
c4.style.opacity = .45

c1.style.width = "1200px"
c1.style.height = "500px"

c2.style.width = "2300px"
c2.style.height = "1000px"

c3.style.width = "600px"
c3.style.height = "800px"

c4.style.width = "700px"
c4.style.height = "500px"





function moving()
{

    setInterval(()=>
    {
        //console.log(parseFloat(c1.style.top.replace("px","")))
        let opacity_1 = c1.style.opacity
        let opacity_2 = c2.style.opacity
        let opacity_3 = c3.style.opacity
        c1.style.opacity = parseFloat(opacity_1) + [-0.1,-0.05,0.05,0.15,-0.15,0.1][randomIntFromInterval(0,5)]
        c2.style.opacity = parseFloat(opacity_2) + [-0.1,-0.05,0.05,0.15,-0.15,0.1][randomIntFromInterval(0,5)]
        c3.style.opacity = parseFloat(opacity_3) + [-0.1,-0.05,0.05,0.15,-0.15,0.1][randomIntFromInterval(0,5)]

    },[500,1000,2000,3000,4000][randomIntFromInterval(0,4)])
    setInterval(()=>{
        c1.style.top = (parseFloat(c1.style.top.replace("px","")) + [-2,2,-1,1,-3,3,4,-4.-10,10][randomIntFromInterval(0,9)])  +"px"      
        c1.style.left = (parseFloat(c1.style.top.replace("px","")) + [-2,2,-1,1,-3,3,4,-4][randomIntFromInterval(0,7)]) +"px"
        c2.style.top = (parseFloat(c2.style.top.replace("px","")) + [-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,9)]) +"px"
        c2.style.left = (parseFloat(c2.style.top.replace("px","")) + [-2,2,-1,1,-3,3,4,-4][randomIntFromInterval(0,7)]) +"px"
        c3.style.top = (parseFloat(c3.style.top.replace("px","")) + [-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,9)])  +"px"
        c3.style.left = (parseFloat(c3.style.top.replace("px","")) + [-2,2,-1,1,-3,3,4,-4][randomIntFromInterval(0,7)]) +"px"
    },500)
}


export {moving}