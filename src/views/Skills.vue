<template lang="pug">
  v-card(raised elevation="10").content
    v-card-title.display-2 Навыки
    v-card-subtitle Мои суперспособности =)
    v-card-text
      .pb-3(v-for="i in skills")
        .title.pb-2 {{i.title}}
        v-hover(v-slot:default="{ hover }" v-for="x in i.items")
          v-btn(tag="span" :color="!hover ? 'grey darken-1' : 'grey lighten-5'" outlined rounded small).mr-3.mb-3 {{x}}

</template>

<script>

	export default {
		name: 'Skills',
		data () {
			return {
				message: 'Слава Одину, Skills работает!',
				skill: [
					'HTML',
					'HTML5',
					'Jade',
					'Pug',
					'CSS',
					'CSS3',
					'Sass',
					'SCSS',
					'js',
					'ES6',
					'jQuery',
					'jQuery UI',
					'Angular 2+',
					'Angular Material design',
					'Vue',
					'Vuex',
					'Vue-router',
					'Vuetify',
					'Firebase',
					'Bootstrap',
					'Git',
					'BEM',
					'SPA (Vue, Angular, React)',
					'Ajax',
					'Figma',
					'Avocode',
					'Zeplin',
					'Adobe Photoshop',
					'Adobe Illustrator',
					'Adobe XD',
					'CMS Wordpress',
					'OpenCart CMS',
					'Joomla CMS'
				],
				skills: [
					{
						title: 'Языки программирования:',
						items: [
							'HTML',
							'HTML5',
							'Jade',
							'Pug',
							'CSS',
							'CSS3',
							'Sass',
							'SCSS',
							'JavaScript',
							'ES6',
							'TypeScript'
						]
					},
					{
						title: 'Фрэймворки и библиотеки:',
						items: [
							'jQuery',
							'jQuery UI',
							'Angular 2+',
							'Angular Material design',
							'Vue',
							'Vuex',
							'Vue-router',
							'Vuetify',
							'Firebase',
							'Bootstrap'
						]
					},
					{
						title: 'Вспомогательные технологии:',
						items: [
							'Git',
							'BEM',
							'SPA (Vue, Angular, React)',
							'Ajax',
							'Figma',
							'Avocode',
							'Zeplin',
							'Adobe Photoshop',
							'Adobe Illustrator',
							'Adobe XD',
							'CMS Wordpress',
							'OpenCart CMS',
							'Joomla CMS'
						]
					}
				]
			}
		}
	}
</script>

<style scoped lang='sass'>
  .v-btn:hover
    color: white !important
</style>
