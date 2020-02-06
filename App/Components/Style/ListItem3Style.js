
/*
* 文件名: ListItemStyle.js
* 作者: liushun
* 描述: 列表项内容组件的样式
* 修改人:
* 修改时间:
* 修改内容:
* */

import AppColor from "../../Util/AppColor";
import AppSize from '../../Util/AppSize';

export default getStyle = function () {

  return {
    container:{
      backgroundColor: AppColor.MainBgColor,
      flexDirection: 'row',
      height: AppSize.itemHeight,
      paddingHorizontal: AppSize.MainPadding,
      paddingVertical: AppSize.itemPadding,
    },

    image:{
      width: AppSize.itemImage,
      height: AppSize.itemImage,
      marginRight: AppSize.itemPadding,
    },

    rightContainer:{
      flexDirection: 'row',
      flex: 1,
      justifyContent:'space-between',
      height: AppSize.itemImage,
      borderBottomWidth: 1,
      borderBottomColor: AppColor.itemBorderColor,
      alignItems: 'center'
    },
  }

}
