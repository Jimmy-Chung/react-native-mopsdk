/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import MopSDK from 'react-native-mopsdk';
const onPressOpenCanvasApplet = () => {
  MopSDK.openApplet({appId: '5ea03fa563cb900001d73863'});
};
const onPressOpenDemoApplet = () => {
  MopSDK.openApplet({appId: '5ea0401463cb900001d73865'});
};
const onPressOpenProfileApplet = () => {
   MopSDK.registerAppletHandler({
     getCustomMenus(appId){
       console.log("getCustomMenus")
        return []
     }
   })
};
export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--',
  };
  componentDidMount() {
    MopSDK.initialize(
      {
        appkey: '22LyZEib0gLTQdU3MUauASlb4KFRNRajt4RmY6UDSucA',
        secret: 'c5cc7a8c14a2b04a',
        apiServer: 'https://mp.finogeeks.com',
        apiPrefix: '/api/v1/mop',
      }
    ).then((res) => {
      console.log('message: ', res);
      const s = JSON.stringify(res);
      this.setState({
        status: 'native callback received',
        message: s,
      });
    }).catch((error) => {
      console.log('error: ', error);
      const s = 'initialize fail'
      this.setState({
        status: 'native callback received',
        message: s,
      });
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆FINMopsdk example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
        <Button
          onPress={onPressOpenCanvasApplet}
          title="打开画图小程序"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressOpenDemoApplet}
          title="打开官方小程序"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressOpenProfileApplet}
          title="打开智能对账单小程序"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
