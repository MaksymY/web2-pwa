<template>
  <div class="listing">
    <h1 class="listing__title">The Stories.</h1>
    <Loader v-if="!posts"/>
    <ul v-else class="listing__content">
      <li 
        class="listing__card"
        v-for="(post, i) in posts"
        :key="i"
      >
        <img
          v-if="post.id != 1"
          class="listing__card-image"
          :src="getImage(post.id)"
          alt="main image of the article"
        >
        <p class="listing__card-title">{{post.title}}</p>
        <router-link
          class="listing__button"
          :to="`/Article/${ post.id }`"
        >
          <svg class="listing__button-icon">
            <use href="#SeeIcon"/>
          </svg>
          <p class="listing__button-text">see the article</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getArticles } from "@/api.js";
import Loader from "@/components/Loader.vue"

export default {
  name: "Listing",
  components: {
    Loader,
  },
  data: () => ({
    posts: null,
    img: "",
	}),
  created() {
    getArticles()
      .then(data => this.posts = data);
  },
  methods: {
    getImage(id) {
      return `https://picsum.photos/id/1${id}/300/400.jpg`;
    },
  },
}
</script>
<style lang="scss">
  .listing {
    text-align: center;
    margin-top: 60px;

    &__content {
      list-style-type: none;
      padding: 0;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fill, 300px);
      grid-auto-rows: 400px;
      grid-gap: 25px;
      justify-content: center;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    &__card {
      position: relative;
      border-radius: 6px;
      background: rgba(0,0,0,0.50);
      &:first-of-type {
        grid-column: 1 / -1;
        justify-content: center;
        align-items: center;
        background: url("../assets/main.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    &__card-image {
      position: absolute;
      border-radius: 6px;
      left: 0;
      z-index: -1;
    }

    &__card-title {
      color: $color_white_1;
      font-weight: bold;
      text-transform: capitalize;
      font-size: 25px;
      padding: 0 10px;
      margin-top: 50%;
      &:first-child {
        margin-top: 100px;
      }
    }

    &__button {
      text-decoration:none;
      display: flex;
      align-items: center;
      background-color: $brand-color;
      margin: 0 30px;
      padding: 0 20px;
      border-radius: 5px;
      bottom: 55px;
      left: 0;
      right: 0;
      position: absolute;
      max-width: 200px;
    }

    &__button-icon {
      width: 20px;
      height: 20px;
      fill: $color_white_1;
    }

    &__button-text {
      color: $color_white_1;
      margin-left: 10px;
    }
  }
</style>
