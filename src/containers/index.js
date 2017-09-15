/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, View } from 'react-native';
import { 
  Container, Header, Content, 
  List, ListItem, Text, Body, 
  Title ,Button, Spinner, Left, Right, Icon
} from 'native-base';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';

// Router 
import { Router, Stack, Scene } from 'react-native-router-flux'
import Home from './home'
import Setting from './setting'
import Detail from './detail'
import Calculate from './calculate'

// Actions
import { requestMenu, fetchMenu, receiveMenu } from '../actions'
// Component
import { Menu, Nav } from '../components'
//

export default class App extends Component {
  

  // Handle
  handleAlertClick = e => {
    e.preventDefault()
  }

  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    
    // return (
    //   <Drawer
    //     ref={(ref) => { this.drawer = ref; }}
    //     content={<Nav/>}
    //     onClose={() => closeDrawer()} >
    //     <Container>
    //       <Header>
    //         <Left>
    //           <Button transparent onPress={() => openDrawer()}>
    //             <Icon name='menu' />
    //           </Button>
    //         </Left>
    //         <Body>
    //           <Title>BX.in.th</Title>
    //         </Body>
    //         <Right />
    //       </Header>
    //       { isFetching ? <Spinner color='blue' /> : null }
    //     <Menu list={items}/>
    //     </Container>
    //   </Drawer>
    // )

    // return (<Home/>)
    return (
      <Router >
        <Stack key="root">
          <Scene 
            
            key="home" 
            component={Home}
            hideNavBar={true}
            ></Scene>
          <Scene initial key="setting" component={Setting} hideNavBar={true}></Scene>
          <Scene key="calculate" component={Calculate} hideNavBar={true}></Scene>
          <Scene key="detail" component={Detail} hideNavBar={true}></Scene>
        </Stack>
      </Router>
    )
  }
}


