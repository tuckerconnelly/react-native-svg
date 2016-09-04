const ReactNativeUniversal = require('react-native-universal');
const Platform = ReactNativeUniversal.Platform;

if (Platform.OS === 'web') {
    module.exports = require('./index.web.js')
} else {
    module.exports = require('./index.native.js');
}
