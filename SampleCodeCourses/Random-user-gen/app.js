const app = Vue.createApp({
    data() {
        return {
            firstName: 'Mario',
            lastName: 'Vega',
            email: 'mario@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app');