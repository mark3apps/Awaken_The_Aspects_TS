import { Timer, Unit } from "w3ts/index";
import { Players } from "w3ts/globals/index";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks/index";
import { ABL } from "abilities/upgradeabilities";


const BUILD_DATE = compiletime(() => new Date().toUTCString());
const TS_VERSION = compiletime(() => require("typescript").version);
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version);

function tsMain() {
  print(`Build: ${BUILD_DATE}`);
  print(`Typescript: v${TS_VERSION}`);
  print(`Transpiler: v${TSTL_VERSION}`);
  print(" ");
  print("Welcome to TypeScript!");

  new Timer().start(1.00, true, () => {
    print(`Testing this ${ABL.shift.name}`);

  });
  

  

}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);