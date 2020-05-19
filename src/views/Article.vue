<template>
    <div>
        <p>{{post.title}}</p>
        <p>{{post.body}}</p>
				<img :src="getImage(post.id)">
    </div>
</template>
<script>
import { getTheArticle } from "@/api.js"

export default {
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