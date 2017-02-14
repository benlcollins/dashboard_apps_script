function websiteStatus24() { 
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var settingsSheet = ss.getSheetByName("settings");
  var statusSheet = ss.getSheetByName("website_status");
  
  // get url to check status
  var url = settingsSheet.getRange(6,2).getValue();
  Logger.log(url);
  
  var params = {
    'muteHttpExceptions': true
  };
  
  var code, response;
  var statusArray = [];
  
  // new timestamp
  var date = new Date();
  
  // add to status Array
  statusArray.push(date);
  
  try {
    response = UrlFetchApp.fetch(url,params);
  }
  catch(e) {
    statusArray.push("Error fetching url");
    statusArray.push(e.message);
  }
  
  if (response) {
    var code = response.getResponseCode();
  
    if (!(code == 200)) {
      statusArray.push("Website down");
    }
    else {
      statusArray.push("Up");
    }
    statusArray.push(code);
  }
  
  Logger.log(statusArray);
  
  // clear oldest row of data
  statusSheet.getRange(4,1,1,3).clearContent();
  
  // move up remaining data - 23 hours
  var values23 = statusSheet.getRange(5,1,23,3).getValues();
  statusSheet.getRange(4,1,23,3).setValues(values23);
  
  // add new data to bottom of range
  statusSheet.getRange(27,1,1,3).setValues([statusArray]);

}
