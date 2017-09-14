import React, { Component } from 'react';
import { 
  Container, Header, Content, List, 
  ListItem, Text, Body, Title, Left,
  Form, Item, Input, Label
} from 'native-base';


export default SettingForm = (list) => {
  var items = list
  return (<Container>
    <Form>
      <Item floatingLabel>
        <Label>Higher</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>Lower</Label>
        <Input />
      </Item>
    </Form>
  </Container>)
}