import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {WebView} from 'react-native-webview';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[{height: STATUSBAR_HEIGHT,}, {backgroundColor}]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default function App() {
    return (
        <View style={{flex: 1}}>
            <MyStatusBar backgroundColor="#333333" barStyle="light-content"/>
            <WebView source={{uri: 'https://gulafarjan.se/?utm_source=app'}}/>
        </View>
    );
}