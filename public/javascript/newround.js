var end = 0;
var rounds = 0
var gameMode
function createNewRound() {
    
    var gameOptions = document.getElementById("rounds")
    var game = gameOptions.value

    
    // switch(x){
    //     case 'X': return 1;
    //     case 'x': return 1;
    //     case (x !== 'x' || x !=='X'): 0;
    // }

    if (game==="--"){ 
        alert("pick a game option")
    } else {
        switch(game) {
            case '3-150': gameMode=[3,5]; break;
            case '3-300': gameMode=[3,10]; break;
            case '5-150': gameMode=[5,5]; break;
            case '5-300': gameMode=[5,10]; break;
            // case '5-150': return gameMode=[3,10]; 
            // case '3-150': return gameMode=[5,5]; 
            // case '5-150': return gameMode=[5,10];
            //break;
            
        }
        end = gameMode[0]
        rounds = gameMode[1]
    }

    var tblExists = document.getElementsByTagName('table')
    $("table").remove()

    // get the reference for the body
    var body = document.getElementsByClassName("score-table")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
   

    for (var i=0; i<end; i++){
        var tblHeader = document.createElement("th")
        var tblHeaderText = document.createTextNode('Arrow '+ (i+1))
        tblHeader.appendChild(tblHeaderText)
        tbl.appendChild(tblHeader)
    }
    
  
    // creating all cells
    for (var i = 0; i < rounds; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < end; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createElement("input");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
}