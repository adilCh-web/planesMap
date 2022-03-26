import {getSpeed} from "./controlSpeed.js";
import { drawTraject } from "./drawTraject.js";
import { flightTime,getDistanceFlight } from "./time_Km_perFlight.js";


var degreeFlight = -22.5;
var plane = document.getElementById("plane");
plane.style.left="104px";
plane.style.top="75px";
var verticalPositionPX =  document.getElementById("vertical");
var horizontalPositionPX =  document.getElementById("horizontal")



  //intervals 

  var interval_0Dregree;
  var interval_22_Dregree;
  var interval_45_Dregree;
  var interval_67_Dregree;
  var interval_90_Dregree;
  var interval_112_Dregree;
  var interval_135_Dregree;
  var interval_157_Dregree;
  var interval_180_Dregree;
  var interval_202_Dregree;
  var interval_225_Dregree
  var interval_247_Dregree
  var interval_270_Dregree;
  var interval_292_Dregree;
  var interval_315_Dregree;
  var interval_337_Dregree;

  var startTime = true



  

  function flightTurn()
  {

    
    //console.log("here " + getSpeed())


    document.getElementById("btn").innerHTML = "Turn"
    degreeFlight +=22.5
    document.getElementById("deg").innerHTML = 'Deg": ' +  degreeFlight
    plane.style.transform =  "rotate(" + degreeFlight +"deg)";
    console.log("this is the dgree " + degreeFlight);
    flightOrientation();

    if(startTime)
    {
        let addPx = 6
        getDistanceFlight()
        flightTime();
        startTime=false;

    }
    

  }

 function flightOrientation()
 {
     
   if(degreeFlight === 0 || degreeFlight === 360 )
   {
       clearInterval(interval_337_Dregree)
       interval_0Dregree = setInterval(()=>{
       plane.style.left = (parseFloat(plane.style.left.replace("px","")) + getSpeed())+"px";
    
       horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","");
       drawTraject()
    
    },1000);
       degreeFlight = 0
   }
   else if(degreeFlight === 22.5)
   {
       clearInterval(interval_0Dregree)

       interval_22_Dregree = setInterval(()=>{
       plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75*getSpeed())+"px";
       plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.25*getSpeed())+"px";
       horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","")
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()
       }
       ,1000)
   }

   else if(degreeFlight===45)
   {
       clearInterval(interval_22_Dregree)
       interval_45_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.5*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.5*getSpeed())+"px";
           horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }

   else if(degreeFlight===67.5)
   {

       clearInterval(interval_45_Dregree);
       interval_67_Dregree = setInterval(()=>{
       plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.25*getSpeed())+"px";
       plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.75*getSpeed())+"px";
               horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","")
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
       ,1000)
   }

   else if(degreeFlight===90)
   {
       clearInterval(interval_67_Dregree)
       interval_90_Dregree = setInterval(()=>{
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 1*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }
   else if(degreeFlight===112.5)
   {
       clearInterval(interval_90_Dregree)
       interval_112_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.25*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.75*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","")
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }

   else if(degreeFlight===135)
   {
       clearInterval(interval_112_Dregree)
       interval_135_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.5*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.5*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","")
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }
   else if(degreeFlight === 157.5)
   {
       clearInterval(interval_135_Dregree)

           interval_157_Dregree = setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.25*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
               ,1000)
       
   }

   else if(degreeFlight===180)
   {
       clearInterval(interval_157_Dregree)
       interval_180_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }
   else if(degreeFlight===202.5)
   {
       clearInterval(interval_180_Dregree)

           interval_202_Dregree = setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.25*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
               ,1000)
   }

   else if(degreeFlight===225)
   {
       clearInterval(interval_202_Dregree)
       interval_225_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.5*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.5*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }
   else if(degreeFlight === 247.5)
   {
       clearInterval(interval_225_Dregree)
           interval_247_Dregree = setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.25*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
               ,1000)
   }

   else if(degreeFlight===270)
   {
       clearInterval(interval_247_Dregree)
       interval_270_Dregree = setInterval(()=>{
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) - getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","")
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }

   else if(degreeFlight === 292.5)
   {
       clearInterval(interval_270_Dregree)
           interval_292_Dregree =  setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.25*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","")
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
               ,1000)
       
   }

   else if(degreeFlight===315)
   {
       clearInterval(interval_292_Dregree)
       interval_315_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.5*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.5*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
           ,1000)
   }
   else if(degreeFlight === 337.5)
   {
       clearInterval(interval_315_Dregree)
           interval_337_Dregree =  setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.25*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
       verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
       drawTraject()}
               ,1000)
       
   }

   else if(degreeFlight==360) // degreeFlight=360 which mean 0 degree
   {
       clearInterval(interval_337_Dregree)
       interval_0Dregree = setInterval(()=>{
           plane.style.left = (parseInt(plane.style.left.replace("px","")) + getSpeed())+"px"},1000);
           horizontalPositionPX.innerHTML = "horizontal Mapp: " + plane.style.left.replace("px","") 
           verticalPositionPX.innerHTML ="vertical Mapp: " + plane.style.top.replace("px","")
           drawTraject()

           
   }



     }

     export {flightTurn}