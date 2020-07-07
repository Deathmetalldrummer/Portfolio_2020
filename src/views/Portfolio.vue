<template lang="pug">
  v-carousel(show-arrows-on-hover height="100vh" :hide-delimiter-background="true" :hide-delimiters="false")
    v-carousel-item(v-for='(item,i) in portfolio' :key='i').carouselItem
      v-container(fluid).height
        v-row(align="center" justify="center").height
          v-col(xs="12" sm="6")
            .portfolio__description
              .headline {{item.name}}
              br
              .body-2(v-html="item.desc")
              br
              v-btn(:href="item.view" target="_blank" light).mr-2 View
              v-btn(:href="item.code" target="_blank" light) Code
          v-col(xs="12" sm="6")
            img(:src="item.src" :alt="item.alt").carouselItem__image
</template>

<script>
	export default {
		name: 'Portfolio',
		data () {
			return {
				portfolio: [
					{
						src: 'https://kirk-terekhin.github.io/source/build/pictures/sites/Agency.jpg',
						alt: 'Agency',
						name: 'Agency',
						code: 'https://kirk-terekhin.github.io/Landings/Agency/',
						view: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/Agency/',
						desc: `
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
						src: 'https://kirk-terekhin.github.io/source/build/pictures/sites/CorporateLandingPage.jpg',
						alt: 'Corporate Landing Page',
						name: 'Corporate Landing Page',
						code: 'https://github.com/Kirk-Terekhin/Corporate-Landing-Page/',
						view: 'https://kirk-terekhin.github.io/Corporate-Landing-Page/',
						desc: `
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
						src: 'https://kirk-terekhin.github.io/source/build/pictures/sites/Logstyle.jpg',
						alt: 'Log-style',
						name: 'Log-style',
						code: 'https://github.com/Kirk-Terekhin/Landings/tree/gh-pages/logstyle/',
						view: 'https://kirk-terekhin.github.io/Landings/logstyle',
						desc: `
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
