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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Listing",
  data: () => ({
		posts: [],
	}),
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(resp => resp.json())
      .then(data => this.posts = data)
  }
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