/* ------------------------------------------------------------------------------------------
 *
 * Menu in Google Sheet
 *
 * ----------------------------------------------------------------------------------------*/

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Dashboard Menu')
      .addItem('Email Dashboard','emailDashboard')
      .addSubMenu(SpreadsheetApp.getUi().createMenu('Dashboard Theme')
        .addItem('Dark theme','darkTheme')
        .addItem('Light theme','lightTheme'))
      .addToUi();
};