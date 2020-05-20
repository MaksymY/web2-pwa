export function getArticles() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
                .then(resp => resp.json())
                .catch(err => console.log(err))
}
