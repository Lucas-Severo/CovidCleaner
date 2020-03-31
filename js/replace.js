

function findAndReplace() {
    const elementsInsideBody = [...document.body.getElementsByTagName('*')];
    for(element of elementsInsideBody) {
        for(child of element.childNodes) {
            if(child.nodeType === 3) {
                replaceText(child);
            }
        }
    }
}

function replaceText(node) {
    const words = ["coronavírus", "coronavirus", "corona vírus", "corona virus",
                 "covid-19", "covid-19", "covid19", "covid 19", "covid"]

    let value = node.nodeValue;

    for(word of words) {
        let re = new RegExp(word, 'gi');
        value = value.replace(re, "💉");
    }
    if (value !== node.nodeValue)
        node.nodeValue = value;
}

window.onchange = findAndReplace();

setInterval(() => findAndReplace(), 1000);