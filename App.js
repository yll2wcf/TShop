/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 导入React 和 RN 控件
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Counter from "./src/component/Counter"

type Props = {};
// ES6 语法
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.initValues = [1, 2, 3];
        const initSum = this.initValues.reduce((a, b) => a + b, 0);
        this.state = {
            sum: initSum
        };
        this.onUpdate=this.onUpdate.bind(this)
    }

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <Text style={{margin:10,fontSize:20,color:'black'}}>总计 {this.state.sum}</Text>
                <Counter style={{margin: 10}} onUpdate={this.onUpdate} initValue={this.initValues[0]}/>
                <Counter style={{margin: 10}} onUpdate={this.onUpdate} initValue={this.initValues[1]}/>
                <Counter style={{margin: 10}} onUpdate={this.onUpdate} initValue={this.initValues[2]}/>
            </View>
        );
    }
    onUpdate(oldValue,newValue){
        const valueChange=newValue-oldValue;
        this.setState({sum:this.state.sum+valueChange})
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
