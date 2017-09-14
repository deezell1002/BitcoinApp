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


// Actions
import { requestMenu, fetchMenu, receiveMenu } from '../actions'
// Component
import { Menu, Nav, SettingForm } from '../components'
//

export class Setting extends Component {
  // Prop
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    //dispatch(fetchMenu())
  }


  render() {
    
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Nav/>}
        onClose={() => closeDrawer()} >
        <Container>
          <Header style={{backgroundColor:'#134596'}}>
            <Left>
              <Button transparent onPress={() => openDrawer()}>
                <Icon name='menu' style={{color: '#fff'}}/>
              </Button>
            </Left>
            <Body>
              <Title style={{color: '#fff'}}>Setting</Title>
            </Body>
            <Right />
          </Header>
          <SettingForm/>
        </Container>
      </Drawer>
    )
  }
}

// Map
const mapStateToProps = state => {
  return {
    list: state.list
  }
}



export default  connect(mapStateToProps)(Setting)

