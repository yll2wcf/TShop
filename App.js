/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 导入React 和 RN 控件
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Counter from "./src/component/Counter"

type Props = {};
// ES6 语法
export default class App extends Component<Props> {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <Counter style={{margin: 10}} initValue={1}/>
                <Counter style={{margin: 10}} initValue={2}/>
                <Counter style={{margin: 10}} initValue={3}/>
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
