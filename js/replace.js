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

async function replaceText(node) {
    const words = ["coronavírus", "coronavirus", "corona virus", "corona vírus", 
                 "covid-19", "covid19", "covid 19"]

    let value = node.nodeValue;

    for(word of words) {
        let re = new RegExp(word, 'gi');
        value = await value.replace(re, "💉");
    }
    node.nodeValue = value;
}

window.onload = findAndReplace();