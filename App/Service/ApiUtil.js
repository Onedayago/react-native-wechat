import Api from './index'
import {storage} from '../Util/storageToken'

class ApiUtil {
  static api(){
    if(!ApiUtil.serviceApi){
      ApiUtil.serviceApi = Api.create()
    }
    return ApiUtil.serviceApi;
  }

  static async requestWithToken(needAuth){
    const Api=ApiUtil.api();

    return new Promise((resolve, reject) => {
      if(needAuth){
        storage.load({
          key: 'accessToken',
          syncInBackground: false
        }).then(access_token => {
          console.tron.log(`read access_token:${access_token}`)
          Api.setToken(access_token)
          resolve("success")
        });
      }else{
        resolve("success")
      }
    })
  }

  static async request(route,params,needAuth=false){

    const Api = ApiUtil.api();

    //判断是否需要身份认证
    await this.requestWithToken(needAuth);

    if(!params) params=[];
    return await eval("Api."+route)(params)
  }

}

export default ApiUtil
