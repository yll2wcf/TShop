'use strict';

import {Dimensions, Platform} from 'react-native';
export default module = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    btnActiveOpacity: 0.5,
    actionBar: {
        height: 44,//Platform.OS === 'android' ? 56 : 44 //根据不通平台高度不一致
        backgroundColor: '#fff'
    },
    barContentPad: (Platform.OS === 'android' ? 0 : 20), //根据不同平台顶部 padding不一致
    // 常用颜色
    primaryColor: '#EE0000',
    lightGray: '#f5f5f5',
    darkGray: '#e5e5e5',
    lightBlack: '#333333'
};