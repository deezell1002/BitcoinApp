import React, { Component } from 'react';
import { 
  Container, Header, Content, List, 
  ListItem, Text, Body, Title, Left, Icon
} from 'native-base';
import { TouchableOpacity, RefreshControl, ListView } from 'react-native'
import _ from 'underscore'


export default Select = (items) => {
  var list = items


  console.log('item',list)
  {_.each(list.items, (a) => {console.log(a.pairing_id)})}

  return (<Container>
  
  </Container>)
}