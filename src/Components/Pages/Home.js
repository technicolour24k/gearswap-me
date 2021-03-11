import React from 'react';
import {addToSnippets, addToGearswapCollective, addToGearswapFile, addPredefinedValsToFile} from '../funcs/genCode'
import {RadioButton} from '../pageObjects'

let selectedOption = '';
let optionValue = '';
let equipSet = '';

export function Home() {
  return (
    <div id="mainBody">
        <div id="genOptions" className="indent">When &nbsp;
          <select id="selectGenOptions">
            <option value="spell.name">Spell Name</option>
            <option value="spell.prefix">Spell Prefix</option>
            <option value="spell.targets">Spell Targets</option>
            <option value="spell.type">Action Type</option>
            <option value="spell.skill">Spell Skill</option>
            <option value="spell.mp_cost">Spell MP Cost</option>
            <option value="spell.tp_cost">Action TP Cost</option>
            <option value="spell.element">Spell Element</option>
            <option value="spell.range">Max Spell Range</option>
            <option value="spell.recast">Base Spell Recast</option>
            <option value="spell.recast_id">Spell Recast ID</option>
            <option value="spell.cast_time">Base Spell Cast Time</option>
            <option value="spell.wsA">Primary WS Property</option>
            <option value="spell.wsB">Secondary WS Property</option>
            <option value="spell.wsC">Tertiary (third) WS Property</option>
            <option value="spell.interrupted">Spell interrupted? (aftercast only)</option>
          </select>
          &nbsp;is <input id="genOptionValue" type="text" />
          &nbsp;equip set: <input id="genSetEquipValue" type="text" />
          <button onClick={() => {
            getVals();
            addToSnippets(selectedOption, optionValue, equipSet);}}>Show Snippet</button>
          <button onClick={() => {
            getVals();
            addToGearswapCollective(selectedOption, optionValue,equipSet);}}>Add To Gearswap Collective</button>
          </div>
          <div id="gearswapFunctions">
            <button onClick={() => {
              getVals();
              addToGearswapFile("Precast", selectedOption, optionValue,equipSet);}}>Add To Gearswap File as Precast function</button>

            <button onClick={() => {
              getVals();
              addToGearswapFile("Midcast", selectedOption, optionValue,equipSet);}}>Add To Gearswap File as Midcast function</button>

            <button onClick={() => {
              getVals();
              addToGearswapFile("Aftercast", selectedOption, optionValue,equipSet);}}>Add To Gearswap File as Aftercast function</button>
            </div>
            <div id="predefinedOptions">
              <p className="heading"><strong>Useful predefined options:</strong></p>
              <div id="radioOptions" className="indent">
              <RadioButton label="If spell/action has a set" id="ifSetExists" name="usefulSnippets" value="sets[spell.name]" />
              <RadioButton label="Equip Fast Cast" id="ifMagicFC" name="usefulSnippets" value="spell.action_type=='Magic'" />
              <RadioButton label="Equip Idle Gear (Regen/Refresh/DT-)" id="ifIdle" name="usefulSnippets" value="player.status == 'Idle'" />
              </div>
              <button onClick={() => {
              getPredefinedVals();
              addPredefinedValsToFile("Precast", selectedOption, optionValue,equipSet);}}>Add To Gearswap File as Precast function</button>
              <button onClick={() => {
              getPredefinedVals();
              addPredefinedValsToFile("Midcast", selectedOption, optionValue,equipSet);}}>Add To Gearswap File as Midcast function</button>
              <button onClick={() => {
              getPredefinedVals();
              addPredefinedValsToFile("Aftercast", selectedOption, optionValue,equipSet);}}>Add To Gearswap File as Aftercast function</button>
            </div>
        <b className="heading">Code Snippet:</b>
        <div id="genSnippets" class = "indent">

        </div>

        <b className="heading">Gearswap Collective:</b>
        <div id="genCode" class = "indent">

        </div>
                
        <b className="heading">Constructed Gearswap File:</b>
        <div id="genFile" class = "indent">
          <div className="newSection">
            function precast(spell)
              <div id="genFilePrecast">

              </div>
            end
          </div>

        <div className="newSection">
        function midcast(spell)
          <div id="genFileMidcast">

          </div>
        end
        </div>

        <div className="newSection">
          function aftercast(spell)
          <div id="genFileAftercast">

          </div>
          end
        </div>
      </div>
      </div>
  );
}

function getVals() {
  selectedOption = document.getElementById("selectGenOptions").value
  optionValue = document.getElementById("genOptionValue").value
  equipSet = document.getElementById("genSetEquipValue").value
}

function getPredefinedVals() {
  selectedOption = document.querySelector('input[name="usefulSnippets"]:checked').id;
  optionValue = document.querySelector('input[name="usefulSnippets"]:checked').value;
}