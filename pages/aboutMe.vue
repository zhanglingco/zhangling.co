/**
 * 关于我
 */
<template lang="pug">
.container
	Timeline(:list="experience")
</template>

<script>
import Timeline from '~/components/Timeline.vue'

export default {
  data: () =>({
    experience: [{
      time: '2019年4月',
      text: '就读人民大学，计算机硕士学位研修班',
      icon: 'el-icon-more',
      type: 'primary',
      size: 'large'
    }, {
      time: '2017年7月',
      text: '加入欣和企业，任上海IT技术总负责人',
      size: 'large',
      type: 'success'
    }, {
      time: '2014年10月 ~ 2017年7月',
      text: '历经平安好房、好屋中国、某创业公司，任技术专家和 Team Leader',
      text2: '技术高速积累阶段',
      type: 'danger'
    }, {
      time: '2014年6月',
      text: '毕业于皖西学院，获得工学学士学位',
      type: 'primary',
    }, {
      time: '2013年10月',
      text: '皖院校园商城（校内创业）',
      type: 'info'
    }, {
      time: '2013年7月',
      text: '自学前端'
    }]
	}),

	components: { Timeline }
}
</script>

<style lang="stylus" scoped>
.container
	position absolute
	top 50%
	left 50%
	transform translate(-50%, -50%)
</style>
