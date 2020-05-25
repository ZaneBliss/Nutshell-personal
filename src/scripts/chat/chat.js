import chat_api from "../data-handling/chat-data.js"
import chat_components from "../chat/chat-components.js"
import active_user from "../main.js"

const create_message = (active_user) => {
    let message = document.getElementById("chat_input").value
    return {
        message: message,
        userId: active_user
    }
}

const edit_message = (id) => {
    let updated_obj = {
        message: document.getElementById("chat_input").value,
        userId: active_user
    }
    return chat_api.edit_message(id, updated_obj)
}

export default { create_message, chat_api, chat_components, edit_message}