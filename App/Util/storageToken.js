import AsyncStorage from '@react-native-community/async-storage';
import Storage from 'react-native-storage';
import ApiUtil from '../Service/ApiUtil';


export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  sync: {
    async accessToken() {

      try{
        const refresh_token =await storage.load({
          key: 'refreshToken',
        })

        const result = await ApiUtil.request('refreshToken',refresh_token)

        const {access_token, access_expire} = result.data.data

        await storage.save({
          key: 'accessToken',
          data: access_token,
          expires: access_expire * 1000
        })

        return access_token
      }catch (e) {
        console.tron.log(e)
      }

    },


  }
});



export async function saveTokens(access_token, refresh_token, access_expire, refresh_expire) {
  await storage.save({
    key: 'accessToken',
    data: access_token,
    expires: access_expire*1000
  });
  await storage.save({
    key: 'refreshToken',
    data: refresh_token,
    expires: refresh_expire*1000
  });
}

export function removeTokens() {
  storage.remove({
    key: 'accessToken'
  });
  storage.remove({
    key: 'refreshToken'
  });
}
