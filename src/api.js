export function getArticles() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
                .then(resp => resp.json())
                .catch(err => console.log(err))
}

export function getTheArticle(article) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${article}`)
                .then(resp => resp.json())
                .catch(err => console.log(err))
}