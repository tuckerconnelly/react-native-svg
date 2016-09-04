Object.defineProperty(exports,"__esModule",{value:true});exports.default=









function(componentName){
//let originNativeProps = UIManager[componentName].NativeProps;
var originViewProps=_reactNative.UIManager.RCTView.NativeProps;

// clear RCTView`s NativeProps
_reactNative.UIManager.RCTView.NativeProps=null;
var RNSVGNativeComponent=(0,_reactNative.requireNativeComponent)(componentName,null);

// reset RCTView`s NativeProps
_reactNative.UIManager.RCTView.NativeProps=originViewProps;
return RNSVGNativeComponent;};var _reactNative=require('react-native');