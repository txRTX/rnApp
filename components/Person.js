import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import *as LoginAction from '../src/action/LoginAction';
class Person extends Component {
    render() {
        const { login } = this.props;
        return(
          <View style={styles.container}>
            <Text>状态: {this.props.status}
            </Text>
            <TouchableOpacity onPress={()=>this.props.login()} style={{marginTop: 50}}>
              <View style={styles.loginBtn}>
                <Text>{this.props.isSuccess?this.props.user.name:'登录'}
                </Text>
                
              </View>
            </TouchableOpacity>
          </View>
        )
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5FCFF'
        },
        loginBtn: {
          borderWidth: 1,
          padding: 5,
        }
      });
      export default connect(
        (state) => ({
          status: state.loginIn.status,
          isSuccess: state.loginIn.isSuccess,
          user: state.loginIn.user,
        }),
        (dispatch) => ({
          login: () => dispatch(LoginAction.login()),
        })
      )(Person)