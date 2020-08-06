<template lang="pug">
  div.timeline
    v-timeline
      v-timeline-item(v-for="item in experience" color="grey darken-1" icon-color="grey darken-4" icon="mdi--briefcase-outline")
        span(slot="opposite").font-regular.particleLayer
          | {{item.from}}
          br
          | {{item.to}}
          br
          | {{item.sum}}
        v-card.elevation-10.particleLayer
          v-card-title.title {{item.company}}
          v-card-subtitle.subtitle-1 {{item.companyInfo}}
          v-card-text
            .headline {{item.position}}
            template(v-for="(desc,i) in item.description")
              | {{desc}}
              br(v-if="i < (item.description.length - 1)")
</template>

<script>
	export default {
		name: 'Experience',
		data () {
			return {
				message: 'Слава Одину, Experience работает!',
				experience: [
					{
						from: 'Март 2020',
						to: 'Август 2020',
						sum: '6 месяцев',
						company: 'PandariumWEB',
						companyInfo: 'Ростов-на-Дону',
						position: 'Angular Frontend-developer',
						description: [
							'Удалённая работа единственным Frontend-разработчиком на проекте.',
							'Разработал Frontend часть админки визового центра (RNTO).',
							'В кратчайшие сроки разработал Frontend часть некролога.',
							'Помог в создании нескольких страниц, подключении API и настройке фильтров на страницах CRM системы.'
						]
					},
					{
						from: 'Февраль 2019',
						to: 'Oктябрь 2019',
						sum: '9 месяцев',
						company: 'Zensoft',
						companyInfo: 'Кыргызстан, zensoft.io',
						position: 'Верстальщик',
						description: [
							'Исправил множество ошибок в стилях веб-приложения.',
							'Раздробил монолитный код на компоненты (React.js).',
							'Вел активную разработку компонентов для CRM системы под Angular 7+'
						]
					},
					{
						from: 'Май 2018',
						to: 'Сентябрь 2018',
						sum: '5 месяцев',
						company: 'DevForge',
						companyInfo: 'Кыргызстан',
						position: 'Frontend-разработчик',
						description: [
							'Изучил фрэймворк Vue.js,',
							'Работал над банковской CRM системой на Vue.js.'
						]
					},
					{
						from: 'Май 2017 ',
						to: 'Июнь 2017',
						sum: '2 месяца',
						company: 'Velox Software',
						companyInfo: 'Кыргызстан',
						position: 'Frontend-разработчик (Стажер)',
						description: [
							'Прошел стажировку,',
							'Получил базовые знания и навыки для работы с фреймворком Angular 4-ой версии и выше.'
						]
					},
					{
						from: 'Сентябрь 2014',
						to: 'Март 2017',
						sum: '2 года 7 месяцев',
						company: 'Фриланс',
						companyInfo: 'Бишкек, Кыргызстан',
						position: 'Верстальщик / Frontend',
						description: [
							'Разработка сайтов на CMS:',
							'Joomla,',
							'OpenCart,',
							'Wordpress.'
						]
					}
				]
			}
		}
	}
</script>

<style scoped lang='sass'>
  .timeline
    width: 90%
    margin: auto
</style>
