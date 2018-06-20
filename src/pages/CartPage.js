import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar
} from 'react-native';
import theme from "../config/theme";

type Props = {};
export default class CartPage extends Component<Props> {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <View style={{margin:10,width:40,height:50,backgroundColor:'red'}}/>
                <View style={{margin:10,width:60,height:50,backgroundColor:'green'}}/>
                <View style={{margin:10,width:80,height:50,backgroundColor:'blue'}}/>
                <View style={{margin:10,width:100,height:50,backgroundColor:'black'}}/>
                <View style={{margin:10,width:100,height:50,backgroundColor:'orange'}}/>
                <View style={{margin:10,width:40,height:50,backgroundColor:'pink'}}/>
            </View>
        );
    }
}
// 样式文件
const styles = StyleSheet.create({
    container: {
        paddingTop:theme.barContentPad,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        backgroundColor: '#F5FCFF'
    }
});
