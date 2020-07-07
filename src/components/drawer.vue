<template lang="pug">
  v-navigation-drawer(:src='bg' app mobile-breakpoint="768").nav-drawer
    v-list(link).text-center
      v-list-item.justify-center
        v-list-item-avatar.avatar(size='150')
          img(src='https://sun9-57.userapi.com/c858232/v858232044/6e65b/njwWalSDTkM.jpg')
      v-list-item.text-center
        v-list-item-content
          v-list-item-title.title &Tcy;&iecy;&rcy;&iocy;&khcy;&icy;&ncy; &Kcy;&icy;&rcy;&icy;&lcy;&lcy;
          v-list-item-subtitle.subtitle &Pcy;&softcy;&yacy;&ncy;&ycy;&jcy; Vue.js &mcy;&acy;&scy;&tcy;&iecy;&rcy;
      v-list-item(v-for='item in items' :key='item.title' link :to="item.link")
        v-list-item-content
          v-list-item-title {{ item.title }}
</template>

<script>
	export default {
		name: 'Drawer',
		data () {
			return {
				items: [
					{
						title: 'About Me',
						link: '/'
					},
					{
						title: 'Experience',
						link: '/experience'
					},
					{
						title: 'Skills',
						link: '/skills'
					},
					{
						title: 'Portfolio',
						link: '/portfolio'
					},
					{
						title: 'Contact',
						link: '/contact'
					}
				]
			}
		},
		computed: {
			bg () {
				return {
					gradient: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
					src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg'
				}
			}
		}
	}
</script>

<style scoped lang="sass">
  .avatar
    margin: 0 !important
</style>
