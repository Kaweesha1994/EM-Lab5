import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'

class AppComponent extends Component {

   state = {
      name: ''
   }

   setName = (text) => {
      this.setState({name : text})
   }

   render() {

      return (
         <View style = {styles.container}>
             <TextInput
             style = {styles.input}
             placeholder = "Enter your name"
             onChangeText = {this.setName}/>
   
            <TouchableOpacity
            style = {styles.submitButton}
            onPress={() => {
               alert("Hello " + this.state.name)
            }}>
               <Text>Submit</Text>
            </TouchableOpacity>
   
         </View>
      )

   }

   
}
export default AppComponent

const styles = StyleSheet.create({
   container : {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   }
})