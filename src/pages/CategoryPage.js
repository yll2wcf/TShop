import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar,Platform
} from 'react-native';

type Props = {};
export default class CategoryPage extends Component<Props> {
    componentWillUnmount() {
        this._navListener.remove();
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            Platform.OS==='android' && StatusBar.setBackgroundColor('#fff');
        });
    }
    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
                <Text style={{margin:10,fontSize:20,color:'black'}}>分类</Text>
            </View>
        );
    }
}
// 样式文件
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
