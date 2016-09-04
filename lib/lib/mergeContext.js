Object.defineProperty(exports,"__esModule",{value:true});exports.default=

function(props,context){
if(context.isInGroup){
props=_lodash2.default.defaults({},props,context,{
isInGroup:null});}



return props;};var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}