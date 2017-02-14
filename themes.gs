/* ------------------------------------------------------------------------------------------
 *
 * Change theme colors
 *
 * ----------------------------------------------------------------------------------------*/

// dark background
function darkTheme() {
  var color = '#000000';
  changeTheme(color);
}

// light background
function lightTheme() {
  var color = '#ffffff';
  changeTheme(color);
}

// change colors
function changeTheme(color) {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Dashboard');
  
  //var cells = sheet.getRange('A1:U58');
  var cells = sheet.getRange(1,1,sheet.getMaxRows(),sheet.getMaxColumns());
  Logger.log(cells);
  
  var backgrounds = cells.getBackgrounds();
  
  backgrounds.forEach(function(row) {
    row.forEach(function(cell, i, array) {
      if (cell === "#ffffff") {
        array[i] = color;
      }
      if (cell === "#000000") {
        array[i] = color;
      }
    });
  });
  
  cells.setBackgrounds(backgrounds);
  
}