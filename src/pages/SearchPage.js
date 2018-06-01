import React, {Component} from 'react';
import {
    Text,
    StyleSheet, StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

type Props = {};
export default class SearchPage extends Component<Props> {

    render() {
        return ( // 渲染布局
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
                <Text style={{margin:10,fontSize:20,color:'black'}}>搜索</Text>
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
