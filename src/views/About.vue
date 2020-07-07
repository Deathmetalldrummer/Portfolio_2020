<template lang="pug">
  v-card(raised elevation="10").content
    v-card-title.display-1 About Me
    v-card-subtitle.body-1 Subtitle
    v-card-text Text
</template>

<script>
	export default {
		name: 'About',
		data () {
			return {
				message: 'Слава Одину, About работает!'
			}
		}
	}
</script>

<style scoped lang='sass'>
</style>
