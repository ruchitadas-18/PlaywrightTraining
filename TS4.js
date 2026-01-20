//Null and Undefined Types
//Primitive types that represent absence of value
var u = undefined; //can assign any value
var n = null; //can not assign any value other than null
//used in login scenarios
var login = true;
if (login) {
    n = "User is logged in";
}
console.log(typeof n);
//retuen object if it is null
/*how to generate ts config
tsc --init ---> creates tsconfig.json file
esmascript target versions ---> JS versions

Generate all the JS files from TS files
tsc ---> compiles all the TS files in the folder based on tsconfig.json settings

Same variables in different files - can not be used unless we use modules
Modules - each file is treated as a separate module

to generate all the JS files inside a folder
outDir (emit)- to specify the output folder for JS files
declaration - to generate the declaration files (.d.ts) along with JS files
*/
