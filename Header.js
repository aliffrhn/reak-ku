import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Header extends Component{

    state = {
        name : this.props.text
    }

    render(){

      return(
        <Text>
          {this.state.text}
        </Text>
      )
    }
  }