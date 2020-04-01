function update() {
    chrome.storage.local.get(['found'], (result) => {
        document.querySelector("#result").innerHTML = result.found || "0";
    });
}

setInterval(() => update(), 1000);