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
import PTRView from 'react-native-pull-to-refresh'

// Router 
import { Router, Stack, Scene } from 'react-native-router-flux'

// Actions
import { requestMenu, fetchMenu, receiveMenu } from '../actions'
// Component
import { ContentList, Nav } from '../components'
//

export class Home extends Component {
  // Prop
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    // setInterval(() => dispatch(fetchMenu()), 5000)
    dispatch(fetchMenu())
  }



  render() {
    const { isFetching, items } = this.props.list
    
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

    _refresh = () => {
      return new Promise((resolve) => {
        // setTimeout(()=>{alert(resolve())}, 2000)
        const { dispatch } = this.props
        dispatch(fetchMenu())
        const { isFetching} = this.props.list
        (!isFetching ? resolve() : null)
      });
    }
    
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
              <Title style={{color: '#fff'}}>BX.in.th</Title>
            </Body>
            <Right />
          </Header>
          { isFetching ? <Spinner color='blue' /> : null }
          <PTRView onRefresh={() => _refresh()} >
            <ContentList list={items}/>
          </PTRView>
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



export default  connect(mapStateToProps)(Home)

