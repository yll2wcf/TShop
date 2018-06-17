import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar
} from 'react-native';

type Props = {};
export default class IndexPage extends Component<Props> {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
                {/*父布局*/}
                <View style={{borderWidth:2}}>
                    <View style={styles.boxStyle}>
                        {/*子布局*/}
                        <View style={{flex:1,backgroundColor:'red'}}/>
                    </View>
                </View>
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
    },
    boxStyle: {
        width: 200,
        height: 200,
        padding: 30, //内边距
        margin: 50, //外边距
        borderWidth: 20, //边框宽度
        borderColor: 'green', //边框颜色
    }
});
