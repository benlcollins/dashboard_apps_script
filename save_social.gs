// ------------------------------------------------------------------------------------------
// Save social media data
// set to auto save with a trigger
// ------------------------------------------------------------------------------------------
function saveSocialData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("social_media");
  
  // get the url, follower count and date from the first three cells
  var timestamp = sheet.getRange(14,2).getValue();
  var facebook_count = sheet.getRange(11,2).getValue();
  var twitter_count = sheet.getRange(11,3).getValue();
  var youtube_count = sheet.getRange(11,4).getValue();
  var g_plus_count = sheet.getRange(11,5).getValue();
  var pinterest_count = sheet.getRange(11,6).getValue();
  var instagram_count = sheet.getRange(11,7).getValue();
  
  // paste them into the bottom row of your spreadsheet
  sheet.appendRow([
    timestamp,
    facebook_count,
    twitter_count,
    youtube_count,
    g_plus_count,
    pinterest_count,
    instagram_count]);
};