<template>
  <div id="q-app">
  	<transition name="aparecer" appear>
  		<router-view />
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	 /* Transition */
    .aparecer-enter {
        opacity: 0;
    }
    .aparecer-enter-active {
        transition: opacity 1s;
    }
    .aparecer-leave-to {
        opacity: 0;
    }
    .aparecer-leave-active {
        transition: opacity 1s;
    }
</style>
