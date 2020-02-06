
import AppSize from '../../Util/AppSize'
import AppColor from '../../Util/AppColor'
export default getStyle = function () {

  return {
    container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: AppSize.MainPadding,
      paddingVertical: AppSize.Nav_height,
      backgroundColor: AppColor.NavBgColor,
    },

    navRight:{
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  }

}
