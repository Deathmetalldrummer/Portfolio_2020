<template lang="pug">
  .main
    h1.main__title Терёхин Кирилл
    p.main__subtitle Angular Frontend-разработчик
    br
    v-btn(outlined href="https://hh.ru/resume/aabd3f94ff09e72b7d0039ed1f50446d4b6e33" target="_blank").particleLayer
      span.main__btnText Резюме
      v-icon mdi-launch

</template>

<script>
	export default {
		name: 'Main',
		data () {
			return {
				message: 'Слава Одину, Main работает!'
			}
		}
	}
</script>

<style scoped lang='sass'>
  .main
    width: 100%
    height: 100%
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
  .main__title
    text-align: center
    font-size: 300%
    @media (max-width: 768px)
      font-size: 200%
  .main__subtitle
    text-align: center
    font-size: 140%
    @media (max-width: 768px)
      font-size: 120%
  .main__btnText
    margin-right: 0.5em
</style>
