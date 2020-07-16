<template lang="pug">
  v-app
    Drawer
    v-main
      transition(name="slide-fade" mode="out-in")
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
  .v-main__wrap {
    overflow: hidden;
  }
  .nav-drawer .v-responsive__content {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }

  .v-sheet.v-list:not(.v-sheet--outlined) {
    background-color: transparent;
  }

  // animation: rubberBand 2s both infinite;
  @keyframes rubberBand {
    0%, 10%, 45%, 100% {
      transform: scale(1);
    }
    21% {
      transform: scaleY(1.35) scaleX(0.75)
    }
    25% {
      transform: scaleY(0.75) scaleX(1.25)
    }
    35% {
      transform: scaleY(1.15) scaleX(0.85)
    }
  }

  // animation: tada 2.2s both infinite
  @keyframes tada {
    0% {
      transform: scale(1)
    }
    10% {
      transform: scale(.8) rotate(-10deg)
    }
    20%, 26%, 32%, 38%, 44%, 50% {
      transform: scale(1.2) rotate(10deg)
    }
    23%, 29%, 35%, 41%, 47% {
      transform: scale(1.2) rotate(-10deg)
    }
    53% {
      transform: scale(1)
    }
    100% {
      transform: scale(1)
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease-out;
  }
  .slide-fade-leave-active {
    transition: all .7s ease-in;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(15em);
    opacity: 0;
  }
</style>
