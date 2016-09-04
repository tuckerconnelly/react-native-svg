// Adding this here for webpack. React Native automatically resolves .ios.js and
// .android.js files, but webpack doesn't

import { Platform } from 'react-native-universal'

if (Platform.OS === 'ios') module.exports = require('./createNativeComponent.ios')
if (Platform.OS === 'android') module.exports = require('./createNativeComponent.android')
