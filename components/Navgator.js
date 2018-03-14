import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

import react from 'react';
import Home  from './Home';
import GoodDetail from './HomePage/GoodDetail'
export default  MyApp = StackNavigator({
    // 将需要跳转的页面注册在这里，全局才可以跳转
    Home:{
        screen:Home,

    },
    GoodDetail:{
        screen:GoodDetail,
    },

},{

});