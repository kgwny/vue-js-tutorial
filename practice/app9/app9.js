import Vue from 'vue';
import axios from 'axios';
require('es6-promise').polyfill();

var news = new Vue({
    el: '#test',
    data: {
        datalists:[],
    },
    created() {
        axios.get('test.json')
        .then(response => {
            this.datalists = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    },
});
