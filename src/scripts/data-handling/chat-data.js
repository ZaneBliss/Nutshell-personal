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
        return fetch(`http://localhost:8088/messages?_expand=user`) 
            .then(response => response.json())
    },
    get_message(id) {
        return fetch(`http://localhost:8088/messages?_expand=user/${id}`) 
            .then(response => response.json())
    },
    edit_message(id, obj) {
        return fetch(`http://localhost:8088/messages/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj)
        }).then(response => response.json());
      }
}

export default chat_api