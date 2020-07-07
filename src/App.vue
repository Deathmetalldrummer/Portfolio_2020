<template lang="pug">
  v-app
    Drawer
    v-main
      router-view
</template>

<script>
	import Drawer from '@/components/drawer'

	export default {
		components: { Drawer },
		data: () => ({})
	}
</script>

<style lang="scss">
  body, html {
    overflow: auto !important;
  }

  .content {
    margin: 10px;
    padding: 10px;
    min-height: calc(100% - 20px);
  }

  .nav-drawer .v-responsive__content {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }

</style>
