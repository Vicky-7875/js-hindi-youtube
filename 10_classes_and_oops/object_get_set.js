const User = {
    _email: 'v@dfkmdsfmk.com',
    _pass: '12323n213jn',
    get email() {
        return this._email.toUpperCase()
    },

    set email(val) {
        this._email = val
    }
}


const tea = Object.create(User);
console.log(tea.email)
