/**
 * VuePress 应用拓展配置
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'

export default ({
	Vue, // VuePress 正在使用的 Vue 构造函数
	options, // 附加到根实例的一些选项
	router, // 当前应用的路由实例
	siteData // 站点元数据
  }) => {
	// ...做一些其他的应用级别的优化
	Vue.use(ElementUI)
	// Filter
	Vue.filter('date', (value, template = 'YYYY-MM-DD HH:mm:ss') => {
		return moment(value).utcOffset(480).format(template)
	})
  }