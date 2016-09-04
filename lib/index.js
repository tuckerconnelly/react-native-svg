var ReactNativeUniversal=require('react-native-universal');
var Platform=ReactNativeUniversal.Platform;

if(Platform.OS==='web'){
module.exports=require('./index.web.js');}else 
{
module.exports=require('./index.native.js');}