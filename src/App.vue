<template lang="pug">
  v-app
    Drawer
    v-main
      router-view
      vue-particles.particle(
        color="#dedede"
        :particleOpacity="0.4"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push")
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
    position: relative;
    padding: 2em 2.5em;
    min-height: calc(100% - 20px);
  }

  .particleLayer {
    position: relative;
    z-index: 100;
  }
  .particle {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    max-height: 100vh;
    opacity: 0.2;
  }

  .nav-drawer .v-responsive__content {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }
  .theme--dark.v-sheet {
    background-color: transparent;
  }
</style>
