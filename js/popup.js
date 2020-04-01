function update() {
    chrome.storage.local.get(['found'], (result) => {
        document.querySelector("#result").innerHTML = result.found;
    });
}

window.onload = update();

setInterval(() => update(), 1000);