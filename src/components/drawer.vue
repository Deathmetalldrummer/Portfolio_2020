<template lang="pug">
div
  v-app-bar-nav-icon(@click="drawer = !drawer" fixed right x-large v-if="$vuetify.breakpoint.width < 768").drawerToggle
  v-navigation-drawer(v-model="drawer" :src='bg' app mobile-breakpoint="768").nav-drawer
    v-list(link).text-center
      v-list-item.justify-center
        v-list-item-avatar.avatar(size='150')
          img(src='https://sun9-57.userapi.com/c858232/v858232044/6e65b/njwWalSDTkM.jpg')
      v-list-item.text-center
        v-list-item-content
          v-list-item-title.title Терёхин Кирилл
          v-list-item-subtitle.subtitle HTML-программист
      v-list-item(v-for='item in items' :key='item.title' link :to="item.link")
        v-list-item-content
          v-list-item-title {{ item.title }}
</template>

<script>
	export default {
		name: 'Drawer',
		data () {
			return {
				drawer: this.$vuetify.breakpoint.width >= 768,
				items: [
					{
						title: 'Главная',
						link: '/'
					},
					{
						title: 'Опыт',
						link: '/experience'
					},
					{
						title: 'Навыки',
						link: '/skills'
					},
					{
						title: 'Портфолио',
						link: '/portfolio'
					},
					{
						title: 'Контакты',
						link: '/contact'
					}
				]
			}
		},
		computed: {
			bg () {
				return {
					gradient: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
					src: './images/sidebar_bg/sidebar_bg1.jpg'
				}
			}
		}
	}
</script>

<style scoped lang="sass">
  .nav-drawer
    z-index: 1000
  .drawerToggle
    top: 16px
    z-index: 1001
  .avatar
    margin: 0 !important
</style>
