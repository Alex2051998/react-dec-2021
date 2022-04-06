export  const commentsServices = {
    getAllComments:() =>
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())

}