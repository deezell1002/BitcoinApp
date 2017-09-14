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

// Actions
import { requestMenu, fetchContent, receiveMenu } from '../actions'
// Component
import { 
  ContentList, Nav, TableTrade, 
  TableOrder, ViewChart } from '../components'
//

export class Detail extends Component {
  // Prop
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, page_id } = this.props
    console.log('TT : ', this.props)
    dispatch(fetchContent(page_id))
  }


  render() {
    const { isFetching, content } = this.props
    console.log('content=',content)

    const lastTrade = content.contents.trades
    const lowask = content.contents.lowask
    const highbid = content.contents.highbid

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
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Detail</Title>
            </Body>
            <Right />
          </Header>
          {/* Loading */}
          { isFetching ? <Spinner color='blue' /> : null }

          <Content>
            <Text>GRAPH</Text>
            <ViewChart/>
            <Text>Table Last trade</Text>
            { !isFetching ? <TableTrade data={lastTrade} /> : <Spinner color='blue' /> }
            <Text>Table sale order</Text>
            { !isFetching ? <TableOrder data={lowask} /> : <Spinner color='blue' /> }
            <Text>Table Buy</Text>
            { !isFetching ? <TableOrder data={highbid} /> : <Spinner color='blue' /> }
          </Content>

        </Container>
      </Drawer>
    )
  }
}

// Map
const mapStateToProps = state => {
  return {
    content: state.content
  }
}



export default  connect(mapStateToProps)(Detail)

