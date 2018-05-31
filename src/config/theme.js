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
    barContentPad: (Platform.OS === 'android' ? 0 : (isIphoneX() ? 42 : 20)),
    bottomPadding: isIphoneX() ? 18 : 0,
    // 常用颜色
    primaryColor: '#EE0000',
    lightGray: '#f5f5f5',
    darkGray: '#e5e5e5',
    lightBlack: '#333333'
};


export function isIphoneX() {
    let dimension = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimension.height === 812 || dimension.width === 812)
    );
}