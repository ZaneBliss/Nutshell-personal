function render_element(element, container) {
    document.getElementById(container).innerHTML = element
}

function remove_element(element) {
    document.getElementById(element).remove()
}

export default { render_element, remove_element }