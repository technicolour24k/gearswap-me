import React from 'react';
import {addToSnippets, addToGearswap} from '../funcs/genCode'

let selectedOption = '';
let optionValue = '';

export function Home() {
  return (
      <div id="mainBody">
        <div id="genOptions" class="indent">
          <select id="selectGenOptions">
            <option value="spell.name">Spell Name</option>
            <option value="spell.skill">Spell Skill</option>
          </select>
          &nbsp;is <input id="genOptionValue" type="text" />
          <button onClick={() => {
            getVals();
            addToSnippets(selectedOption, optionValue);}}>Show Snippet</button>
          <button onClick={() => {
            getVals();
            addToGearswap(selectedOption, optionValue);}}>Add To Gearswap</button>
        </div>

        <b class="heading">Code Snippet:</b>
        <div id="genSnippets" class = "indent">

        </div>

        <b class="heading">Gearswap Collective:</b>
        <div id="genCode" class = "indent">

        </div>
                
      </div>
  );
}

function getVals() {
  selectedOption = document.getElementById("selectGenOptions").value
  optionValue = document.getElementById("genOptionValue").value
}