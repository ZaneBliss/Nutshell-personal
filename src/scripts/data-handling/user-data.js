const user_api = {
    save_user(object) {
        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
    },
    get_user(id) {
        return fetch(`http://localhost:8088/users/${id}`) 
            .then(response => response.json())
    }
}

export default user_api