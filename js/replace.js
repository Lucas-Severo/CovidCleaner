const elementsInsideBody = [...document.body.getElementsByTagName('*')];

function findAndReplace() {
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
                 "covid-19", "Covid-19", "covid19", "covid 19", "covid"]

    let value = node.nodeValue;

    for(word of words) {
        let re = new RegExp(word, 'gi');
        value = value.replace(re, "💉");
    }
    node.nodeValue = value;
}

document.onload = findAndReplace();
