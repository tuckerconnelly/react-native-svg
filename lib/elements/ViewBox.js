Object.defineProperty(exports,"__esModule",{value:true});exports.alignEnum=exports.meetOrSliceTypes=undefined;var _jsxFileName='src/elements/ViewBox.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createReactNativeComponentClass=require('react/lib/createReactNativeComponentClass');var _createReactNativeComponentClass2=_interopRequireDefault(_createReactNativeComponentClass);
var _attributes=require('../lib/attributes');
var _G=require('./G');var _G2=_interopRequireDefault(_G);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var meetOrSliceTypes={
meet:0,
slice:1,
none:2};


var alignEnum=_lodash2.default.reduce([
'xMinYMin','xMidYMin','xMaxYMin',
'xMinYMid','xMidYMid','xMaxYMid',
'xMinYMax','xMidYMax','xMaxYMax',
'none'],
function(prev,name){
prev[name]=name;
return prev;},
{});

var numberRegExp=/^\d*\.?\d*%?$/;
var spacesRegExp=/\s+/;var 

ViewBox=function(_Component){_inherits(ViewBox,_Component);function ViewBox(){_classCallCheck(this,ViewBox);return _possibleConstructorReturn(this,Object.getPrototypeOf(ViewBox).apply(this,arguments));}_createClass(ViewBox,[{key:'render',value:function render()











{var _props=
this.props;var viewBox=_props.viewBox;var preserveAspectRatio=_props.preserveAspectRatio;var name=_props.name;

var params=viewBox.trim().split(spacesRegExp);

if(params.length!==4||!_lodash2.default.some(params,function(param){return param&&numberRegExp.test(param);})){
console.warn('`viewBox` expected a string like `minX minY width height`, but got:'+viewBox);
return _react2.default.createElement(_G2.default,{__source:{fileName:_jsxFileName,lineNumber:45}},
this.props.children);}



var modes=preserveAspectRatio.trim().split(spacesRegExp);

var meetOrSlice=meetOrSliceTypes[modes[1]]||0;
var align=alignEnum[modes[0]]||'xMidYMid';

return _react2.default.createElement(RNSVGViewBox,{
name:name,
minX:params[0],
minY:params[1],
vbWidth:params[2],
vbHeight:params[3],
align:align,
meetOrSlice:meetOrSlice,__source:{fileName:_jsxFileName,lineNumber:55}},

this.props.children);}}]);return ViewBox;}(_react.Component);ViewBox.displayName='ViewBox';ViewBox.propTypes={viewBox:_react.PropTypes.string.isRequired,preserveAspectRatio:_react.PropTypes.string};ViewBox.defaultProps={preserveAspectRatio:'xMidYMid meet'};




var RNSVGViewBox=(0,_createReactNativeComponentClass2.default)({
validAttributes:_attributes.ViewBoxAttributes,
uiViewClassName:'RNSVGViewBox'});exports.default=



ViewBox;exports.


meetOrSliceTypes=meetOrSliceTypes;exports.
alignEnum=alignEnum;