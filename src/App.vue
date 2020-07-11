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
    padding: 2em 2.5em;
    min-height: calc(100% - 20px);
  }

  .nav-drawer .v-responsive__content {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }
  .theme--dark.v-sheet {
    background-color: transparent;
  }
</style>
