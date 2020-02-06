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
  return{
    container:{
      backgroundColor: AppColor.itemDivBg,
      width: '100%',
      height: AppSize.itemDivHeight,
      paddingHorizontal: AppSize.MainPadding,
      alignItems: 'center',
      flexDirection: 'row',
    }
  }
}
