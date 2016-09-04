Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/elements/Symbol.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ViewBox=require('./ViewBox');var _ViewBox2=_interopRequireDefault(_ViewBox);
var _G=require('./G');var _G2=_interopRequireDefault(_G);
var _Defs=require('./Defs');var _Defs2=_interopRequireDefault(_Defs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var 

SymbolElement=function(_Component){_inherits(SymbolElement,_Component);function SymbolElement(){_classCallCheck(this,SymbolElement);return _possibleConstructorReturn(this,Object.getPrototypeOf(SymbolElement).apply(this,arguments));}_createClass(SymbolElement,[{key:'render',value:function render()






{var 
props=this.props;

var viewBox=props.viewBox;
if(props.viewbox){
viewBox=props.viewbox;
console.warn('Prop `viewbox` is deprecated. please use `viewBox` instead.');}


var content=viewBox?_react2.default.createElement(_ViewBox2.default,{
name:props.id,
viewBox:viewBox,
preserveAspectRatio:props.preserveAspectRatio,__source:{fileName:_jsxFileName,lineNumber:22}},

props.children):
_react2.default.createElement(_G2.default,{id:props.id,__source:{fileName:_jsxFileName,lineNumber:28}},
props.children);


return _react2.default.createElement(_Defs2.default,{__source:{fileName:_jsxFileName,lineNumber:32}},
content);}}]);return SymbolElement;}(_react.Component);SymbolElement.displayName='Symbol';SymbolElement.propType={id:_react.PropTypes.string.isRequired,viewBox:_react.PropTypes.string,preserveAspectRatio:_react.PropTypes.string};exports.default=




SymbolElement;