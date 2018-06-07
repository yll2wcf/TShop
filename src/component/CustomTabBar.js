import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import {MaterialTopTabBar} from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

class CustomTabBar extends Component {
    render() {
        return (
            <View style={{position: 'relative', backgroundColor: '#fff'}}>
                <MaterialTopTabBar {...this.props}/>
                <TouchableOpacity style={{position: 'absolute', right: 12, bottom: 10}}
                                  onPress={() => this.props.navigation.navigate('SearchPage', {
                                      param1: 86,
                                      param2: 'anything you want here'
                                  })}>
                    <Ionicons name={'ios-search-outline'}
                              size={22}
                              color={'#666666'}/>
                </TouchableOpacity>
            </View>
        );
    }

}

export default withNavigation(CustomTabBar); //导出时用 withNavigation 包装