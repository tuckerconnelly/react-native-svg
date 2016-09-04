Object.defineProperty(exports,"__esModule",{value:true});exports.default=
function(stops,opacity){
if(isNaN(opacity)){
opacity=1;}


return _lodash2.default.reduce(stops,function(ret,color,key){
ret[key]=color.alpha(color.alpha()*opacity).rgbaString();
return ret;},
{});};var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}