import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import {MaterialTopTabBar} from 'react-navigation-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons';

class CustomTabBar extends Component {
    render() {
        return (
            <View style={{position: 'relative', backgroundColor: '#fff'}}>
                <MaterialTopTabBar {...this.props}/>
                <TouchableOpacity style={{position: 'absolute', right: 12, bottom: 10}}>
                    <Ionicons name={'ios-search-outline'}
                              size={22}
                              color={'#666666'}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CustomTabBar;