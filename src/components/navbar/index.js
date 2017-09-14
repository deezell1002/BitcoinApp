import React, { Component } from 'react';
import { 
  Container, Content, List, 
  ListItem, Text, Body, Button, Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux'
import { View, Image } from 'react-native';


export default Nav = (list) => {
  var items = ['Home', 'Setting']
  return (<Content style={{ backgroundColor: '#134596', paddingTop: 0}}>
    
    <Image 
      style={{width: '100%', height: 128 }}
      source={{uri:'https://www.coinhills.com/images/market/exchange/bx-in-th.png'}}/>
    <Button 
      style={{ flex: 1, justifyContent: 'flex-start'}}
      light 
      full 
      onPress={() => doLink('home')}><Icon name='home'/><Text>Home</Text></Button>
    <Button 
      style={{ flex: 1, justifyContent: 'flex-start'}}
      light 
      full 
      onPress={() => doLink('calculate')}><Icon name='md-calculator'/><Text>Calculate</Text></Button>
    <Button 
      style={{ flex: 1, justifyContent: 'flex-start'}}
      light 
      full
      onPress={() => doLink('setting')}><Icon name='cog'/><Text>Setting</Text></Button>
  </Content>)
}

const doHome = () => {
  Actions.home()
}

const doLink = (link) => {
  Actions[link].call()
}