Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/elements/Polyline.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Path=require('./Path');var _Path2=_interopRequireDefault(_Path);
var _props=require('../lib/props');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var 

Polyline=function(_Component){_inherits(Polyline,_Component);function Polyline(){var _Object$getPrototypeO;var _temp,_this,_ret;_classCallCheck(this,Polyline);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_Object$getPrototypeO=Object.getPrototypeOf(Polyline)).call.apply(_Object$getPrototypeO,[this].concat(args))),_this),_initialiseProps.call(_this),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Polyline,[{key:'render',value:function render()














{var _this2=this;
var points=this.props.points;
if(_lodash2.default.isArray(points)){
points=points.join(',');}


return _react2.default.createElement(_Path2.default,_extends({
ref:function ref(ele){_this2.root=ele;}},
this.props,{
d:'M'+points.trim().replace(/\s+/g,'L'),__source:{fileName:_jsxFileName,lineNumber:27}}));}}]);return Polyline;}(_react.Component);Polyline.displayName='Polyline';Polyline.propTypes=_extends({},_props.pathProps,{points:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.array]).isRequired});Polyline.defaultProps={points:''};var _initialiseProps=function _initialiseProps(){var _this3=this;this.setNativeProps=function(){var _root$getNativeElemen;(_root$getNativeElemen=_this3.root.getNativeElement()).setNativeProps.apply(_root$getNativeElemen,arguments);};};exports.default=



Polyline;