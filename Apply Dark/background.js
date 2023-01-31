var darkCSS = `
  body {
    background-color #333 !important;
    color #fff !important;
  }
`;

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS({
    code darkCSS
  });
});
