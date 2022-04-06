export  const usersServices = {
    getAllUsers:() =>
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())

}