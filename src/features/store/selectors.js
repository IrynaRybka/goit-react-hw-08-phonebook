export const selectNameContact = (state) => {
return state.contacts.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
})
}
