<template lang="pug">
  v-card(raised elevation="10").content
    v-card-title.display-2 Контакты
    v-card-subtitle Звоните пишите!
    v-card-text
      v-container(fluid).pa-0
        v-row(no-gutters)
          v-col(xs="12" sm="6" md="5")
            v-form(ref='form' v-model='valid' :lazy-validation='lazy').pt-2
              v-text-field(v-model='name' dense outlined :counter='32' :rules='nameRules' label='Имя')
              v-text-field(v-model='email' dense outlined :rules='emailRules' label='Мыло' required)
              v-textarea(v-model='text' dense outlined :rules='textRules' label='Текст')
              v-btn(:disabled='valid' light color='white' @click='validate' block)
                | Отправить

          v-col(xs="12" offset-md="1" sm="6" md="6")
            v-list.pa-0
              v-list-item
                v-list-item-icon
                  v-icon(large) mdi-map-marker-outline
                v-list-item-content
                  v-list-item-title Location
                  v-list-item-subtitle Bishkek/Kyrgyzstan

              v-list-item
                v-list-item-icon
                  v-icon(large) mdi-email
                v-list-item-content
                  v-list-item-title E-mail
                  v-list-item-subtitle kirk.terekhin@gmail.com

              v-list-item
                v-list-item-icon
                  v-icon(large) mdi-phone
                v-list-item-content
                  v-list-item-title Phone
                  v-list-item-subtitle +996 778 36 33 80

              v-list-item
                v-list-item-icon
                  v-icon(large) mdi-telegram
                v-list-item-content
                  v-list-item-title Telegram
                  v-list-item-subtitle kirk.terekhin

              v-list-item
                v-list-item-icon
                  v-icon(large) mdi-skype
                v-list-item-content
                  v-list-item-title Skype
                  v-list-item-subtitle kirk.terekhin

</template>

<script>
	export default {
		name: 'Contact',
		data () {
			return {
				valid: true,
				name: '',
				nameRules: [
					v => (v.length <= 32) || 'Имя должно быть не больше 32 символов.'
				],
				email: '',
				emailRules: [
					v => !!v || 'Мыло обязательно!',
					v => /.+@.+\..+/.test(v) || 'Мыло не той фирмы'
				],
				text: '',
				textRules: [],
				lazy: false
			}
		},
		methods: {
			validate () {
				this.$refs.form.validate()
			}
		}
	}
</script>

<style scoped lang='sass'>
</style>
