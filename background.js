browser.runtime.onMessage.addListener(msg => {
  browser.tabs.query({active: true, currentWindow: true})
  .then(tabs => browser.pageAction.show(tabs[0].id));
});

browser.pageAction.onClicked.addListener(() => {
  browser.tabs.query({active: true, currentWindow: true})
  .then(tabs => {
    browser.pageAction.hide(tabs[0].id);
    browser.tabs.sendMessage(tabs[0].id, "removeSlides");
  });
});

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.url) {
    return;
  }
  browser.tabs.executeScript({
    file: "antyslajd.js"
  });
});

browser.tabs.executeScript({
  file: "antyslajd.js"
});
