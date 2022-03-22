
import {randomPlaneInTheSky} from './randomPlaneInTheSky.js';

import { flightTurn} from './flightTurn.js';
import { speeddown,speedup} from './controlSpeed.js';
import {flightTime,getAltitude} from './time_Km_perFlight.js';
import {planeLanding} from "./planeLanding.js"





   
randomPlaneInTheSky()






document.getElementById("btn").addEventListener("click",flightTurn)

document.getElementById("speedUp").addEventListener("click",speedup)

document.getElementById("speedDown").addEventListener("click",speeddown)

document.getElementById("startButton").addEventListener("click",flightTime)

document.getElementById("AltitudeRange").addEventListener("change",getAltitude)

document.getElementById("landing").addEventListener("click",planeLanding)




 function randomCity()
 {
     const cities = ["Betina","Rocafull","Bahara","Nohinissi","Kendall","Gropi","Anfochi","Zeer","Elise","Dassdord","Trifpunkt","Citadelle","Rejdenessen","kolayb","Tayma","Nabihalia","Bahara"]
     document.getElementById("destination").innerHTML = cities[Math.floor(Math.random()*cities.length)];
 }




  

 
 

