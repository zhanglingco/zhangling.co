/**
 * 关于我
 */
// TODO: 样式、内容
<template lang="pug">
.container
	Component_Timeline(:list="$page.frontmatter.experience")
</template>

<script>
export default {
	data: () =>({
	})
}
</script>

<style lang="stylus" scoped>
.container
	position absolute
	top 50%
	left 50%
	transform translate(-50%, -50%)
</style>
