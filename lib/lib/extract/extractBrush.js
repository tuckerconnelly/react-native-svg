Object.defineProperty(exports,"__esModule",{value:true});exports.default=



function(colorOrBrush){
if(colorOrBrush==='none'||_lodash2.default.isNil(colorOrBrush)){
return null;}


try{
var matched=colorOrBrush.match(_patternReg2.default);
// brush
if(matched){
return [1,matched[1]];
//todo:
}else { // solid color
var c=new _color2.default(colorOrBrush).rgbaArray();
return [0,c[0]/255,c[1]/255,c[2]/255,c[3]];}}

catch(err){
console.warn('"'+colorOrBrush+'" is not a valid color or brush');
return null;}};var _color=require('color');var _color2=_interopRequireDefault(_color);var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);var _patternReg=require('./patternReg');var _patternReg2=_interopRequireDefault(_patternReg);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}