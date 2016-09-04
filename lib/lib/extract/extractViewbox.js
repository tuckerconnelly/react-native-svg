Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(_ref){var viewbox=_ref.viewbox;var width=_ref.width;var height=_ref.height;var preserveAspectRatio=_ref.preserveAspectRatio;var dx=_ref.x;var dy=_ref.y;var dScale=_ref.dScale;var dScaleX=_ref.dScaleX;var dScaleY=_ref.dScaleY;
if(!viewbox||!width||!height){
return false;}


if(typeof viewbox==='string'){
var parts=viewbox.trim().split(/\s+/);
var vw=+parts[2];
var vh=+parts[3];

// width or height can`t be negative
if(vw<0||vh<0||parts.length!==4){
return false;}


// width or height equals zero disable render
if(!vw||!vh){
return {
x:0,
y:0,
scaleX:0,
scaleY:0};}



var vx=+parts[0]||0;
var vy=+parts[1]||0;
var preserve=preserveAspectRatio!=='none';
var scaleX=1;
var scaleY=1;
var x=0;
var y=0;
var sx=width/vw;
var sy=height/vh;
if(preserve){
scaleX=scaleY=Math.min(sx,sy);
x=width/2-Math.min(vw,vh)*scaleX/2-vx*scaleX;
y=0-vy*scaleX;

if(sx<sy){var _ref2=
[y,x];x=_ref2[0];y=_ref2[1];}}else 

{
scaleX=sx;
scaleY=sy;
x=-vx*sx;
y=-vy*sy;}


//if (shouldTransform) {
x+=+dx||0;
y+=+dy||0;

if(dScale){
scaleX*=+dScale||1;
scaleY*=+dScale||1;}else 
{
scaleX*=+dScaleX||1;
scaleY*=+dScaleY||1;}

//}

return {
x:x,
y:y,
scaleX:scaleX,
scaleY:scaleY};}


return false;};