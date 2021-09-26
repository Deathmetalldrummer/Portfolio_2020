<template lang="pug">
  vue-easy-lightbox(
      escDisabled
      :moveDisabled='false'
      :visible='isShow'
      :imgs='src'
      :index='index'
      :loop='true'
      @hide='handleHide').particleLayer
</template>

<script>
    import VueEasyLightbox from 'vue-easy-lightbox'

    export default {
        name: 'ImageGallery',
        props: {
            isShow: Boolean,
            src: Array
        },
        components: {
            VueEasyLightbox
        },
        data () {
            return {
                index: 0,
                message: 'Слава Одину, ImageGallery работает!'
            }
        },
        methods: {
            handleHide () {
                this.$emit('hide')
            }
        }
    }
</script>

<style scoped lang="sass"></style>
