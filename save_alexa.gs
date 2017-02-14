// ------------------------------------------------------------------------------------------
// Save alexa data
// set to auto save with a trigger when dashboard is finalized
// ------------------------------------------------------------------------------------------
function saveAlexaData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("alexa_rankings");
  
  // get the url, follower count and date from the first three cells
  var timestamp = sheet.getRange(14,2).getValue();
  var global_count = sheet.getRange(12,2).getValue();
  var us_count = sheet.getRange(12,3).getValue();
  
  // paste them into the bottom row of your spreadsheet
  sheet.appendRow([
    timestamp,
    global_count,
    us_count]);
};