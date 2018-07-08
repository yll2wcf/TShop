import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StatusBar,
    Platform
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../utils/px2dp';

let imageResource = [require('../images/category1.png'), require('../images/category2.png'),
    require('../images/category3.png'), require('../images/category4.png')];

export default class CategoryPage extends Component<> {
    componentWillUnmount() {
        this._navListener.remove();
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            Platform.OS === 'android' && StatusBar.setBackgroundColor('#fff');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={{flex: 1}}
                          data={imageResource}
                          renderItem={this._renderItemComponent}
                          keyExtractor={(item, index) => 'Category' + index}/>
            </View>
        );
    }

    // 渲染每个条目
    _renderItemComponent = ({item, index}) => {
        return (
            <View style={{backgroundColor: '#fff', paddingVertical: px2dp(12), alignItems: 'center'}}>
                <TouchableOpacity onPress={this._onItemPress.bind(this, index)}>
                    <Image source={item}/>
                </TouchableOpacity>
            </View>
        )
    };

    // 条目的点击事件
    _onItemPress(index) {
        console.log(index)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.lightGray,
        paddingTop: px2dp(1)
    }
});