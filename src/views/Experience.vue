<template lang="pug">
  div.timeline
    v-timeline(:dense="mobileSM" :align-top="mobileSM")
      v-timeline-item(v-for="item in experience" color="grey darken-1" icon-color="grey darken-4" icon="mdi--briefcase-outline" :small="mobile")
        span(slot="opposite").font-regular.particleLayer
          | {{item.from}}
          br
          | {{item.to}}
          br
          | {{item.sum}}
        v-card.elevation-10.particleLayer
          v-card-title.title {{item.company}}
          v-card-subtitle.subtitle-1 {{item.companyInfo}}
            template(v-if="mobileSM")
              .caption {{item.from}} - {{item.to}}
              .caption {{item.sum}}
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
				experience: [
          {
            from: 'Март 2023',
            to: 'март 2024',
            sum: '1 год',
            company: 'Freelance',
            companyInfo: 'Владивосток',
            position: 'Angular Frontend Developer',
            description: [
              'Обновил ~10 проектов с 8-13-ой версии до 15-ой версии ангуляра, в том числе библиотеку компонентов;',
              'Поддерживал и развивал библиотеку компонентов;',
              'Добавил новый функционал, страницы, компоненты на проекты;',
              'Приобрел базовые навыки работы с GraphQL;',
              'Создал пару лэндингов для нужд компании;'
            ]
          },
          {
            from: 'Март 2022',
            to: 'Февраль 2023',
            sum: '1 год',
            company: 'ComfortSoft',
            companyInfo: 'Москва',
            position: 'Angular Frontend Developer',
            description: [
              'Исправил множество ошибок во фронтенд части сервиса;',
              'Расширил функционал некоторых компонентов;'
            ]
          },
          {
            from: 'Январь 2021',
            to: 'Декабрь 2021',
            sum: '1 год',
            company: 'Интеллект Технологии',
            companyInfo: 'Нижний Новгород',
            position: 'Frontend-разработчик (Aurelia)',
            description: [
              'Рефакторинг легаси на Aurelia.',
              'Исправление багов.',
              'Оптимизация SPA посредством разбиения запросов на сервер на более мелкие части, компоненты.'
            ]
          },
          {
            from: 'Октябрь 2020',
            to: 'Январь 2021',
            sum: '4 месяца',
            company: 'Freelance',
            companyInfo: 'Россия. Москва.',
            position: 'Angular Frontend Developer',
            description: [
              'Пара подработок на Angular:',
              'Исправил ошибку оплаты.',
              'Настроил библиотеку для работы с камерой и микрофоном (WebRTC), настроил комнату для общения (classroom).',
              'Создание графиков, настройка форм.'
            ]
          },
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
						to: 'Июль 2018',
						sum: '3 месяцев',
						company: 'DevForge',
						companyInfo: 'Кыргызстан',
						position: 'Frontend-разработчик',
						description: [
							'Изучил фреймворк Vue.js,',
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
						to: 'Январь 2016',
						sum: '1 год 5 месяцев',
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
		},
		computed: {
			mobile () {
				return this.$vuetify.breakpoint.width < 768
			},
			mobileSM () {
				return this.$vuetify.breakpoint.width < 1024
			}
		}
	}
</script>

<style scoped lang='sass'>
  .timeline
    width: 90%
    margin: auto
</style>
