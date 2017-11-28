browser.runtime.onMessage.addListener((msg, sender) => {
  browser.pageAction.show(sender.tab.id);
});

browser.pageAction.onClicked.addListener(tab => {
  browser.pageAction.hide(tab.id);
  browser.tabs.sendMessage(tab.id, "removeSlides");
});

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.url) {
    return;
  }
  browser.tabs.executeScript({
    file: "antyslajd.js"
  });
});
