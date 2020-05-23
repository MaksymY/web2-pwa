<template>
  <div class="favorit">
    <h1 class="favorit__title">Your Favorit.</h1>
    <ul class="favorit__content">
      <li 
        class="favorit__card"
        v-for="(post, i) in favorie"
        :key="i"
      >
        <img
          v-if="post.id != 1"
          class="favorit__card-image"
          :src="getImage(post.id)"
          alt="main image of the article"
        >
        <p class="favorit__card-title">{{post.title}}</p>
        <router-link
          class="favorit__button"
          :to="{ name: 'Article', params: { post }}"
        >
          <svg class="favorit__button-icon">
            <use href="#SeeIcon"/>
          </svg>
          <p class="favorit__button-text">see the article</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "favorit",
  data: () => ({
    img: "",
  }),
  //test
  watch: {
    favorie(newArticle) {
      localStorage.name = newArticle;
    }
  },
  computed: {
		...mapState([
			"favorie",
    ]),
  },
  methods: {
    getImage(id) {
      return `https://picsum.photos/id/1${id}/300/400.jpg`;
    },
  },
}
</script>
<style lang="scss">
.favorit {
  text-align: center;
  margin: 60px 0 80px 0;

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
  @media (max-width: 550px) {
    margin: 30px 0 80px 0;
  }
}
</style>
