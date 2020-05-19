<template>
  <div class="listing">
    <h1>This is listing page</h1>
    <ul class="listing__content">
      <li 
        class="listing__card"
        v-for="(post, i) in posts"
        :key="i"
      >
        <p>{{post.title}}</p>
        <router-link :to="`/Article/${ post.id }`"> Aller à l'article</router-link>
        <img :src="getImage(post.id)" alt="">
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
      return `https://picsum.photos/id/1${id}/400/200.jpg`;
    },
  },
}
</script>
<style lang="scss">
  .listing {
    .listing__content {
      list-style-type: none;
      padding: 0;
    }
    .listing__card {
      border: solid 1px black;
    }
  }
</style>
