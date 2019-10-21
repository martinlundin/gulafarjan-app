import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[{height: getStatusBarHeight(),}, {backgroundColor}]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default function App() {
    return (
        <View style={{flex: 1}}>
            <MyStatusBar backgroundColor="#333333" barStyle="light-content"/>
            <WebView useWebKit={true} source={{uri: 'https://gulafarjan.se/?utm_source=app'}}/>
        </View>
    );
}