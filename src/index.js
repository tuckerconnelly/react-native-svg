const React = require('react');
const Component = React.Component;
const ReactNativeUniversal = require('react-native-universal');
const Platform = ReactNativeUniversal.Platform;
const CoreComponent = ReactNativeUniversal.CoreComponent;

if (Platform.OS === 'web') {
    function Svg() { this.constructor.call(arguments); }
    Svg.prototype = Object.assign({}, Component.prototype, {
        render: function () {
            return React.createElement(
                CoreComponent,
                Object.assign({}, this.props, { component: 'svg' })
            );
        }
    });
    module.exports = Object.assign(Svg, {
        Svg,
        Circle: 'circle',
        Ellipse: 'ellipse',
        G: 'g',
        Text: 'text',
        Path: 'path',
        Polygon: 'polygon',
        Polyline: 'polyline',
        Line: 'line',
        Rect: 'rect',
        Use: 'use',
        Image: 'image',
        Symbol: 'symbol',
        Defs: 'defs',
        LinearGradient: 'linearGradient',
        RadialGradient: 'radialGradient',
        Stop: 'stop',
        ClipPath: 'clipPath'
    });
} else {
    module.exports = require('./index.native.js');
}
