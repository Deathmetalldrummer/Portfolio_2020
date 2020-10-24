<template lang="pug"particleLayer>
    .content
      v-container(fluid).pa-0
        v-row(no-gutters)
          v-col(xs="12" sm="12" md="12")
            .display-2.particleLayer Контакты
            .subtitle-1.particleLayer Звоните пишите!
            div
              br
          v-col(xs="12" sm="6" md="5")
            .body-1(v-html="sendSuccess" v-if="sendSuccess")
            v-form(v-else ref='form' v-model='valid' :lazy-validation='lazy' disabled).pt-2
              v-text-field(v-model='name' dense outlined :counter='32' :rules='nameRules' label='Имя' name="name")
              v-text-field(v-model='email' dense outlined :rules='emailRules' label='Мыло' required name="email")
              v-textarea(v-model='text' dense outlined :rules='textRules' label='Текст' name="text")
              p(v-html="sendError" v-if="sendError").red--text
              v-btn(:disabled='!valid' light color='white' @click='send($event)' block type="submit")
                | Отправить

          v-col(xs="12" offset-md="1" sm="4" md="4")
            v-list.pa-0
              v-list-item.particleLayer
                v-list-item-icon
                  v-icon(large) mdi-map-marker-outline
                v-list-item-content
                  v-list-item-title Location
                  v-list-item-subtitle Bishkek/Kyrgyzstan

              v-list-item.particleLayer
                v-list-item-icon
                  a(href="mailto:kirk.terekhin@gmail.com" target="_blank").linkIcon
                    v-icon(large) mdi-email
                v-list-item-content
                  v-list-item-title E-mail
                  v-list-item-subtitle kirk.terekhin@gmail.com

              v-list-item.particleLayer
                v-list-item-icon
                  a(href="tel:+996778363380" target="_blank").linkIcon
                    v-icon(large) mdi-phone
                v-list-item-content
                  v-list-item-title Phone
                  v-list-item-subtitle +996 778 36 33 80

              v-list-item.particleLayer
                v-list-item-icon
                  a(href="tg://resolve?domain=kirk_terekhin" target="_blank").linkIcon
                    v-icon(large) mdi-telegram
                v-list-item-content
                  v-list-item-title Telegram
                  v-list-item-subtitle kirk_terekhin

              v-list-item.particleLayer
                v-list-item-icon
                  a(href="skype:kirk.terekhin" target="_blank").linkIcon
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
		computed: {
			sendSuccess () { return this.$store.getters.sendSuccess },
			sendError () { return this.$store.getters.sendError }
		},
		methods: {
			send ($event) {
				$event.preventDefault()
				this.$refs.form.validate()
				if (this.valid) {
					const payload = {
						name: this.name,
						text: this.text,
						email: this.email
					}
					this.$store.dispatch('sendMail', payload)
				}
			}
		}
	}
</script>

<style scoped lang='sass'>
  .linkIcon
    text-decoration: none
    &:hover
      animation: tada 2s both infinite
</style>
