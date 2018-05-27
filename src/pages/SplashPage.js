import React, {Component} from 'react';
import {
    Image, StatusBar,
    View
} from 'react-native';
import theme from '../config/theme';

export default class SplashPage extends Component {

    componentDidMount() {
        // 定时任务
        this.timer = setTimeout(() => {
            // 跳转到下一个页面
            this.props.navigation.replace('MyTab');
            // 移除定时任务
            this.timer && clearTimeout(this.timer);
        }, 1000);

    }

    render() {
        return (
            <View>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
                <Image style={{width: theme.screenWidth, height: theme.screenHeight}}
                       source={require('../images/launch.png')}
                       resizeMode="cover"/>
            </View>
        );
    }
}