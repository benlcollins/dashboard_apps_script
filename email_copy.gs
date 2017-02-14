/* ------------------------------------------------------------------------------------------
 *
 * Convert dashboard to PDF and email a copy to user
 *
 * ----------------------------------------------------------------------------------------*/

function emailDashboard() {
  
  // get sheet id
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var id = ss.getId();
  
  // setup sheets
  var dashboardSheet = ss.getSheetByName('Dashboard');
  var settingsSheet = ss.getSheetByName('settings');
  
  var dashboardURL = ss.getUrl() + "?usp=sharing";
  
  // Send the PDF of the spreadsheet to this email address
  // get this from the settings sheet
  var email = settingsSheet.getRange(9,2).getValue();
  var cc_email = settingsSheet.getRange(10,2).getValue();
  var bcc_email = settingsSheet.getRange(11,2).getValue();
 
  // Subject of email message
  var subject = "Dashboard PDF generated from " + ss.getName() + " - " + new Date().toLocaleString(); 
 
  // Email Body can  be HTML too with your logo image
  var body = "A PDF copy of your dashboard is attached.<br><br>" +
             "To access the live version in Google Sheets, " +
             "<a href='" + dashboardURL + "'>click this link</a>.";
  
  // Base URL
  var url = "https://docs.google.com/spreadsheets/d/" + id + "/export?";
  
  var url_ext = 'exportFormat=pdf&format=pdf&size=letter&portrait=true&fitw=true&gid=';
  
  var token = ScriptApp.getOAuthToken();
  var sheetID = dashboardSheet.getSheetId();
  var sheetName = dashboardSheet.getName();
  
  var options = 
      {
        headers: {
          'Authorization': 'Bearer ' +  token
        }
        //,"muteHttpExceptions":true
      }
  
  var driveCall = DriveApp.getRootFolder(); // helps initialize first time using the script
  
  // create the pdf
  var response = UrlFetchApp.fetch(url + url_ext + sheetID, options);
  
  // send the email with the PDF attachment
  GmailApp.sendEmail(email, subject, body, {
    cc: cc_email,
    bcc: bcc_email,
    htmlBody: body,
    attachments:[response]     
  });

}