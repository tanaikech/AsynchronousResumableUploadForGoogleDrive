function main() {
  var html = HtmlService.createHtmlOutputFromFile("index");
  SpreadsheetApp.getUi().showSidebar(html);
}

function getAuth() {
  // DriveApp.createFile(blob) // This is used for adding the scope of "https://www.googleapis.com/auth/drive".
  return ScriptApp.getOAuthToken();
}
