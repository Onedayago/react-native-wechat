import { NativeModules, Platform } from 'react-native';

const { StatusBarManager } = NativeModules;

function getIosStatusBarHeight() {
  return new Promise((resolve => {
    StatusBarManager.getHeight((height)=>{
      resolve(height)
    })
  }))
}



//获取状态栏高度
export async function getStatusBarHeight() {
  if(Platform.OS === 'ios'){
    return await getIosStatusBarHeight();
  }else{
    return {'height': 0}
  }
}
