<template lang="pug">
  v-carousel(show-arrows-on-hover height="100vh" :hide-delimiter-background="true" :hide-delimiters="false").particleLayer
    v-carousel-item(v-for='(item,i) in portfolio' :key='i').carouselItem
      v-container(fluid).height
        v-row(align="center" justify="center").height
          v-col(xs="12" sm="6")
            .portfolio__description
              .headline {{item.name}}
              br
              .body-2(v-html="item.html")
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
						number: 1,
						src: publicPath + './images/Agency.jpg',
						alt: 'Agency',
						name: 'Agency',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/Agency/',
						view: 'https://kirk-terekhin.github.io/Landings/Agency/',
            desc: 'Верстка лэндинга для практики.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive'],
            html: `
                           <p>Верстка лэндинга для практики.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                            </ul>
                            `
					},
					{
						number: 2,
						src: publicPath + './images/CorporateLandingPage.jpg',
						alt: 'Corporate Landing Page',
						name: 'Corporate Landing Page',
						code: 'https://github.com/Kirk-Terekhin/Corporate-Landing-Page/',
						view: 'https://kirk-terekhin.github.io/Corporate-Landing-Page/',
            desc: 'Верстка лэндинга для практики.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive'],
            html: `
                           <p>Верстка лэндинга для практики.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                            </ul>
                            `
					},
					{
            number: 3,
            src: publicPath + './images/Logstyle.jpg',
						alt: 'Log-style',
						name: 'Log-style',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/logstyle/',
						view: 'https://kirk-terekhin.github.io/Landings/logstyle',
            desc: 'Копия сайта log-style.ru.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'WoW.js'],
						html: `
                           <p>Копия сайта log-style.ru.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                                <li>WoW.js</li>
                            </ul>
                            `
					},
          {
            number: 4,
            src: publicPath + './images/Gift.jpg',
						alt: 'Gift.kg',
						name: 'Gift.kg',
						code: 'https://github.com/Kirk-Terekhin/Gift/',
						view: 'https://giftkg.000webhostapp.com/',
            desc: 'Создание магазина новогодних подарков на CMS OpenCart.',
            tech: ['HTML5', 'CSS3', 'OpenCart CMS'],
						html: `
                           <p>Создание магазина новогодних подарков на CMS OpenCart.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>OpenCart CMS</li>
                            </ul>
                            `
					},
          {
            number: 5,
            src: publicPath + './images/TZ.jpg',
						alt: 'TZ',
						name: 'TZ',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/TZ/',
						view: 'https://kirk-terekhin.github.io/Landings/TZ/',
            desc: 'Тестовое задание.',
            tech: ['HTML5', 'CSS3', 'Adaptive', 'Responsive'],
						html: `
                           <p>Тестовое задание.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                            </ul>
                            `
					},
          {
            number: 6,
            src: publicPath + './images/LandingPage.jpg',
						alt: 'Landing Page',
						name: 'Landing Page',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/LandingPage/',
						view: 'https://kirk-terekhin.github.io/Landings/LandingPage/',
            desc: 'Верстка лэндинга для практики.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive'],
						html: `
                           <p>Верстка лэндинга для практики.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                            </ul>
                            `
					},
          {
            number: 7,
            src: publicPath + './images/NightVision.jpg',
						alt: 'NightVision',
						name: 'NightVision',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/NightVision/',
						view: 'https://kirk-terekhin.github.io/Landings/NightVision/',
            desc: 'Верстка лэндинга для практики.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive'],
						html: `
                           <p>Верстка лэндинга для практики.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                            </ul>
                            `
					},
          {
            number: 8,
            src: publicPath + './images/Bootstrap.jpg',
						alt: 'Bootstrap',
						name: 'Bootstrap',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/Bootstrap/',
						view: 'https://kirk-terekhin.github.io/Landings/Bootstrap/',
            desc: 'Верстка лэндинга для практики.Bootstrap.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive'],
						html: `
                           <p>Верстка лэндинга для практики.Bootstrap.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                            </ul>
                            `
					},
          {
            number: 9,
            src: publicPath + './images/Sakura.jpg',
						alt: 'Sakura',
						name: 'Sakura',
						code: 'https://github.com/Kirk-Terekhin/Sakura/',
						view: 'https://kirk-terekhin.github.io/Sakura/',
            desc: 'Верстка сайта.',
            tech: ['HTML5', 'CSS3', 'jQuery', 'Adaptive', 'Responsive'],
						html: `
                           <p>Верстка сайта.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>jQuery</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                            </ul>
                            `
					},
          {
            number: 10,
            src: publicPath + './images/PageOnlineStore.jpg',
						alt: 'PageOnlineStore',
						name: 'PageOnlineStore',
						code: 'https://github.com/Kirk-Terekhin/PageOnlineStore/',
						view: 'https://kirk-terekhin.github.io/PageOnlineStore/',
            desc: 'Верстка страницы интернет магазина для практики.',
            tech: ['HTML5', 'CSS3', 'jQuery'],
						html: `
                           <p>Верстка страницы интернет магазина для практики.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>jQuery</li>
                            </ul>
                            `
					},
          {
            number: 11,
            src: publicPath + './images/Karacenter.jpg',
						alt: 'KaraCenter',
						name: 'KaraCenter',
						code: 'https://github.com/Kirk-Terekhin/KaraCenter',
						view: 'https://karacenterkg.000webhostapp.com/',
            desc: 'Создание Landing Page на CMS Joomla.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'CMS Joomla'],
						html: `
                           <p>Создание Landing Page на CMS Joomla.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                                <li>CMS Joomla</li>
                            </ul>
                            `
					},
          {
            number: 12,
            src: publicPath + './images/Connect.jpg',
						alt: 'Connect.kg',
						name: 'Connect.kg',
						code: 'https://github.com/Kirk-Terekhin/Connect',
						view: 'https://connect-kg.000webhostapp.com/',
            desc: 'Колл центр Connect. CMS Joomla.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'CMS Joomla'],
						html: `
                           <p>Колл центр Connect. CMS Joomla.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                                <li>CMS Joomla</li>
                            </ul>
                            `
					},
          {
            number: 13,
            src: publicPath + './images/Family.jpg',
						alt: 'Family.kg',
						name: 'Family.kg',
						code: 'https://github.com/Kirk-Terekhin/Family',
						view: 'https://familykg.000webhostapp.com/',
            desc: 'Дом отдыха "Семья". CMS Joomla.',
            tech: ['HTML5', 'CSS3', 'Bootstrap', 'Adaptive', 'Responsive', 'CMS Joomla'],
						html: `
                           <p>Дом отдыха "Семья". CMS Joomla.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Adaptive</li>
                                <li>Responsive</li>
                                <li>CMS Joomla</li>
                            </ul>
                            `
					},
          {
            number: 14,
            src: publicPath + './images/Toe-to-Toes.jpg',
						alt: 'Toe to Toes',
						name: 'Toe to Toes',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/logstyle/',
						view: 'https://kirk-terekhin.github.io/Landings/logstyle',
            desc: '...',
            tech: ['HTML5', 'CSS3'],
						html: `
                           <p>...</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                            `
					},
          {
            number: 15,
            src: publicPath + './images/DrumTab.jpg',
						alt: 'Drum Tab',
						name: 'Drum Tab',
						code: 'https://github.com/Kirk-Terekhin/Drum-Tab',
						view: 'https://ragnarokdrum.stackblitz.io/list',
            desc: 'Первое приложение на Angular (4v).Без стилей,только функционал.',
            tech: ['HTML5', 'CSS3', 'Angular'],
						html: `
                           <p>Первое приложение на Angular (4v).Без стилей,только функционал.</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Angular</li>
                            </ul>
                            `
					},
          {
            number: 16,
            src: publicPath + './images/YgarockAPP.jpg',
						alt: 'YgarockAPP',
						name: 'YgarockAPP',
						code: 'https://github.com/Deathmetalldrummer/YgarockAPP/',
						view: 'https://deathmetalldrummer.github.io/YgarockAPP/source/build/',
            desc: '...',
            tech: ['HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
						html: `
                           <p>...</p>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                            </ul>
                            `
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
