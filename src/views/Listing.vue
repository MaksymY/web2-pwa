<template>
  <div class="listing">
    <h1 class="listing__title">The Stories.</h1>
    <ul class="listing__content">
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
        <router-link :to="`/Article/${ post.id }`"> Aller à l'article</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getArticles } from "@/api.js";

export default {
  name: "Listing",
  data: () => ({
    posts: [],
    img: ""
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
    .listing__content {
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
    .listing__card {
      position: relative;
      border-radius: 6px;
      background: rgba(0,0,0,0.35);
      &:first-of-type {
        grid-column: 1 / -1;
        justify-content: center;
        align-items: center;
        background: url("../assets/main.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .listing__card-image {
      position: absolute;
      border-radius: 6px;
      left: 0;
      z-index: -1;
    }
    .listing__card-title {
      color: $color_white_1;
      font-weight: bold;
      text-transform: capitalize;
      font-size: 30px;
      padding: 0 10px;
    }
  }
</style>
