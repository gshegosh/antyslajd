function saveOptions() {
  browser.storage.local.set({
    autorun: document.getElementById('autorun').checked
  });
}

function restoreOptions() {
  browser.storage.local.get('autorun').then(result => document.getElementById('autorun').checked = result.autorun);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('autorun').addEventListener('change', saveOptions);
