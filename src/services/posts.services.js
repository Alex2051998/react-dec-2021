export  const postsServices = {
    getAllPosts:() =>
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())

}