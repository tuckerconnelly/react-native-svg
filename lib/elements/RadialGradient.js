Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/elements/RadialGradient.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _props=require('../lib/props');
var _Gradient2=require('./Gradient');var _Gradient3=_interopRequireDefault(_Gradient2);
var _createReactNativeComponentClass=require('react/lib/createReactNativeComponentClass');var _createReactNativeComponentClass2=_interopRequireDefault(_createReactNativeComponentClass);
var _attributes=require('../lib/attributes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var 

RadialGradient=function(_Gradient){_inherits(RadialGradient,_Gradient);function RadialGradient(){_classCallCheck(this,RadialGradient);return _possibleConstructorReturn(this,Object.getPrototypeOf(RadialGradient).apply(this,arguments));}_createClass(RadialGradient,[{key:'render',value:function render()




















{var 
props=this.props;
return _react2.default.createElement(RNSVGRadialGradient,{
fx:props.fx.toString(),
fy:props.fy.toString(),
rx:(props.rx||props.r).toString(),
ry:(props.ry||props.r).toString(),
cx:props.cx.toString(),
cy:props.cy.toString(),
gradient:this.getGradient(),
name:props.id,__source:{fileName:_jsxFileName,lineNumber:30}});}}]);return RadialGradient;}(_Gradient3.default);RadialGradient.displayName='RadialGradient';RadialGradient.propTypes={fx:_props.numberProp.isRequired,fy:_props.numberProp.isRequired,rx:_props.numberProp,ry:_props.numberProp,cx:_props.numberProp.isRequired,cy:_props.numberProp.isRequired,r:_props.numberProp,id:_react.PropTypes.string.isRequired};RadialGradient.defaultProps={fx:'50%',fy:'50%',cx:'50%',cy:'50%',r:'50%'};





var RNSVGRadialGradient=(0,_createReactNativeComponentClass2.default)({
validAttributes:_attributes.RadialGradientAttributes,
uiViewClassName:'RNSVGRadialGradient'});exports.default=


RadialGradient;