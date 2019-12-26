function main() {
  var html = HtmlService.createHtmlOutputFromFile("index");
  SpreadsheetApp.getUi().showSidebar(html);
}

function getAuth() {
  // DriveApp.createFile(blob) // This is used for adding the scope of "https://www.googleapis.com/auth/drive".
  return ScriptApp.getOAuthToken();
}

// If you want to put the uploaded file information to the active Spreadsheet,
// please use the following function.
function putFileInf(obj) {
  var lock = LockService.getDocumentLock();
  if (lock.tryLock(5000)) {
    SpreadsheetApp.getActiveSpreadsheet()
      .getSheets()[0]
      .appendRow([obj.name, obj.mimeType, obj.id]);
    lock.releaseLock();
  }
}
