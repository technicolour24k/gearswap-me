export function addToSnippets(selectedOption, optionValue, equipSet) {
    document.getElementById("genSnippets").innerHTML = "";
    let arr = [`if (${selectedOption} == '${optionValue}') then`,
    `equip(${equipSet})`,
    `end`];
    arr.forEach(element => {
        let node = document.createElement("p");
        let textnode = document.createTextNode(element)
        node.appendChild(textnode);
        document.getElementById("genSnippets").appendChild(node);
    });
}

export function addToGearswapCollective(selectedOption, optionValue, equipSet) {
    let arr = [`if (${selectedOption} == '${optionValue}') then`,
    `equip(${equipSet})`,
    `end`];
    arr.forEach(element => {
        let node = document.createElement("p");
        let textnode = document.createTextNode(element);
        node.appendChild(textnode);
        document.getElementById("genCode").appendChild(node);
    });
}

export function addToGearswapFile(section, selectedOption, optionValue, equipSet) {
    let arr = [`if (${selectedOption} == '${optionValue}') then`,
    `equip(${equipSet})`,
    `end`];
    arr.forEach(element => {
        let node = document.createElement("p");
        let textnode = document.createTextNode(element);
        node.appendChild(textnode);
        document.getElementById(`genFile${section}`).appendChild(node);
    });
}

export function addPredefinedValsToFile(section, selectedOption, optionValue, equipSet) {
    switch (selectedOption){
        case "ifSetExists":
            equipSet = optionValue;
            break;
        case "ifMagicFC":
            equipSet = "sets.precast.FastCast";
            break;
        case "ifIdle":
            equipSet = "sets.aftercast.Idle";
            break;
        default:
            equipSet = selectedOption;
            break;
}
    let arr = [`if (${optionValue}) then`,
    `equip(${equipSet})`,
    `end`];
    arr.forEach(element => {
        let node = document.createElement("p");
        let textnode = document.createTextNode(element);
        node.appendChild(textnode);
        document.getElementById(`genFile${section}`).appendChild(node);
    });
}