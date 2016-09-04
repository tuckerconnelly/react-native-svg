Object.defineProperty(exports,"__esModule",{value:true});var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var _class=

function _class(xx,yx,xy,yy,x,y){_classCallCheck(this,_class);_initialiseProps.call(this);
if(xx&&typeof xx==='object'){
yx=xx.yx;yy=xx.yy;y=xx.y;
xy=xx.xy;x=xx.x;xx=xx.xx;}

this.xx=_lodash2.default.isNil(xx)?1:xx;
this.yx=yx||0;
this.xy=xy||0;
this.yy=_lodash2.default.isNil(yy)?1:yy;
this.x=(_lodash2.default.isNil(x)?this.x:x)||0;
this.y=(_lodash2.default.isNil(y)?this.y:y)||0;
return this;};var _initialiseProps=function _initialiseProps(){var _this=this;this.


xx=1;this.
yx=0;this.
x=0;this.
xy=0;this.
yy=1;this.
y=0;this.

transform=function(xx,yx,xy,yy,x,y){
if(xx&&typeof xx==='object'){
yx=xx.yx;yy=xx.yy;y=xx.y;
xy=xx.xy;x=xx.x;xx=xx.xx;}


if(!x){
x=0;}


if(!y){
y=0;}

return _this.transformTo(
_this.xx*xx+_this.xy*yx,
_this.yx*xx+_this.yy*yx,
_this.xx*xy+_this.xy*yy,
_this.yx*xy+_this.yy*yy,
_this.xx*x+_this.xy*y+_this.x,
_this.yx*x+_this.yy*y+_this.y);};this.



transformTo=this.constructor;this.

translate=function(x,y){
return _this.transform(1,0,0,1,x,y);};this.


move=function(x,y){
_this.x+=x||0;
_this.y+=y||0;
return _this;};this.


scale=function(x,y){
return _this.transform(x,0,0,_lodash2.default.isNil(y)?x:y,0,0);};this.


rotate=function(deg,x,y){
if(_lodash2.default.isNil(x)||_lodash2.default.isNil(y)){
x=(_this.left||0)+(_this.width||0)/2;
y=(_this.top||0)+(_this.height||0)/2;}


var rad=deg*Math.PI/180,sin=Math.sin(rad),cos=Math.cos(rad);

_this.transform(1,0,0,1,x,y);

return _this.transformTo(
cos*_this.xx-sin*_this.yx,
sin*_this.xx+cos*_this.yx,
cos*_this.xy-sin*_this.yy,
sin*_this.xy+cos*_this.yy,
_this.x,
_this.y).
transform(1,0,0,1,-x,-y);};this.


moveTo=function(x,y){
return _this.transformTo(_this.xx,_this.yx,_this.xy,_this.yy,x,y);};this.


rotateTo=function(deg,x,y){
var flip=_this.yx/_this.xx>_this.yy/_this.xy?-1:1;
if(_this.xx<0?_this.xy>=0:_this.xy<0){
flip=-flip;}

return _this.rotate(deg-Math.atan2(flip*_this.yx,flip*_this.xx)*180/Math.PI,x,y);};this.


scaleTo=function(x,y){
// Normalize
var h=Math.sqrt(_this.xx*_this.xx+_this.yx*_this.yx);
_this.xx/=h;
_this.yx/=h;

h=Math.sqrt(_this.yy*_this.yy+_this.xy*_this.xy);
_this.yy/=h;
_this.xy/=h;

return _this.scale(x,y);};this.


resizeTo=function(width,height){
var w=_this.width,h=_this.height;
if(!w||!h){
return _this;}

return _this.scaleTo(width/w,height/h);};this.


inversePoint=function(x,y){
var a=_this.xx,b=_this.yx,
c=_this.xy,d=_this.yy,
e=_this.x,f=_this.y;
var det=b*c-a*d;
if(det===0){
return null;}

return {
x:(d*(e-x)+c*(y-f))/det,
y:(a*(f-y)+b*(x-e))/det};};this.



point=function(x,y){
return {
x:_this.xx*x+_this.xy*y+_this.x,
y:_this.yx*x+_this.yy*y+_this.y};};};exports.default=_class;