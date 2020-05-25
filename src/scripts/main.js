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
                dom.show_all()
            })
        }
        
    }
})

site_wrapper.addEventListener("keyup", () => {
    if (event.target.id == "chat_input") {
        if (document.getElementById("chat_id").value == "") {
            if (event.keyCode == 13) {
                let chat_object = chat.create_message(active_user)
                chat.chat_api.save_message(chat_object).then(dom.render_chat)
            }
        } else if (document.getElementById("chat_id").value != "") {
            if (event.keyCode == 13) {
                let message_id = document.getElementById("chat_id").value
                chat.edit_message(message_id).then(dom.render_chat)
            }
        }
    }
})
site_wrapper.addEventListener("click", () => {
    if (event.target.id.startsWith("edit--")){
        let message_id = event.target.id.split("--")[1]
        dom.prepopulate(message_id)
    }
    
})

export default active_user