/*
* 文件名: AppContainer.js
* 作者: liushun
* 描述: APP 整体框架
* 修改人:
* 修改时间:
* 修改内容:
* */

import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home'
import Mail from './Mail'
import Find from './Find'
import Me from './Me'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from 'react-native-vector-icons/AntDesign';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '微信',
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return <FontAwesome name={'wechat'} color={focused?'green':'black'} size={20}/>
      },
    }
  },
  Mail: {
    screen: Mail,
    navigationOptions: {
      tabBarLabel: '通讯录',
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return <FontAwesome name={'list'} color={focused?'green':'black'} size={20}/>
      },
    }
  },
  Find: {
    screen: Find,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return <AntDesign name={'find'} color={focused?'green':'black'} size={20}/>
      },
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'black',
      },
      tabBarIcon: ({ focused}) => {
        return <FontAwesome name={'user'} color={focused?'green':'black'} size={20}/>
      },
    }
  }
});

export default createAppContainer(TabNavigator);
