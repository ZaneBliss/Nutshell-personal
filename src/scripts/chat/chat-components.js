const chat_container = () => {
    return `
    <div id="chat_container">
    <input id="chat_input" type="text">
    <div id="chat_field"></div>
    </div>`
}

const chat_message = (message_object) => {
    return `
    <div id="message_container--${message_object.id}">
    <span id="username">${message_object.userId}</span>
    <span id="message--${message_object.id}" contenteditable="true">${message_object.message}</span>
    </div>`
}

export default { chat_container, chat_message }