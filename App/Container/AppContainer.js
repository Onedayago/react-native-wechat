/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: APP 整体框架
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Home from './Home'
import Mail from './Mail'
import Find from './Find'
import Me from './Me'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChatView from '../View/ChatView'
import LoginView from '../View/LoginView'
import AddFriend from '../View/AddFriend'
import UserView from '../View/UserView'
import RegisterView from '../View/RegisterView'
import UserMoreView from '../View/UserMoreView'
import SettingView from '../View/SettingView'
import UserDetail from '../View/UserDetail'
import {View} from "react-native";
import MailBottom from '../Components/MailBottom'
import HomeBottom from '../Components/HomeBottom'
import FriendList from '../View/FriendList'
import PublishView from '../View/PublishView'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '微信',
      tabBarOptions: {
        activeTintColor: 'rgb(66, 122, 184)',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return (
          <View>
            <HomeBottom focused={focused}></HomeBottom>
          </View>
        )
      },
    }
  },
  Mail: {
    screen: Mail,
    navigationOptions: {
      tabBarLabel: '通讯录',
      tabBarOptions: {
        activeTintColor: 'rgb(66, 122, 184)',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return (
          <View>
            <MailBottom focused={focused}></MailBottom>
          </View>
          )
      },
    }
  },
  Find: {
    screen: Find,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarOptions: {
        activeTintColor: 'rgb(66, 122, 184)',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return <AntDesign name={'find'} color={focused?'rgb(66, 122, 184)':'black'} size={20}/>
      },
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarOptions: {
        activeTintColor: 'rgb(66, 122, 184)',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return <FontAwesome name={'user'} color={focused?'rgb(66, 122, 184)':'black'} size={20}/>
      },
    }
  }
});

// App 主页面
const MainNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    }
  },
  ChatView: {
    screen: ChatView,
    navigationOptions: {
      header: null
    }
  },
  AddFriend: {
    screen: AddFriend,
    navigationOptions: {
      header: null
    }
  },
  UserView: {
    screen: UserView,
    navigationOptions: {
      header: null
    }
  },
  UserMoreView: {
    screen: UserMoreView,
    navigationOptions: {
      header: null
    }
  },
  SettingView: {
    screen: SettingView,
    navigationOptions: {
      header: null
    }
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: {
      header: null
    }
  },
  FriendList: {
    screen: FriendList,
    navigationOptions: {
      header: null
    }
  },
  PublishView: {
    screen: PublishView,
    navigationOptions: {
      header: null
    }
  }
},{
  initialRouteName: 'TabNavigator',
})

//使用 createSwitchNavigator 创建分组导航
const RootNavigator = createSwitchNavigator({
  Main: MainNavigator,
  LoginView: LoginView,
  RegisterView: RegisterView,
  }, {
  navigationOptions: {
    header: null,
  },
  initialRouteName: 'Main',
});



export default createAppContainer(RootNavigator);
