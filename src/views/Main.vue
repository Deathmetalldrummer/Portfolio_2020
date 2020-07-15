<template lang="pug">
  .main
    h1.main__title Терёхин Кирилл
    p.main__subtitle Frontend-разработчик
    br
    v-btn(outlined href="https://hh.ru/resume/23a4d105ff077b4cae0039ed1f58564b627876" target="_blank").particleLayer
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
    font-size: 300%
  .main__subtitle
    font-size: 170%
  .main__btnText
    margin-right: 0.5em
</style>
