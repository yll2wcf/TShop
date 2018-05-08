/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
//导入 react-navigation 组件
import {
    StackNavigator,
} from 'react-navigation';
//页面切换动画插入器
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import SplashPage from './src/pages/SplashPage';
import IndexPage from './src/pages/IndexPage';


const App = StackNavigator({
    SplashPage: {
        screen: SplashPage,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null
        }
    },
    IndexPage: {
        screen: IndexPage,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null
        }
    }
}, {
    mode: 'card',// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none',//// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: () => {
    },
    onTransitionEnd: () => {
    },
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    })
});

export default App