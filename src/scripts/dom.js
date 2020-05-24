import chat from "./chat/chat.js"
import welcome_components from  "./welcome/welcome-components.js"

function show_all() {
    remove_element("welcome_container")
    render_chat()
}

// Generic helper functions
function render_element(element, container, multiple) {
    if (!multiple) {
        document.getElementById(container).innerHTML = element
    } else if (multiple) {
        document.getElementById(container).innerHTML += element
    }
}

function remove_element(element) {
    document.getElementById(element).remove()
}


// Chat 
function render_chat() {
    render_element(chat.chat_components.chat_container(), "site_wrapper")
    chat.chat_api.get_messages().then(messages => {
        messages.sort((a, b) => b.id - a.id);
        messages.forEach(message => {
                render_element(chat.chat_components.chat_message(message), "chat_field", true)
        });
    })
}
function render_message(message_object) {
    render_element(chat.chat_components.chat_message(message_object), "chat_field", true)
    document.getElementById("chat_input").value = ""
}

render_element(welcome_components.welcome_container(), "site_wrapper", false)

show_all()

export default { render_element, remove_element, render_message }