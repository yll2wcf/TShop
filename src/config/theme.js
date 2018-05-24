'use strict';

import {Dimensions, Platform} from 'react-native';
import {isIphoneX} from "../utils/px2dp";

export default module = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    actionBar: {
        height: Platform.OS === 'android' ? 56 : 44,
        backgroundColor: '#fff',
    },
    barContentPad: (Platform.OS === 'android' ? 0 : (isIphoneX() ? 42 : 20)),
    primaryColor: '#EE0000',
    lightGray: '#f5f5f5',
    lightBlack: '#333333',
};