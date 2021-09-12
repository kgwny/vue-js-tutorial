var app = new Vue({
    el: '#app',
    data: {
        tableHeader: [
            { "id": "id", "text": "ID" },
            { "id": "name", "text": "商品名" },
            { "id": "fee", "text": "値段" }
        ],
        tableData: [
            { "id": "012", "name": "お好み焼き", "fee": "500" },
            { "id": "023", "name": "生ビール", "fee": "400" },
            { "id": "034", "name": "かき氷", "fee": "300" }
        ]
    }
})
