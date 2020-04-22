//Lightning Exercise

// const darkModeButton = document.querySelector("#dark-mode-button");

// // console.log(darkModeButton);

// darkModeButton.addEventListener("click", function(){
//     //Select the form element
//     const formElement = document.querySelector("form");
//     //Add a class of .dark-mode to the form
//     formElement.classList.toggle("dark-mode")
// })

// document.querySelector("#jordan-mode-button").addEventListener("click", function(){
//     document.querySelector("form").classList.toggle("jordan-mode")
// })

// document.querySelector("#submit-btn").addEventListener("click", function(){
//     const nameInput = document.querySelector("#name-input")
//     const emailInput = document.querySelector("#email-input")

//     const nameValue = nameInput.value;
//     const emailValue = emailInput.value;

//     document.querySelector("#output-container").innerHTML += `<section>
//     <h3> ${nameValue}</h3>
//     <p> ${emailValue}</p>
//     </section>`
// })

//Practice #1: Mirron, Mirror in the Codetex

// document.querySelector("#message").addEventListener("keyup", function(){
//     const messageInput = document.querySelector("#message")

//     const messageValue = messageInput.value;


//     document.querySelector("#blue-border").textContent = messageValue

//     // console.log(document.querySelector("#blue-border"))

//     document.querySelector("#red-border").textContent = messageValue;

// })

// // Experimenting w/ the difference of textContent and value; message vs blue-border
// document.querySelector("#blue-border").addEventListener("click", function(){
//     const messageInput = document.querySelector("#message");

//     const messageValue = messageInput.value;


//     document.querySelector("#purple-border").textContent = messageValue

//     console.log(document.querySelector("#purple-border"))

// })

// Practice 2: Wonder Powers Activate!
// function flightHandlerFunction(){
//     document.querySelector("#flight").classList.replace("disabled", "enabled")
// }

// function mindReadingHandlerFunction(){
//     document.querySelector("#mindreading").classList.replace("disabled", "enabled")
// }

// function xrayHandlerFunction(){
//     document.querySelector("#xray").classList.replace("disabled", "enabled")
// }

// function activateAllHandlerFunction(){
//     const powerFunctions = document.querySelectorAll(".power")
//     for(let i = 0; i < powerFunctions.length; i++){
//         powerFunctions[i].classList.replace("disabled", "enabled")
//     }
//     console.log(powerFunctions);
// }

// function deactivateAllHandlerFunction(){
//     const powerFunctions = document.querySelectorAll(".power")
//     for(let i = 0; i < powerFunctions.length; i++){
//         powerFunctions[i].classList.replace("enabled", "disabled")
//     }
// }

// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)

// document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

// document.querySelector("#activate-all").addEventListener("click", activateAllHandlerFunction)

// document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandlerFunction)


// Challenge: One Function to Rule Them All

// function dryHandlerFunction(){
//     const split = event.target.id.split("-")
//     // document.querySelector(`#${split[1]}`).classList.replace("disabled", "enabled")
//     document.querySelector(`#${split[1]}`).classList.toggle("disabled")
//     document.querySelector(`#${split[1]}`).classList.toggle("enabled")

// }

// function activateAllHandlerFunction(){
//     const powerFunctions = document.querySelectorAll(".power")
//     for(let i = 0; i < powerFunctions.length; i++){
//         powerFunctions[i].classList.replace("disabled", "enabled")
//     }
//     console.log(powerFunctions);
// }

// function deactivateAllHandlerFunction(){
//     const powerFunctions = document.querySelectorAll(".power")
//     for(let i = 0; i < powerFunctions.length; i++){
//         powerFunctions[i].classList.replace("enabled", "disabled")
//     }
// }

// document.querySelector("#activate-flight").addEventListener("click", dryHandlerFunction)

// document.querySelector("#activate-mindreading").addEventListener("click", dryHandlerFunction)

// document.querySelector("#activate-xray").addEventListener("click", dryHandlerFunction)

// document.querySelector("#activate-all").addEventListener("click", activateAllHandlerFunction)

// document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandlerFunction)

// Challenge: Drag & Drop
const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })
  
        const targets = document.querySelectorAll(".target")
        
        console.log(targets)
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()
  
          target.ondrop = e => {
            // Enabled dropping on targets
            e.preventDefault()
  
            // Determine what's being dropped
            const data = e.dataTransfer.getData("text")
  
            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes
            // if (document.querySelector(`.target`).hasChildNodes() === false){
                e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            // }
          }
        })
      }
    }
  })
  
  DragDropManager.init()
  