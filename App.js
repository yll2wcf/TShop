/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
//导入 react-navigation 组件
import {
    createStackNavigator,
} from 'react-navigation';
//页面切换动画插入器
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import SplashPage from './src/pages/SplashPage';
import IndexPage from './src/pages/IndexPage';


const App = createStackNavigator({
    SplashPage: {
        screen: SplashPage,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null //去掉 react-navigation 提供的标题
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
    transitionConfig: () => ({ //切换动画
        screenInterpolator: CardStackStyleInterpolator.forHorizontal //水平动画
    })
});

export default App