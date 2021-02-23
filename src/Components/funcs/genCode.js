export function addToSnippets(selectedOption, optionValue) {
    document.getElementById("genSnippets").innerHTML = "";
    let arr = [`if (${selectedOption} == '${optionValue}') then`,
    `Your Code Goes Here!`,
    `end`];
    arr.forEach(element => {
        let node = document.createElement("p");
        let textnode = document.createTextNode(element)
        node.appendChild(textnode);
        document.getElementById("genSnippets").appendChild(node);
    });
}

export function addToGearswap(selectedOption, optionValue) {
    let arr = [`if (${selectedOption} == '${optionValue}') then`,
    `Your Code Goes Here!`,
    `end`];
    arr.forEach(element => {
        let node = document.createElement("p");
        let textnode = document.createTextNode(element);
        node.appendChild(textnode);
        document.getElementById("genCode").appendChild(node);
    });
}