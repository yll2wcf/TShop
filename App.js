/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
//导入 react-navigation 组件
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
//页面切换动画插入器
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
// 矢量图
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './src/config/theme';
import SplashPage from './src/pages/SplashPage';
import IndexPage from './src/pages/IndexPage';
import CategoryPage from './src/pages/CategoryPage';
import CartPage from './src/pages/CartPage';
import MyPage from './src/pages/MyPage';

const MyTab = createBottomTabNavigator({
        IndexPage: {
            screen: IndexPage,
            navigationOptions: {
                header: null,
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        },
        CategoryPage: {
            screen: CategoryPage,
            navigationOptions: {
                header: null,
                tabBarLabel: '分类',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-apps${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        },
        CartPage: {
            screen: CartPage,
            navigationOptions: {
                header: null,
                tabBarLabel: '购物车',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-cart${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        },
        MyPage: {
            screen: MyPage,
            navigationOptions: {
                header: null,
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name={`ios-person${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
                )
            }
        }
    }, {
        tabBarOptions: {
            // label和icon的前景色 活跃状态下（选中）
            activeTintColor: theme.primaryColor,
            // label和icon的背景色 不活跃状态下
            inactiveBackgroundColor: theme.lightGray,
            // label和icon的前景色 不活跃状态下(未选中)
            inactiveTintColor: theme.lightBlack,
        }
    }
);
const App = createStackNavigator({
    SplashPage: {
        screen: SplashPage,
        navigationOptions: {
            gesturesEnabled: true,
            header: null //去掉 react-navigation 提供的标题
        }
    },
    MyTab: {
        screen: MyTab
    }
}, {
    mode: 'card',// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none',//// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    transitionConfig: () => ({ //切换动画
        screenInterpolator: CardStackStyleInterpolator.forHorizontal //水平动画
    })
});


export default App