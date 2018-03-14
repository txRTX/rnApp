import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import StackNavigator from 'react-navigation';
import { Provider } from 'react-redux';
import Navgator from './Navgator';
import Person from './Person';
 import configureStore from '../src/store/Store';
  const store = configureStore();
class BottomTabBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            selectedTab:'首页'
         };
        
    }
   
     render(){
        return ( 
            <View style={styles.ViewStyle}>
           
                <TabNavigator>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../images/home_grey.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../images/home.png")} />}
                        onPress={() => this.setState({selectedTab: '首页'})}>
                     <Navgator /> 
                    </TabNavigator.Item> 
                    <TabNavigator.Item  
                         selected={this.state.selectedTab === '旅游圈'}
                         title="旅游圈"
                         titleStyle={styles.tabText}
                         selectedTitleStyle={styles.selectedTabText}
                         renderIcon={() => <Image style={styles.icon} source={require("../images/home_grey.png")} />}  
                         renderSelectedIcon={() => <Image style={styles.icon} source={require("../images/home.png")} />}
                         onPress={() => this.setState({selectedTab: '旅游圈'})}>
                     <View>
                        <Text>旅游圈</Text>
                    </View>
                    </TabNavigator.Item>   
                    <TabNavigator.Item  
                         selected={this.state.selectedTab === '玩乐'}
                         title="玩乐"
                         titleStyle={styles.tabText}
                         selectedTitleStyle={styles.selectedTabText}
                         renderIcon={() => <Image style={styles.icon} source={require("../images/home_grey.png")} />}  
                         renderSelectedIcon={() => <Image style={styles.icon} source={require("../images/home.png")} />}
                         onPress={() => this.setState({selectedTab: '玩乐'})}>
                     <View>
                        <Text>玩乐</Text>
                    </View>
                    </TabNavigator.Item>   
                    <TabNavigator.Item  
                         selected={this.state.selectedTab === '我的'}
                         title="我的"
                         titleStyle={styles.tabText}
                         selectedTitleStyle={styles.selectedTabText}
                         renderIcon={() => <Image style={styles.icon} source={require("../images/home_grey.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../images/home.png")} />}
                         onPress={() => this.setState({selectedTab: '我的'})}>
                        <Provider store={store}>
                            <Person />
                        </Provider>
                           
                    </TabNavigator.Item>   
                    
                </TabNavigator>
            </View>
            
        )
     }
     

}
let styles = StyleSheet.create({  
    displayNone:{
        display:'none'
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
module.exports = BottomTabBar