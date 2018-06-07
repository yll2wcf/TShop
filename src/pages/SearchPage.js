import React, {Component} from 'react';
import {
    Text,
    StyleSheet, StatusBar
} from 'react-native';
import {SafeAreaView} from 'react-navigation';

type Props = {};
export default class SearchPage extends Component<Props> {
    render() {
        const {navigation} = this.props;
        const param1 = navigation.getParam('param1'); // 获取第一个参数
        const param2 = navigation.getParam('param2', 'some default value'); //获取第二个参数

        return ( // 渲染布局
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
                <Text style={{margin: 10, fontSize: 20, color: 'black'}}>搜索{param1}{param2}</Text>
            </SafeAreaView>
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
