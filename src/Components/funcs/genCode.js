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
    document.getElementById("genSnippets").innerHTML = "";
    let node = document.createElement("p");
    let textnode = document.createTextNode(`if ${selectedOption} == '${optionValue}' then \n\n
    Your code goes here\n\n
    end`);
    node.appendChild(textnode);
    document.getElementById("genSnippets").appendChild(node);
    textnode = document.createTextNode(`<b>Your Code Goes Here</b>`);
    document.getElementById("genSnippets").appendChild(node);
    textnode = document.createTextNode(`<b>Your Code Goes Here</b>`);

}