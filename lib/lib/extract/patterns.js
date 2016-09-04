Object.defineProperty(exports,"__esModule",{value:true});exports.remove=exports.set=undefined;exports.default=
























function(patternSting,opacity,svgId){
if(isGradient(patternSting)){
return patternSting;}


// 尝试匹配 "url(#pattern)"
var matched=patternSting.match(_patternReg2.default);

if(matched){
var patternName=matched[1]+':'+svgId;
var pattern=patterns[patternName];

if(pattern){
return pattern(opacity);}

return null;}


return (0,_rgba2.default)(patternSting,opacity).rgbaString();};var _rgba=require('../rgba');var _rgba2=_interopRequireDefault(_rgba);var _patternReg=require('./patternReg');var _patternReg2=_interopRequireDefault(_patternReg);var _LinearGradient=require('../../elements/LinearGradient');var _RadialGradient=require('../../elements/RadialGradient');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var patterns={};function isGradient(obj){return obj instanceof _LinearGradient.LinearGradientGenerator||obj instanceof _RadialGradient.RadialGradientGenerator;}function set(id,pattern){patterns[id]=pattern;}function remove(id){delete patterns[id];}exports.set=set;exports.remove=remove;