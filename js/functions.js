let countRow = 0

document.querySelector('button').addEventListener('click',() => {
    var table = document.getElementById("numberTable");
    var row = table.insertRow(0);
    for (let i = 0; i < 7; i++) {
        var cell = row.insertCell(0);
        var generateNumber = Math.floor(Math.random() * 10);
        cell.innerHTML = generateNumber;
      }
        countRow++
    document.querySelector('#countRow').innerHTML = countRow
})

// countRow on indeksi (ja output), joka muistaa arvottujen rivien määrän
// numberTable on taulukon id
// generateNumber arpoo numeron