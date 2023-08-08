// put code here!
const responses = ["You woke up in your spaceship room amidst alarms and blinking red lights."];

function intro (){
    alert("Welcome, traveler!\n\n"
        + "You are about to embark on a 'choose your own adventure' journey.\n"
        + "At each step, you'll be given multiple choices.\n"
        + "To make a choice, simply enter the letter corresponding to your decision.\n"
        + "Good luck and enjoy your adventure!");
        firstQuestion();
}

function firstQuestion () {
    let response = prompt("You wake up in your room inside of a spaceship. \n"
        + "You're still drowsy, the alarms are blaring off and there are red lights blinking everywhere telling you there's something wrong. \n"
        + "To find out what's happening, you step out of your room to: \n\n"
        + "a) Search for other crew members, hoping for answers or assistance.\n"
        + "b) Head to the cockpit to assess the situation.");

    if(response.toLowerCase() === "a"){
        responses.push("You decided to search for other crew members.");
        secondQuestion();
    } else if (response.toLowerCase() === "b" ){
        responses.push("You decided to head directly to the cockpit to assess the situation.");
        fourthQuestion();
    } else {
        alert("Please, choose from the available options.");
        firstQuestion();
    }
}

function secondQuestion () {
    let response = prompt("As you venture through the ship's hallways, the red emergency lights cast eerie shadows on the walls.\n"
    +  "It's unsettling not to see or hear any other crew members.\n"
    + "You soon reach a bifurcation. Two pathways lie before you:\n\n"
    + "a) Head towards the engine room. \n"
    + "\tThe heart of the ship might hold clues or crew members who can help explain the situation.\n"
    + "b) Venture towards the cafeteria.\n"
    + "\tIt's mealtime, and there's a good chance you might find someone there.");


    if (response.toLowerCase() === "a"){
        responses.push("You chose to investigate the engine room, feeling the heat rise as you approached.");
        thirdQuestion();
        
    } else if (response.toLowerCase() === "b") {
        //End 1
        responses.push("You headed towards the cafeteria, hoping to find someone.");
        responses.push("While in the cafeteria, the engine room was consumed by a raging fire, leading to a catastrophic explosion.");
        alert("As you search the cafeteria, a raging fire had been consuming the engine room. \n"
            + "Without anyone to shut off the fuel supply in time, the fire feasts upon it, culminating in a devastating explosion that rocks the very core of the spaceship.");
        gameOver();
    } else {
        alert("Please, choose from the available options.");
        secondQuestion();
    }
}

function thirdQuestion () {
    let response = prompt("As you approach the Engine Room, an oppressive heat envelopes you. \n"
        + "The door, sensing your proximity, hisses open, revealing a chaotic scene. Flames dance menacingly across the room. An acrid smell of burnt wires fills the air.\n\n"
        + "Suddenly, a smaller explosion erupts from one of the control panels, showering sparks and debris.\n"
        + "This fire isn't just a threat to the ship; it's rapidly becoming a direct danger to you.\n\n"
        + "a) Try to reboot the ventilation system to clear the smoke and buy yourself some time.\n"
        + "b) Try to resolve the blinking warnings on the control panel.");

    if (response.toLowerCase() === "a"){
        //End 2
        responses.push("In the engine room, you activated the ventilation system, clearing the smoke.");
        responses.push("Using the fire extinguisher, you battled the flames and secured the ship's safety.");
        alert("After activating the ventilation system, the thick smoke gradually cleared, giving you a clearer view of the room.\n"
            + "You grabbed the fire extinguisher and battled the flames, bringing them under control.\n"
            + "The ship is safe for now. With the immediate threat averted, you can continue on your journey, hoping for smoother travels ahead.");
        gameOver();
    } else {
        //End 3
        responses.push("Braving the flames, you rushed to the control panel, sustaining burns but successfully cutting off the fuel supply.");
        alert("Rushing straight to the control panel, the intense heat singed your skin, causing several painful burns.\n"
            + "Despite the pain and thick smoke making it hard to breathe, you managed to cut off the fuel supply, preventing a catastrophic explosion.\n"
            + "With the immediate danger averted, you then put out the remaining flames. However, the ordeal has left you weakened and in need of medical attention.")
        gameOver();
    }
}

function fourthQuestion() {
    let response = prompt("Reaching the cockpit, you run a diagnostic scan and find out there's a fire raging in the engine room. \n"
        + "Panic and adrenaline flood your system as you realize the imminent danger.\n\n"
        + "You're faced with a split-second decision:\n\n"
        + "a) Shut down the fuel immediately and rush to the engine room to extinguish the fire.\n"
        + "b) Try to launch the escape pods, risking the volatile combination of fuel and fire.");

    if (response.toLowerCase() === "a"){
        responses.push("In the face of danger, you chose to shut down the fuel and rush to the engine room.");
        fifthQuestion();
    } else if (response.toLowerCase() === "b") {
        //End 4
        responses.push("Choosing to launch the escape pods, you were met with a devastating explosion due to the volatile mix of fuel and fire.");        
        alert("As you hit the controls to launch the escape pod, the ship trembles violently beneath your feet.\n"
        + "You can feel the heat intensifying from behind the sealed doors. In a moment of realization, you understand it's too late. \n"
        + "The volatile mix of fuel and fire proves catastrophic. A blinding flash engulfs everything, and silence takes over.");
        gameOver();
    } else {
        alert("Please, choose from the available options.");
        fourthQuestion();
    }
}

function fifthQuestion() {
    let response = prompt("You race to the engine room, your heart pounding in your chest. \n"
        + "As you arrive, the flames in front of you are growing taller and wilder with each passing moment.\n\n"
        + "1) You tend to the fire and then return to the cockpit.\n"
        + "2) You try to lauch the escape pod.\n"
        + "3) You tend to the fire and start repairs.");

    if (parseInt(response) === 1){
        //End 5
        responses.push("You grabbed the fire extinguisher, battling the flames and ensuring the ship's safety.");
        alert("You managed to control the fire, ensuring the ship's safety for now.\n"
            + "You can continue on your journey, hoping for smoother travels ahead.");
        gameOver();

    } else if(parseInt(response) === 2) {
        //End 6
        responses.push("You failed to address the raging fire in time, leading to a catastrophic explosion that sealed your fate.");
        alert("The volatile combination of the ongoing fire and the ship's systems results in catastrophe.\n"
            + "A blinding explosion ensues, ending your journey abruptly.");
        gameOver();

    } else if (parseInt(response) === 3){
        //End 7
        responses.push("You bravely confronted the fire and successfully made crucial repairs, ensuring the ship's temporary functionality.");
        alert("After your efforts, you not only control the fire but also manage to patch up some of the critical damages.\n"
            + "The ship is not at its best, but it's functional. \n"
            + "You've bought yourself some time, but you'll need to find a sppaceport for further repairs soon.");
        gameOver();

    } else {
        alert("Please, choose from the available options.");
        fifthQuestion();
    }
}

function gameOver() {
    let response = prompt("The End!\n\n"
        + "Would you like to see the summary of your journey?\n"
        + "Y - yes\n"
        + "N - no");
        test = document.querySelector("html");
        console.log(test);
        if(response.toLowerCase() === "y" || response.toLowerCase() === "yes"){
           
            let html = document.querySelector("html");
            let body = document.createElement("body");
            let div = document.createElement("div");
            let p = document.createElement("p");
            let h2 = document.createElement("h2");
            let button = document.createElement("button");
            let string = "";

            html.app
            div.className = "journey-summary";
            h2.innerHTML = "Space Journey";
            div.appendChild(h2);
            for ( let i = 0; i < responses.length; i++){
                string = string.concat((i+1) + ". " + responses[i] + "<br>");
            }
            string = string.concat("THE END");
            p.innerHTML = string;
            div.appendChild(p);
            
            button.type = "button";
            button.name = "reset";
            button.innerHTML = "Play Again!";
            button.addEventListener("click", replay);
            div.appendChild(button);
            body.appendChild(div);
            html.appendChild(body);
        } 
}

function replay () {
    for( let i = responses.length; i > 1; i--){
        console.log(i)
        responses.pop();
        console.log(responses);
    }
    console.log(responses);
    location.reload();
}

intro();
/*
    Chat GPT text/story improvements - https://chat.openai.com/share/c04f11bc-2410-4984-aa47-44fea593e958
    JavaScript MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript
    HTML MDN - https://developer.mozilla.org/en-US/docs/Web/HTML
    Reload page with JavaScript- https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
    onclick Event - https://www.w3schools.com/jsref/event_onclick.asp
*/