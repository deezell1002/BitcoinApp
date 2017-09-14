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
import { Drawer, Form, Item, Input, Label } from 'native-base';


// Actions
import { requestMenu, fetchMenu, receiveMenu } from '../actions'
// Component
import { Menu, Navl } from '../components'
//

export class Calculate extends Component {
  // Prop
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    //dispatch(fetchMenu())
  }

  constructor(props) {
    super(props);
    this.state = {
      spend: 0,
      buy: 0,
      sell: 0,
      fee: 0.25,
      recive: 0,
      coin: 0
    };

  }

  isInt = (n) => {
    return (Number(n) === n && n % 1 === 0)
  }

  sFloat = (n) => {
    return (Number(n) === n && n % 1 !== 0)
  }

  getFee = number => {
    return (number * this.state.fee)/100
  }

  minusFee = num => {
    const fee = this.getFee(num)
    return num - fee
  }

  // Buy
  buy =(price, perPrice) => {
    const spend = this.minusFee(price)
    const coin = this.getCoin(spend, perPrice)
    this.setState({coin: coin})
    return true
  }

  // Sell
  sell =() => {
    const coin = this.state.coin
    const perCoin = this.state.sell
    const spend = this.minusFee(coin)
    const price = this.getPrice(spend, perCoin)
    this.setState({recive: price})
    return true
  }

  //Callllllll
  triggleChang = () => {
    //alert(this.state.spend)
    if(this.state.spend !== 0 && this.state.buy !== 0 ){
      const spend = this.state.spend
      const buy = this.state.buy
      
      // Step buy
      this.buy(spend, buy)
      // Step sell && Recive
      this.sell()
    }else{
      this.setState({recive:0})
    }
    
  }

  getCoin = (price, ppc) => {
    const result = price / ppc
    
    return parseFloat(result.toFixed(4))
  }

  getPrice = (coin, pricePerCoin) => {
    const result = coin * pricePerCoin
    
    return parseFloat(result.toFixed(4))
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
              <Title style={{color:'#fff'}}>Calculate</Title>
            </Body>
            <Right />
          </Header>

          
          <Form>
            <Item >
              <Label>Spend :</Label>
              <Input 
                placeholder='Spend'
                onChangeText={
                  (spend) => {
                    this.setState({spend})
                    setTimeout(() => this.triggleChang(), 1)
                    }
                  }/>
            </Item>
            <Item>
              <Label>Exchange :</Label>
              <Input 
                placeholder='Buy Price per'
                onChangeText={
                  (buy) => {
                    this.setState({buy})
                    setTimeout(() => this.triggleChang(), 1)
                    }
                  }/>
              <Icon name='md-swap'/>
              <Input 
                placeholder='Sell Price per'
                onChangeText={
                  (sell) => {
                    this.setState({sell})
                    setTimeout(() => this.triggleChang(), 1)
                    }
                  }/>
            </Item>
            <Item>
              <Label>Fee (%) :</Label>
              <Input 
                placeholder='Fee (%)'
                disabled
                onChangeText={
                  (fee) => {
                    this.setState({fee})
                    setTimeout(() => this.triggleChang(), 1)
                    }
                  }
                value={this.state.fee.toString()}/>
            </Item>
            <Item>
              <Label>Recived coin :</Label>
              <Input 
                placeholder='Fee (%)'
                disabled
                value={this.state.coin.toString()}/>
            </Item>
            <Item>
              <Icon name='md-cash' /><Label>Recived :</Label>
              <Input disabled placeholder='Recive price' value={this.state.recive.toString()}/>
            </Item>
          </Form>

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



export default  connect(mapStateToProps)(Calculate)

