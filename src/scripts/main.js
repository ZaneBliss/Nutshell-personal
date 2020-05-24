import welcome from "./welcome/welcome.js"
import chat from "./chat/chat.js"
import user_api from "./data-handling/user-data.js"
import dom from "./dom.js"

const site_wrapper = document.getElementById("site_wrapper")
let active_user = parseInt(sessionStorage.getItem("active_user"))

// Welcome container event listener
site_wrapper.addEventListener("click", () => {
    if (event.target.id == "enter") { 
        dom.remove_element("enter")
        dom.render_element(welcome.welcome_component.welcome_registration(), "welcome_form", false)
        
    } else if (event.target.id == "register") {
        welcome.create_dom_vals()
        if (welcome.empty_fields()) { 
            alert("Please enter all input fields.") 
        }
        else if (!welcome.matching_passwords()) { 
            alert("Passwords do not match.")
        }
        else if (!welcome.empty_fields() && welcome.matching_passwords()) { 
            const user_object = welcome.create_user()
            user_api.save_user(user_object).then( user => {
                sessionStorage.setItem("active_user", user.id)
                active_user = parseInt(sessionStorage.getItem("active_user"))
                dom.remove_element("welcome_container")
            })
        }
        
    }
})

site_wrapper.addEventListener("keypress", () => {
    if (event.target.id == "chat_input") {
        if (event.keyCode == 13) {
            let chat_object = chat.create_message(active_user)
            chat.chat_api.save_message(chat_object).then( message => {
                dom.render_message(message)
            })
        }
    } else if (event.target.id.startsWith("message--")) {
        if (event.keyCode == 13) {
            event.preventDefault()
            let messageToEdit = event.target.id.split("--")[1]
            
            
        }
    }
})