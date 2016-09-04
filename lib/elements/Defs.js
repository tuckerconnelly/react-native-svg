Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/elements/Defs.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);


var _createReactNativeComponentClass=require('react/lib/createReactNativeComponentClass');var _createReactNativeComponentClass2=_interopRequireDefault(_createReactNativeComponentClass);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var 

Defs=function(_Component){_inherits(Defs,_Component);function Defs(){_classCallCheck(this,Defs);return _possibleConstructorReturn(this,Object.getPrototypeOf(Defs).apply(this,arguments));}_createClass(Defs,[{key:'render',value:function render()


{
return _react2.default.createElement(RNSVGDefs,{__source:{fileName:_jsxFileName,lineNumber:10}},this.props.children);}}]);return Defs;}(_react.Component);Defs.displayName='Defs';



var RNSVGDefs=(0,_createReactNativeComponentClass2.default)({
validAttributes:{},
uiViewClassName:'RNSVGDefs'});exports.default=


Defs;