<template>
    <div class="article">
        <p class="article__title">{{post.title}}</p>
        <p class="article__text">{{post.body}}</p>
		<img class="article__image" :src="getImage(post.id)">
		<button @click="addFavorite(post)">test</button>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
	name: "Article",
	data: () => ({
		post: [],
	}),
	created() {
		this.post = this.$route.params.post;
	},
	methods: {
		...mapActions([
			"addToFavorite",
		]),
		addFavorite(article) {
			this.addToFavorite(article)
		},
		getImage(id) {
			return `https://picsum.photos/id/1${id}/400/200.jpg`;
		},
	},
}
</script>
<style lang="scss">
	.article {
		text-align: center;
		padding: 50px 20px;

		&__title {
			font-size: 30px;
			font-weight: bold;

		}
	}
</style>