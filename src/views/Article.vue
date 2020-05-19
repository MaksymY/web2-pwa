<template>
    <div>
        <p>{{posts.title}}</p>
        <p>{{posts.body}}</p>
    </div>
</template>
<script>
export default {
    data: () => ({
		posts: [],
	}),
    created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${ this.$route.params.slug }`)
        .then(resp => resp.json())
        .then(data => this.posts = data)
    }
}
</script>