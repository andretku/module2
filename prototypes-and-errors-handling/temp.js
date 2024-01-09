let obj = {
    name: {
        user1: 'Aleks',
        user2: 'Tisza',
        user3: 'Andry'
    },
    city: 'Warsaw',
    gender: 'male',
    someFunction: function(value) {
        console.log(this.name[value] + ' from ' + this.city + ', ' + this.gender)
    }
}

obj.someFunction('user2')

// ======================================================

