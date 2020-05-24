const chat_api = {
    save_message(object) {
        return fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
    },
    get_messages() {
        return fetch(`http://localhost:8088/messages`) 
            .then(response => response.json())
    }
}

export default chat_api