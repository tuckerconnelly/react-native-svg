var _reactNativeUniversal=require('react-native-universal');




if(_reactNativeUniversal.Platform.OS==='ios')module.exports=require('./createNativeComponent.ios'); // Adding this here for webpack. React Native automatically resolves .ios.js and
// .android.js files, but webpack doesn't
if(_reactNativeUniversal.Platform.OS==='android')module.exports=require('./createNativeComponent.android');