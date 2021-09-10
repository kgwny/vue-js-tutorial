var app = new Vue({
    el: '#app',
    data: {
    cities: []
    },
    methods: {
        async getCities() {
        var url = 'http://localhost/tmp/json/cities.json'
        await axios.get(url).then(x => { this.cities = x.data })
        }
    },
    mounted() {
        this.getCities()
    }
})
