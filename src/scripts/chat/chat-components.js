const chat_container = () => {
    return `
    <div id="chat_container">
    <input id="chat_id" type="hidden" value="">
    <input id="chat_input" type="text">
    <div id="chat_field"></div>
    </div>`
}

const chat_message = (message_object) => {
    return `
    <div id="message_container--${message_object.id}">
    <span id="username">${message_object.user.username}: </span>
    <span id="message--${message_object.id}">${message_object.message}</span>
    </div>`
}

const edit_btn = (id) => {
    return `<button type="submit" id="edit--${id}">edit</button>`
}

export default { chat_container, chat_message, edit_btn }