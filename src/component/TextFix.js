import React from 'react';
import {Text} from 'react-native';


const TextFix=(props)=> {
    return (
        <Text {...props} allowFontScaling={false}>
            {props.children}
        </Text>
    );
};

export default TextFix;