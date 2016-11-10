Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');
var _extractProps=require('../lib/extract/extractProps');var _extractProps2=_interopRequireDefault(_extractProps);
var _SvgTouchableMixin=require('../lib/SvgTouchableMixin');var _SvgTouchableMixin2=_interopRequireDefault(_SvgTouchableMixin);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var 

Shape=function(_Component){_inherits(Shape,_Component);
function Shape(){_classCallCheck(this,Shape);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Shape).apply(this,
arguments));_this.










extractProps=function(props,options){
var extractedProps=(0,_extractProps2.default)(props,options);
if(extractedProps.touchable&&!extractedProps.disabled){
_lodash2.default.assign(extractedProps,{
onStartShouldSetResponder:_this.touchableHandleStartShouldSetResponder,
onResponderTerminationRequest:_this.touchableHandleResponderTerminationRequest,
onResponderGrant:_this.touchableHandleResponderGrant,
onResponderMove:_this.touchableHandleResponderMove,
onResponderRelease:_this.touchableHandleResponderRelease,
onResponderTerminate:_this.touchableHandleResponderTerminate});}



return extractedProps;};_lodash2.default.forEach(_SvgTouchableMixin2.default,function(method,key){_this[key]=method.bind(_this);});_this.state=_this.touchableGetInitialState();return _this;}_createClass(Shape,[{key:'componentDidMount',value:function componentDidMount(){this.viewConfig=this.root.viewConfig;}}]);return Shape;}(_react.Component);exports.default=



Shape;