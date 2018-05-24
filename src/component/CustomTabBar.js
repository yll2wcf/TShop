import {
    withNavigation
} from 'react-navigation';
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import {MaterialTopTabBar} from 'react-navigation-tabs'
import px2dp from '../utils/px2dp';

import Ionicons from 'react-native-vector-icons/Ionicons';

class CustomTabBar extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                <MaterialTopTabBar {...this.props}/>
                <TouchableOpacity style={{position: 'absolute', right: px2dp(24), bottom: px2dp(20)}}
                                  onPress={() => this.props.navigation.navigate('SearchPage')}>
                    <Ionicons name={'ios-search-outline'}
                              size={22}
                              color={'#666666'}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(CustomTabBar);