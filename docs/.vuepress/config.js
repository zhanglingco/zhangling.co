var fs = require('fs');
var path = require('path');

module.exports = {
	// 标题
	title: 'Ling‘s Website 🙃',
	// 描述
	description: '知识总结，职场经验，人生感悟',
	// head
	head: [
		['link', { rel: 'icon', href: '/images/favicon.ico' }],
		['link', { rel: 'stylesheet', href: '//cdn.bootcss.com/normalize/7.0.0/normalize.min.css' }],
		['link', { rel: 'stylesheet', href: '//cdn.bootcss.com/animate.css/3.5.2/animate.min.css' }],
		['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_987629_b1cqvuf9roo.css' }]
	],
	// 主题配置
	themeConfig: {
		// sidebar: 'auto', // 开启侧边栏
		// displayAllHeaders: true,
		docsDir: 'docs',	// 假如文档不是放在仓库的根目录下
		lastUpdated: true, // 显示最后更新时间
		// 导航栏
		nav: [
			{ text: '首页', link: '/' },
			{ text: '杂谈', link: 'https://github.com/zhanglingco/Blog/issues' },
			{
				text: '教程',
				link: 'https://tutorial.zhangling.co/',
				// items: [
				// 	{ text: '知识图谱', link: 'https://github.com/zhanglingco/architect-structure' },
				// 	{ text: 'JavaScript 教程', link: 'https://github.com/zhanglingco/js-tutorial' },
				// 	{ text: 'Java 教程', link: 'https://github.com/zhanglingco/java-tutorial' },
				// 	{ text: 'Redis 教程', link: 'https://github.com/zhanglingco/redis-tutorial' },
				// 	{ text: 'AWS 教程', link: 'https://github.com/zhanglingco/aws-tutorial' },
			  	// ]
			},
			{ text: '知识问答', link: 'https://github.com/zhanglingco/coder-interview' },
			{ text: '关于', link: '/aboutme.html' },
			{ text: 'GitHub', link: 'https://github.com/zhanglingco/zhanglingco.github.io' },
		]
	},
}
