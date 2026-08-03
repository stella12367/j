document.getElementById("button").onclick = function() { 
    // Selecteer het output element uit de HTML
    let outputDiv = document.getElementById("output");
    
    // Bouw de tekst op met <br> voor nieuwe regels
    let tekst = "hello from javascript<br>";
    tekst += "yep!<br>";
    
    let score = 50;
    if (score >= 50) {
        tekst += "yep your javascript works<br>";
    }
    
    let naam = "Stella";
    tekst += "je naam is " + naam + "<br>";
    let age = 20;
    tekst += "je leeftijd is " +age+  "<br>";
     let favkleur = "groen";
     tekst +="je favorite kleur is "+favkleur+"<br>";
    let game = "minecraft"
    tekst +="mijn favorite spel is "+game+"<br>";
    let food ="spagetti met gehakt en courgetten"
    tekst +=""
    tekst +="<br>";
    let prijsmain = 1000;
    let prijsgekocht = 16.55;
    let prijsoplossing = prijsmain - prijsgekocht;
    tekst += "in mijn bankrekening €" + prijsmain + "<br>";
    tekst += "en dit is hoe veel ik over heb €" + prijsoplossing + "<br>";

    // Toon de complete tekst op het scherm
    outputDiv.innerHTML = tekst;
};