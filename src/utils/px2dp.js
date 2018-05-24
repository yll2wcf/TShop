'use strict';
import {Dimensions,Platform} from 'react-native';

/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;

const r2=2;
const w2 = 750/r2;
const h2 = 1334/r2;
/**
 * 设置text为sp
 * @param size  sp
 * @returns {Number} dp
 */
export const DEFAULT_DENSITY=2;
/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {Number}
 * @constructor
 */
export default function px2dp(size) {
    let scaleWidth = screenW / w2;
    let scaleHeight = screenH / h2;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5));
    return size/DEFAULT_DENSITY;
}

export function isIphoneX() {
    let dimension = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimension.height === 812 || dimension.width === 812)
    );
}