import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
var Dimensions=require('Dimensions')
var windowwidth=Dimensions.get('window').width;
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

class Home extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
       
        // 通过在componentDidMount里面设置setParams将title的值动态修改
        this.props.navigation.setParams({
            headerTitle:'Home'
        });
        
    }
    static navigationOptions = {
        header:null
    }
    render(){
        return (
            <View>
                <View>
                    <Image style={styles.imagestyle} source={{uri:"https://pic5.40017.cn/02/001/16/25/rBANDFjdtsmACeIoAAEAANmW338998.jpg"}} />
                </View>
                
                <View style={styles.viewFlexCol}>
                    <View  >
                        <Image style={styles.secondPartIcon} source={require('../images/home_icon1.png')} />
                        <Text onPress={()=>{
            const { navigate } = this.props.navigation;
              navigate('GoodDetail',{name:'南极详情'})}} style={styles.iconBox}>南极</Text>
                    </View>
                    <View>
                        <Image style={styles.secondPartIcon} source={require('../images/home_icon2.png')} />
                        <Text style={styles.iconBox}>三峡</Text>
                    </View>
                    <View>
                        <Image style={styles.secondPartIcon} source={require('../images/home_icon3.png')} />
                        <Text style={styles.iconBox}>日本</Text>
                    </View>
                    <View>
                        <Image style={styles.secondPartIcon} source={require('../images/home_icon4.png')} />
                        <Text style={styles.iconBox}>更多</Text>
                    </View>
                </View>

                <View style={{marginTop:5,backgroundColor:'#ffffff'}}>
                    <Text style={styles.hotText}>热门活动</Text>
                    <View style={styles.viewFlexCol1}>
                        <Image style={styles.imagestyle1}  source={require('../images/home_3_bg.png')} />
                        <Image style={styles.imagestyle1} source={require('../images/home_3_bg.png')} />
                    </View>

                </View>
            </View>
        )
       
    }
  }
  const styles = StyleSheet.create({
    imagestyle:{
        width:windowwidth,
        height:120,
    },
    imagestyle1:{
        width:windowwidth*9/20,
        height:windowwidth/3
    },
    imagestyle2:{
       marginLeft:10
    },
    viewFlexCol : {
      
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding:20
    },
    viewFlexCol1 : {
        width:windowwidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding:10
    },
    iconBox:{
        textAlign:'center'
    },
    secondPartIcon :{
        width:50,
        height:50,
        marginBottom:5
    },
    hotText:{
        fontSize:18,
        color:'#33ffac',
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'


    }
  })
  module.exports = Home;