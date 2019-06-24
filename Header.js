import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'

export default class Header extends Component{

    state = {
        name : this.props.text,
        usia : ''
    }

    handlerInput = event => {
        this.setState({usia : event})
    }

    render(){

      return(
        <View>
          {this.state.text}
          <TextInput 
            onChangeText = {this.handlerInput}
            placeholder = "Masukan Inputan"
            value = {this.state.usia}
           />
        </View>
      )
    }
  }