import React, { Component } from 'react';
import { 
  Container, Header, Content, List, 
  ListItem, Text, Body, Title, Left, Icon
} from 'native-base';
import { TouchableOpacity, RefreshControl, ListView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PTRView from 'react-native-pull-to-refresh'


export default ContentList = (list) => {
  var items = list

  clickToDetail = (item) => {
    Actions.detail({page_id : item })
  }

  

  return (<Content>
    <List dataArray={items.list}
      renderRow={(item) =>
        <ListItem style={{marginLeft:0}} style={{backgroundColor: '#b1cce2', marginLeft:0}}>
          <TouchableOpacity onPress={() => clickToDetail(item.pairing_id)}>
            <Body>
              <Text>
                {item.primary_currency}/{item.secondary_currency} 
                {(item.change > 0) ? <Icon name='md-arrow-round-up' style={{color: 'green', fontSize: 18}}/> : <Icon name='md-arrow-round-down' style={{color: 'red', fontSize: 18}}/>}
              </Text>
              <Text note>Last price: {item.last_price}, Change: {item.change}%</Text>
              <Text note>Height: {item.last_price}</Text>
            </Body>
          </TouchableOpacity>
        </ListItem>
      }>
    </List>
  </Content>)
  // return (<Content>
  //   <PTRView onRefresh={this._refresh} >
  //   <List dataArray={items.list}
  //     renderRow={(item) =>
  //       <ListItem style={{marginLeft:0}} style={{backgroundColor: '#b1cce2', marginLeft:0}}>
  //         <TouchableOpacity onPress={() => clickToDetail(item.pairing_id)}>
  //           <Body>
  //             <Text>
  //               {item.primary_currency}/{item.secondary_currency} 
  //               {(item.change > 0) ? <Icon name='md-arrow-round-up' style={{color: 'green', fontSize: 18}}/> : <Icon name='md-arrow-round-down' style={{color: 'red', fontSize: 18}}/>}
  //             </Text>
  //             <Text note>Last price: {item.last_price}, Change: {item.change}%</Text>
  //             <Text note>Height: {item.last_price}</Text>
  //           </Body>
  //         </TouchableOpacity>
  //       </ListItem>
  //     }>
  //   </List>
  //   </PTRView>
  // </Content>)
}