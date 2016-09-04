Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;}; /**
 * This is a hack to to create a native component of RNSVG.
 * Because importing `createReactNativeComponentClass` is a pain in the ass after `0.25.1` is released
 * and changed lots of dependencies of many modules.
 * So this is just a work around to create a native component of RNSVG.
 * If there is a better way to do this,
 * PLEASE override this module.
 */exports.default=








function(componentName){
var originNativeProps=_reactNative.UIManager[componentName].NativeProps;
var originViewProps=_reactNative.UIManager.RCTView.NativeProps;

// override native component`s NativeProps
_reactNative.UIManager[componentName].NativeProps=_extends({},
RenderableNativeProps,
originNativeProps);


// clear RCTView`s NativeProps
_reactNative.UIManager.RCTView.NativeProps=null;
var RNSVGNativeComponent=(0,_reactNative.requireNativeComponent)(componentName,null);

// reset all
_reactNative.UIManager.RCTView.NativeProps=originViewProps;
_reactNative.UIManager[componentName].NativeProps=originNativeProps;

return RNSVGNativeComponent;};var _reactNative=require('react-native'); // inherited native props
var RenderableNativeProps=_extends({},_reactNative.UIManager.RNSVGRenderable.NativeProps,_reactNative.UIManager.RNSVGNode.NativeProps);