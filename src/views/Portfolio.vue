<template lang="pug">
  v-carousel(show-arrows-on-hover height="100vh" :hide-delimiter-background="true" :hide-delimiters="false").particleLayer
    v-carousel-item(v-for='(item,i) in portfolio' :key='i').carouselItem
      v-container(fluid).height
        v-row(align="center" justify="center").height
          v-col(xs="12" sm="6")
            .portfolio__description
              h3.headline {{item.name}}
              br
              p.body-2(v-html="item.desc")
              ul
                li(v-for="tech in item.tech") {{tech}}
              br
              v-btn(v-if='item.view' :href="item.view" target="_blank" outlined).mr-2 View
              v-btn(v-if='item.code' :href="item.code" target="_blank" outlined) Code
          v-col(xs="12" sm="6")
            img(:src="item.src" :alt="item.alt").carouselItem__image
</template>

<script>
	export default {
		name: 'Portfolio',
		data () {
			const publicPath = process.env.BASE_URL
			return {
				portfolio: [
					{
						src: publicPath + './images/RNTO.jpg',
						alt: 'RNTO',
						name: 'RNTO',
						code: null,
						view: null,
						desc: 'Админка для сайта визового центра.Проект с нуля, единственный фронтист на проекте.<br />Март - Июль 2020',
						tech: ['Angular 9', 'NgRx', 'Material Angular', 'RESTful API']
					},
					{
						src: publicPath + './images/TableUI.png',
						alt: 'TableUI',
						name: 'Table UI',
						code: 'https://github.com/Deathmetalldrummer/TableUI',
						view: 'https://deathmetalldrummer.github.io/TableUI/',
						desc: 'Тестовое задание.<br />Май - Август 2020',
						tech: ['Vue', 'Vuex']
					},
					{
						src: publicPath + './images/GitHubSearch.png',
						alt: 'GitHubSearch',
						name: 'GitHubSearch',
						code: 'https://github.com/Deathmetalldrummer/GitHubSearch',
						view: 'https://deathmetalldrummer.github.io/GitHubSearch/',
						desc: 'Тестовое задание.<br />Июль 2020.',
						tech: ['Angular 9', 'NgRx', 'Material Angular', 'GitHub API']
					},
					{
						src: publicPath + './images/Agency.jpg',
						alt: 'Agency',
						name: 'Agency',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/Agency/',
						view: 'https://kirk-terekhin.github.io/Landings/Agency/',
						desc: 'Верстка лэндинга для практики.<br />2015',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive']
					},
					{
						src: publicPath + './images/CorporateLandingPage.jpg',
						alt: 'Corporate Landing Page',
						name: 'Corporate Landing Page',
						code: 'https://github.com/Kirk-Terekhin/Corporate-Landing-Page/',
						view: 'https://kirk-terekhin.github.io/Corporate-Landing-Page/',
						desc: 'Верстка лэндинга для практики.<br />2017',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive']
					},
					{
						src: publicPath + './images/Logstyle.jpg',
						alt: 'Log-style',
						name: 'Log-style',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/logstyle/',
						view: 'https://kirk-terekhin.github.io/Landings/logstyle',
						desc: 'Копия сайта log-style.ru.<br />2015',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'WoW.js']
					},
					{
						src: publicPath + './images/Gift.jpg',
						alt: 'Gift.kg',
						name: 'Gift.kg',
						code: 'https://github.com/Kirk-Terekhin/Gift/',
						view: 'https://giftkg.000webhostapp.com/',
						desc: 'Создание магазина новогодних подарков на CMS OpenCart.<br />Ноябрь - Декабрь 2014',
						tech: ['HTML5', 'CSS3', 'OpenCart CMS']
					},
					{
						src: publicPath + './images/TZ.jpg',
						alt: 'TZ',
						name: 'TZ',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/TZ/',
						view: 'https://kirk-terekhin.github.io/Landings/TZ/',
						desc: 'Тестовое задание.<br />2015',
						tech: ['HTML5', 'CSS3', 'Adaptive', 'Responsive']
					},
					{
						src: publicPath + './images/LandingPage.jpg',
						alt: 'Landing Page',
						name: 'Landing Page',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/LandingPage/',
						view: 'https://kirk-terekhin.github.io/Landings/LandingPage/',
						desc: 'Верстка лэндинга для практики.<br />2016',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive']
					},
					{
						src: publicPath + './images/NightVision.jpg',
						alt: 'NightVision',
						name: 'NightVision',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/NightVision/',
						view: 'https://kirk-terekhin.github.io/Landings/NightVision/',
						desc: 'Верстка лэндинга для практики.<br />2015',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive']
					},
					{
						src: publicPath + './images/Bootstrap.jpg',
						alt: 'Bootstrap',
						name: 'Bootstrap',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/Bootstrap/',
						view: 'https://kirk-terekhin.github.io/Landings/Bootstrap/',
						desc: 'Верстка лэндинга для практики.Bootstrap.<br />2015',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive']
					},
					{
						src: publicPath + './images/Sakura.jpg',
						alt: 'Sakura',
						name: 'Sakura',
						code: 'https://github.com/Kirk-Terekhin/Sakura/',
						view: 'https://kirk-terekhin.github.io/Sakura/',
						desc: 'Верстка сайта.<br />Декабрь 2015',
						tech: ['HTML5', 'CSS3', 'jQuery', 'Adaptive', 'Responsive']
					},
					{
						src: publicPath + './images/PageOnlineStore.jpg',
						alt: 'PageOnlineStore',
						name: 'PageOnlineStore',
						code: 'https://github.com/Kirk-Terekhin/PageOnlineStore/',
						view: 'https://kirk-terekhin.github.io/PageOnlineStore/',
						desc: 'Верстка страницы интернет магазина для практики.<br />Апрель 2016',
						tech: ['HTML5', 'CSS3', 'jQuery']
					},
					{
						src: publicPath + './images/Karacenter.jpg',
						alt: 'KaraCenter',
						name: 'KaraCenter',
						code: 'https://github.com/Kirk-Terekhin/KaraCenter',
						view: 'https://karacenterkg.000webhostapp.com/',
						desc: 'Создание Landing Page на CMS Joomla.<br />2015',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'CMS Joomla']
					},
					{
						src: publicPath + './images/Connect.jpg',
						alt: 'Connect.kg',
						name: 'Connect.kg',
						code: 'https://github.com/Kirk-Terekhin/Connect',
						view: 'https://connect-kg.000webhostapp.com/',
						desc: 'Колл центр Connect. CMS Joomla.<br />2016',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'CMS Joomla']
					},
					{
						src: publicPath + './images/Family.jpg',
						alt: 'Family.kg',
						name: 'Family.kg',
						code: 'https://github.com/Kirk-Terekhin/Family',
						view: 'https://familykg.000webhostapp.com/',
						desc: 'Дом отдыха "Семья". CMS Joomla.<br />2015',
						tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'CMS Joomla']
					},
					{
						src: publicPath + './images/Toe-to-Toes.jpg',
						alt: 'Toe to Toes',
						name: 'Toe to Toes',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/logstyle/',
						view: 'https://kirk-terekhin.github.io/Landings/logstyle',
						desc: '...<br /> 2014',
						tech: ['HTML5', 'CSS3']
					},
					{
						src: publicPath + './images/DrumTab.jpg',
						alt: 'Drum Tab',
						name: 'Drum Tab',
						code: 'https://github.com/Kirk-Terekhin/Drum-Tab',
						view: 'https://ragnarokdrum.stackblitz.io/list',
						desc: 'Первое приложение на Angular (4v).Без стилей,только функционал.<br />Май 2017',
						tech: ['HTML5', 'CSS3', 'Angular']
					},
					{
						src: publicPath + './images/YgarockAPP.jpg',
						alt: 'YgarockAPP',
						name: 'YgarockAPP',
						code: 'https://github.com/Deathmetalldrummer/YgarockAPP/',
						view: 'https://deathmetalldrummer.github.io/YgarockAPP/source/build/',
						desc: '...<br />Сентябрь 2019',
						tech: ['HTML5', 'CSS3', 'jQuery', 'Bootstrap']
					}
				]
			}
		}
	}
</script>

<style scoped lang='sass'>
  .height
    height: 100%

  .carouselItem
    width: 85%
    margin: auto

  .carouselItem__image
    margin: auto
    max-height: 90vh
    max-width: 100%
    display: block
</style>
