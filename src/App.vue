<template>
  <div class="app">
    <svg class="app__mobile-icon">
        <use href="#MainIcon"/>
    </svg>
    <div class="app__nav">
      <svg class="app__nav-icon">
        <use href="#MainIcon"/>
      </svg>
      <router-link 
        class="app__nav-link"
        exact-active-class="app__nav-link--active"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="app__nav-link"
        exact-active-class="app__nav-link--active"
        to="/Listing"
      >
        Listing
      </router-link>
      <router-link
        class="app__nav-link"
        exact-active-class="app__nav-link--active"
        to="/Favorie"
      >
        Favorie
      </router-link>
    </div>
    <router-view/>
    <TheIconsSet/>
  </div>
</template>

<script>
import TheIconsSet from "@/components/TheIconsSet.vue";
export default {
  name: "app",
  components: {
    TheIconsSet,
  }
}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &__nav {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 15px 25px;
  }

  &__mobile-icon {
    display: none;
  }

  &__nav-icon {
    width: 40px;
    height: 40px;
  }

  &__nav-link {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 20px;
    &:first-of-type{
      padding-left: 100px;
    }
    &--active {
      color: #42b983;
    }
  }
  @media (min-width: 550px) {
    &__nav {
      top: 0;
    }
  }
  @media (max-width: 550px) {
    &__mobile-icon {
      display: flex;
      text-align: center;
      width: 100vw;
      height: 50px;
    }
  
    &__nav {
      position: fixed;
      bottom: 0;
      background-color: $color_white_1;
      z-index: 100;
      width: 100%;
      padding: 15px 0;
    }
    &__nav-icon {
      display: none;
    }
  }
}
</style>
