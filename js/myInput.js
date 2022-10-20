"use strict";
console.log("Myinput.js");

let inputEl = document.getElementById("inputField");
let inputBtnEl = document.getElementById("addBtn");
let outputEl = document.getElementById("toDoUL");

inputBtnEl.addEventListener("click", sendToListF);

function sendToListF() {
  console.log(inputEl.value);
  let textToLi = `<li>${inputEl.value}</li>`;
  outputEl.insertAdjacentHTML("beforeend", textToLi);
}

// sukurti h1

let h1Icreated = document.createElement("h1");
let DivContainerEl = document.getElementById("divForAdd");
DivContainerEl.prepend(h1Icreated);

// prideti jame tekxta
h1Icreated.id = "h1ICreated";
let h1ICreated = document.getElementById("h1ICreated");
console.log(typeof h1ICreated);
console.log(h1ICreated);

let texIwantToInput = "textAddedFromJS";
h1ICreated.textContent = texIwantToInput;
// patalpinti i divContainerEl
// DONE vvvvvvvvvvv

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// sukurti footer elementa
let footerCreated = document.createElement("footer");
document.body.append(footerCreated);
footerCreated.textContent = "copyright (c) 2022";

// ideti i ji teksta

// patalpinti footeri po sarasu su after
// (5 liked)<https://teams.microsoft.com/l/message/19:_QMTbjYqDqM2VqyaRF3TikiMD1ITlegQHCz15fesiDM1@thread.tacv2/1666249613688?tenantId=08455b90-5d90-4a89-937b-8c2322b2c786&amp;groupId=a136d85b-b246-4217-9ff5-23f33d8a1f9b&amp;parentMessageId=1665374004855&amp;teamName=FEU2&amp;channelName=General&amp;createdTime=1666249613688&amp;allowXTenantAccess=false>
