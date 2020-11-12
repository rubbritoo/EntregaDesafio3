import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList'



export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }
 
  componentDidMount(){
    axios
    .get('http://demo4162750.mockable.io/artistas')
    .then(response => {
      const {results} = response.data
      this.setState({
        peoples: results
      })
    })
  }
 
  render(){
    return (
        <View>
            <PeopleList peoples={this.state.peoples}
            onPressItem={(people) => {
              this.props.navigation.navigate('Detalhe do Artista',{people:people})
              }} /> 
        </View>
    );
  }
 
}