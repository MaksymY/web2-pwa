<template>
    <div class="article">
        <p class="article__title">{{post.title}}</p>
        <p class="article__text">{{post.body}}</p>
		<img class="article__image" :src="getImage(post.id)">
    </div>
</template>
<script>
import { getTheArticle } from "@/api.js"

export default {
	name: "Article",
	data: () => ({
		post: [],
	}),
	created() {
		getTheArticle(this.$route.params.slug)
			.then(data => this.post = data)
	},
	methods: {
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