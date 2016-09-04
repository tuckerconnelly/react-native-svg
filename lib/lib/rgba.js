Object.defineProperty(exports,"__esModule",{value:true});exports.default=

function(color,opacity){
if(noneFill.indexOf(color)!==-1||!color){
return (0,_color2.default)('#000');}else 
{
var c=(0,_color2.default)(color);

if(!isNaN(opacity)){
c=c.alpha(opacity);}

return c;}};var _color=require('color');var _color2=_interopRequireDefault(_color);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var noneFill=['transparent','none'];