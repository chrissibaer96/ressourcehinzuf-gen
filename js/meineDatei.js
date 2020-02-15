/*Funktionen zum Aufrufen der Eingabeinhalte von Ressource, Startdatum und Enddatum*/
document.getElementById("meineRessource").value = "Ressource";
document.getElementById("meinDatum1").value = "Start";
document.getElementById("meinDatum2").value="Ende";
/*Funktion. mit der sich der Button "meinButton" den Inhalt aus den Eingabefeldern holen kann */
document.getElementById("meinButton").addEventListener('click', holeInhalt);
function holeInhalt() {
/*Variablendefinition von den Eingabefeldern "meineRessource", "meinDatum1" und "meinDatum2"*/
let inhalt = document.getElementById("meineRessource").value;
let inhalt2 = document.getElementById("meinDatum1").value;
let inhalt3 = document.getElementById("meinDatum2").value;
/*Ausgabe der Eingabeinhalte Ressource und der Eingabedaten mittels alert nach Drücken des Buttons */
alert("Ihre Ressource "+  inhalt +" wurde erfolgreich vom " +inhalt2+ " bis zum " + inhalt3 + " gespeichert!");
}