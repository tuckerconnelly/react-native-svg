Object.defineProperty(exports,"__esModule",{value:true});var _color=require('color');var _color2=_interopRequireDefault(_color);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function insertColorIntoArray(color,targetArray,atIndex){
var c=new _color2.default(color).rgbaArray();
targetArray[atIndex+0]=c[0]/255;
targetArray[atIndex+1]=c[1]/255;
targetArray[atIndex+2]=c[2]/255;
targetArray[atIndex+3]=c[3];}


function insertColorsIntoArray(stops,targetArray,atIndex){
var i=0;
if('length' in stops){
while(i<stops.length){
insertColorIntoArray(stops[i],targetArray,atIndex+i*4);
i++;}}else 

{
var sorted=_lodash2.default.sortBy(_lodash2.default.map(stops,function(value,key){return {key:key,value:value};}),'key');

sorted.forEach(function(_ref){var stop=_ref.value;
insertColorIntoArray(stop,targetArray,atIndex+i*4);
i++;});}


return atIndex+i*4;}


function insertColorStopsIntoArray(stops,targetArray,atIndex){
var lastIndex=insertColorsIntoArray(stops,targetArray,atIndex);
insertOffsetsIntoArray(stops,targetArray,lastIndex);}


function insertOffsetsIntoArray(stops,targetArray,atIndex){
var offsetNumber=void 0;
var i=0;
var arr=[];
if('length' in stops){
while(i<stops.length){
offsetNumber=i/(stops.length-1);
targetArray[atIndex+i]=offsetNumber;
i++;}}else 

{
_lodash2.default.forEach(stops,function(stop,offsetString){
offsetNumber=+offsetString;
arr.push(offsetNumber);
i++;});


arr.sort();
targetArray.splice.apply(targetArray,[atIndex,0].concat(arr));}

return atIndex+i;}exports.default=



insertColorStopsIntoArray;