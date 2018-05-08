import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

type Props = {};
export default class IndexPage extends Component<Props> {
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
                <Text style={{margin:10,fontSize:20,color:'black'}}>首页</Text>
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
