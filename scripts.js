function loadTable(fileInputId, tableId) {
  var input = document.getElementById(fileInputId);
  if (!input.files || input.files.length === 0) return;
  var file = input.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var text = e.target.result.trim();
    var rows = text.split(/\r?\n/);
    var table = document.getElementById(tableId);
    table.innerHTML = '';
    rows.forEach(function(row) {
      if (row === '') return;
      var cols = row.split(',');
      var tr = document.createElement('tr');
      cols.forEach(function(col) {
        var td = document.createElement('td');
        td.textContent = col.trim();
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  };
  reader.readAsText(file);
}
