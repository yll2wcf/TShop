import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import PropTypes from 'prop-types';

export default class Counter extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value: this.props.initValue || 1
        };
        this._update = this._update.bind(this);
    }

    // 默认属性
    static defaultProps = {
        initValue: 1,
        onUpdate: f => f // 默认是一个什么都不做的函数。
    };

    render() {
        return ( // 渲染布局
            <View style={[this.props.style, styles.operatingBox]}>
                <TouchableOpacity activeOpacity={0.2}
                                  onPress={this._reduce.bind(this)}>
                    <View style={styles.reduce}>
                        <Text allowFontScaling={false} style={[styles.btn1]}>-</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.inpBox}>
                    <TextInput style={styles.inp1}
                               returnKeyType='done'
                               maxLength={3}
                               onEndEditing={this._checkNumber.bind(this)}
                               value={this.state.value.toString()}
                               keyboardType="numeric"
                               onChangeText={(txt) => this._update(Number(txt))}
                               autoFocus={false}
                               underlineColorAndroid="transparent">
                    </TextInput>
                </View>

                <TouchableOpacity activeOpacity={0.2}
                                  onPress={this._plus.bind(this)}>
                    <View style={styles.plus}>
                        <Text allowFontScaling={false} style={[styles.btn1]}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _checkNumber() {
        let value = this.state.value;
        console.log(value);
        if (value === '' || value < 1) {
            value = 1;
        } else {
            value = Math.floor(value);
        }
        this._update(value);
    }


    _reduce() {
        let value = this.state.value - 1;
        if (value < 1) value = 1;
        this._update(value);
    }

    _plus() {
        this._update(this.state.value + 1);
    }

    _update(value) {
        this.props.onUpdate(this.state.value, value);
        this.setState({value: value})
    }
}


// 样式文件
const styles = StyleSheet.create({
    operatingBox: {
        width: 120,
        height: 35,
        borderColor: '#ddd', // 边框颜色
        borderWidth: 1,
        flexDirection: 'row',//横向布局
        alignItems: 'center',
        borderRadius: 5, //圆角半径
        overflow: 'hidden' // 超出控件范围的隐藏
    },
    btn1: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    inpBox: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#ddd',
    },
    reduce: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#ddd',
    },
    plus: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inp1: {
        flex: 1,
        backgroundColor: 'transparent',
        textAlign: 'center',
        padding: 0,
        fontSize: 14
    },
});

Counter.propTypes = {
    initValue: PropTypes.number,
    style: PropTypes.object,
    onUpdate: PropTypes.func
};