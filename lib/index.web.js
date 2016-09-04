var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=require('react');
var Component=React.Component;

var ReactNativeUniversal=require('react-native-universal');
var Platform=ReactNativeUniversal.Platform;
var CoreComponent=ReactNativeUniversal.CoreComponent;

function Svg(){this.constructor.call(arguments);}
Svg.prototype=_extends({},Component.prototype,{
render:function render(){
return React.createElement(
CoreComponent,
_extends({},this.props,{component:'svg'}));}});



module.exports=_extends(Svg,{
Svg:Svg,
Circle:'circle',
Ellipse:'ellipse',
G:'g',
Text:'text',
Path:'path',
Polygon:'polygon',
Polyline:'polyline',
Line:'line',
Rect:'rect',
Use:'use',
Image:'image',
Symbol:'symbol',
Defs:'defs',
LinearGradient:'linearGradient',
RadialGradient:'radialGradient',
Stop:'stop',
ClipPath:'clipPath'});