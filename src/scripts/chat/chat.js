import chat_api from "../data-handling/chat-data.js"
import chat_components from "../chat/chat-components.js"

const create_message = (active_user) => {
    let message = document.getElementById("chat_input").value
    return {
        message: message,
        userId: active_user
    }
}

export default { create_message, chat_api, chat_components}