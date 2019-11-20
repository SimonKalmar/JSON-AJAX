"use strict";
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/ajax.js";

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("students.json", txtHandler);
    $("fortune").style.display = "none";
}

/*
 * readystatechange/load event handler
 * aka callback function
 * for the above AJaX
 */
let txtHandler = function(e) {
    /* ajax load event
     * puts received text
     * onto the dom
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
  var caption = document.createTextNode("Klasseliste");
  var captioncreate = document.createElement("caption");
  let by = document.createTextNode("Byen");
  let indbyggere = document.createTextNode("Indbyggere");
  let th = document.createElement("th");
  var tbl = document.createElement('table');
  tbl.style.width  = '700px';
  tbl.style.border = '1px solid black';

  captioncreate.appendChild(caption);
  tbl.appendChild(captioncreate);
  var row = tbl.insertRow();
  row.insertCell().outerHTML = "<tr><th>Fuldenavne</th><th>E-mail</th><th>Fødselsdag</th></tr>";

  for(var i = 0; i < obj.length; i++){
      var tr = tbl.insertRow();
      var td = tr.insertCell();
      var td2 = tr.insertCell();
      var td3 = tr.insertCell();

      td.appendChild(document.createTextNode(obj[i].fName + " " + obj[i].lName));
      td2.appendChild(document.createTextNode(obj[i].email));
      td3.appendChild(document.createTextNode(obj[i].Birthday));
      td.style.border = '1px solid black';

  }



    $("new").appendChild(tbl);
}

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);                   // kick off JS
