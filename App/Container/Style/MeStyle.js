
/*
* 文件名: MeStyle.js
* 作者: liushun
* 描述: 我的页样式
* 修改人:
* 修改时间:
* 修改内容:
* */

import AppColor from "../../Util/AppColor";
import AppSize from '../../Util/AppSize';

export default getStyle = function () {

  return {
    headerTop:{
      paddingHorizontal: AppSize.MainPadding,
      alignItems: 'flex-end',
      paddingTop: AppSize.meHeaderTopPadding
    },
    headerContainer: {
      flexDirection: 'row',
      paddingVertical: AppSize.meHeaderPadding,
      paddingHorizontal: AppSize.MainPadding,
    },

    image: {
      width: AppSize.itemImage,
      height: AppSize.itemImage,
      marginRight: AppSize.itemImageRight,
    },

    rightContainer: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-around',
    },

    rightBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  }
}
