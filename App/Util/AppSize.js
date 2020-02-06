

import {scaleSize} from './ScaleSize'
import {Dimensions} from "react-native";
const { width, height } = Dimensions.get('window')



const AppSize = {
  MainPadding: scaleSize(20), //页面最外边距

  //MainHeadNav
  Nav_height: scaleSize(10), //页面顶部导航栏纵向边距

  itemHeight: scaleSize(50), //列表 item 的高度

  itemImage: scaleSize(40), //item 图片大小

  itemImageRight: scaleSize(10), //item 图片右边距

  itemPadding: scaleSize(10), //item 纵向 padding

  itemDivHeight: scaleSize(30), // itemDiv 高度

  meHeaderPadding: scaleSize(30), //我的页面顶部高度


  meHeaderTopPadding: scaleSize(10), //我的页面顶部摄像机
}

export default AppSize;
