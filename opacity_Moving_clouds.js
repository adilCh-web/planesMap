import {randomIntFromInterval} from "./randomPlaneInTheSky.js";
import {getZoom} from "./zoom.js"

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")

c1.style.top = "-300px"
c1.style.left = "500px"
c3.style.top = "-200px"
c3.style.left = "0px"
c2.style.top = "-500px"
c2.style.left = "0px"
c4.style.top = "200px"
c4.style.left = "1900px"
c1.style.opacity = .1
c2.style.opacity = .3
c3.style.opacity = .4
c4.style.opacity = .35

c1.style.width = 500
c1.style.height = 300


c2.style.width = 200
c2.style.height = 200


c3.style.width = 600
c3.style.height = 350


c4.style.width = 300
c4.style.height = 200






function moving()
{

    setInterval(()=>
    {
        //console.log(parseFloat(c1.style.top.replace("px","")))
        let opacity_1 = c1.style.opacity
        let opacity_2 = c2.style.opacity
        let opacity_3 = c3.style.opacity
        let opacity_4 = c4.style.opacity
        c1.style.opacity = parseFloat(opacity_1) + [-0.1,-0.05,0.05,0.15,-0.15,0.1][randomIntFromInterval(0,5)]
        c2.style.opacity = parseFloat(opacity_2) + [-0.1,-0.05,0.05,0.15,-0.15,0.1][randomIntFromInterval(0,5)]
        c3.style.opacity = parseFloat(opacity_3) + [-0.1,-0.05,0.05,0.15,-0.15,0.1][randomIntFromInterval(0,5)]
        c4.style.opacity = parseFloat(opacity_4) + [-0.1,-0.05,0.05,0.15,-0.15,0.1][randomIntFromInterval(0,5)]

    },[1000,2000,3000,4000,5000][randomIntFromInterval(0,4)])
    setInterval(()=>{
        c1.style.top = (parseFloat(c1.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,9)])  +"px"      
        c1.style.left = (parseFloat(c1.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,7)]) +"px"
        c2.style.top = (parseFloat(c2.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,9)]) +"px"
        c2.style.left = (parseFloat(c2.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,7)]) +"px"
        c3.style.top = (parseFloat(c3.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,9)])  +"px"
        c3.style.left = (parseFloat(c3.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,7)]) +"px"
        c4.style.top = (parseFloat(c4.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-10,10][randomIntFromInterval(0,9)])  +"px"
        c4.style.left = (parseFloat(c4.style.top.replace("px","")) + getZoom()*[-2,2,-1,1,-3,3,4,-4,-6,6,-10,10][randomIntFromInterval(0,9)]) +"px"
    },500)
}


export {moving}