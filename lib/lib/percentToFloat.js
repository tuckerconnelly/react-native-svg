Object.defineProperty(exports,"__esModule",{value:true});exports.default=
function(percent){
var matched=percent.match(percentReg);
if(!matched){
console.warn("`"+percent+"` is not a valid number or percentage string.");
return 0;}


return matched[2]?matched[1]/100:+matched[1];};var percentReg=/^(\-?\d+(?:\.\d+)?)(%?)$/;