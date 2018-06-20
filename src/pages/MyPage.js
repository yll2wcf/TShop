import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import px2dp from "../utils/px2dp";

type Props = {};
export default class MyPage extends Component<Props> {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <View style={{height: px2dp(100), width: px2dp(750), backgroundColor: 'red'}}/>
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
