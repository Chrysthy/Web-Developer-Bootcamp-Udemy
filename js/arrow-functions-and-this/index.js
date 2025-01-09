const person = {
    firstName: 'Chrystine',
    lastName: 'Martins',

    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullName());
        }, 3000);
    }
}

