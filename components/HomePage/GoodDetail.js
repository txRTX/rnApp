import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native'; 
  import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';
class GoodDetail extends Component{
    constructor(props) {
        super(props);
    }
  

    static navigationOptions = ({navigation,screenProps}) => ({
        title:navigation.state.params.name
    })
    
     render(){
        return ( 
            <View>
                <Text>
                    {this.props.navigation.state.params.name}
                </Text>
            </View>
            
        )
     }
}
let styles = StyleSheet.create({  
    displayNone:{

    },
    ViewStyle:{
        flex: 1,
        backgroundColor:'#f0f0f0'
    },
    tabText: {  
        color: "#000000",  
        fontSize: 10  
    },  
    selectedTabText: {  
        color: "#33ffac",  
        fontSize: 10  
    },  
    icon: {  
        width: 30,  
        height: 30  
    }  
});  
//AppRegistry.registerComponent('GoodDetail', () => GoodDetail);
module.exports = GoodDetail