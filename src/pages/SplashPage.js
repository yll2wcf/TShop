import React, {Component} from 'react';
import {
    Image,
} from 'react-native';
import theme from '../config/theme';

export default class SplashPage extends Component {

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigation.replace('IndexPage');
            this.timer && clearTimeout(this.timer);
        }, 2000);
    }

    render() {
        return (
            <Image style={{flex: 1,width: theme.screenWidth, height: theme.screenHeight}}
                   source={require('../images/launch.png')}
                   resizeMode="cover"/>

        );
    }
}