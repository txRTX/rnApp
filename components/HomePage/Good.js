import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native'; 
class Good extends React.Component{
    constructor(props) {
        super(props);
    }
      
     render(){
        return ( 
            <View>
                <Text onPress={()=>{
            const { navigate } = this.props.navigation;
              navigate('Detail2');
          }}>
                跳转到Detail2
              </Text>

                </View>
            
        )
     }
     

}
module.exports = Good

