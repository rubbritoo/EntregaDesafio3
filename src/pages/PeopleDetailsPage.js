import React from 'react';
import {ScrollView, Text, StyleSheet,Image, SafeAreaView } from 'react-native';


export default class PeopleDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            people: props.route.params.people
        }
    }
    render(){
        return(
            <ScrollView style = {style.scroll}>
            <SafeAreaView>
            <Image style = {style.avatar} source = {{uri: this.state.people.picture.medium}}/>
            <Text style = {style.text}>Nome: {this.state.people.name.first}</Text>
            <Text style = {style.text}>Nome da Banda: {this.state.people.band}</Text>
            <Text style = {style.text}>Email: {this.state.people.email}</Text>
            <Text style = {style.text}>Tel: {this.state.people.cell}</Text>
            </SafeAreaView>
            </ScrollView>
            
        )
    }
}

const style = StyleSheet.create(
    {
      scroll: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ccc',
        
      },
      line: {
        height: 60, 
        borderBottomWidth: 1, 
        borderBottomColor: '#37276B', 
        alignItems: 'center', 
        flexDirection: 'row',

    },
    text: {
        fontFamily: "Cochin", 
        fontSize: 30, 
        textAlign: "left",
      },
      avatar: {
        aspectRatio: 1, 
        padding: 50,
        height: 'auto',
        margin: 0, 
        borderRadius: 500,
        
    },
    
    }
  )
