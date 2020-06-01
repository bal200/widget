<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/complist">CompList</router-link>
    </div> -->
    <div class="view-container">
      <transition name="slide-left">
        <router-view class="child-view"/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CompList from "./views/CompList.vue";

@Component({
  components: {
    CompList
  }
})
export default class App extends Vue {
  // props
  @Prop() private vendor!: string;

  mounted() {
    console.log("vendor ", this.vendor);
  }
}
</script>

<style lang="scss">
/* grid */
//@import "~bootstrap/scss/bootstrap-grid";
// /* card */
// @import "~bootstrap/scss/mixins/_border-radius";
// @import "~bootstrap/scss/mixins/_hover";
// @import "~bootstrap/scss/_card";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 2rem;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.view-container {
	position: relative;
	overflow: hidden;
	//border: 1px solid greenyellow;
  //transition: height 1s ease;
  height: 1020px;
}
.child-view {
	// position: absolute;
	transition: all 0.3s ease;
}

.slide-left-enter {
	transform: translate(100%, 0);
}
.slide-left-enter-active {
	position: absolute;
	top: 0;
	width: 100%;
}
.slide-left-leave {
}
.slide-left-leave-active {
	transform: translate(-100%, 0);
}


// .slide-left-enter,
// .slide-right-leave-active {
// 	// opacity: 0;
// 	// -webkit-transform: translate(50px, 0);
// 	// transform: translate(50px, 0);
// }
// .slide-left-leave-active,
// .slide-right-enter {
// 	//opacity: 0;
// 	//-webkit-transform: translate(-50px, 0);
// 	//transform: translate(-50px, 0);
// }
</style>
