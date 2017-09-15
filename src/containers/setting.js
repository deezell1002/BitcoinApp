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
  Title ,Button, Spinner, Left, Right, Icon,
  Picker, Item as FormItem
} from 'native-base';
const Item = Picker.Item;
import { connect } from 'react-redux';
import { Drawer } from 'native-base';

import _ from 'underscore'


// Actions
import { fetchCrypto } from '../actions'
// Component
import { Menu, Nav, SettingForm, Select } from '../components'
//

export class Setting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  onValueChange = (value) => {
    this.setState({
      selected: value
    });
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCrypto())
  }


  render() {
    const { isFetching, cryptoList, hasData } = this.props

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

          <Picker
              mode="dropdown"
              placeholder="Select One"
              note={false}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            <Item label="Wallet" value="key0" />
            <Item label="ATM Card" value="key1" />
            <Item label="Debit Card" value="key2" />
            <Item label="Credit Card" value="key3" />
            <Item label="Net Banking" value="key4" />
            

          </Picker>
          { isFetching ? <Spinner color='blue' /> : null }
          
          <SettingForm/>
          { !hasData ? <Select items={cryptoList.lists}/> : null}
        </Container>
      </Drawer>
    )
  }
}

// Map
const mapStateToProps = state => {
  return {
    cryptoList: state.cryptoList
  }
}



export default  connect(mapStateToProps)(Setting)

