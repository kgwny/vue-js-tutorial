
// tableHeader で順序を入れ替えたい場合は手動で行を書き換える
// unitName はfee列を表示するときに呼び出される
var app = new Vue({
    el: '#app',
    data: {
        tableHeader: [
            { "id": "name", "text": "商品名" },
            { "id": "fee", "text": "値段" },
            { "id": "id", "text": "ID" },
        ],
        tableData: [
            { "id": "012", "name": "お好み焼き", "fee": "500" },
            { "id": "023", "name": "生ビール", "fee": "400" },
            { "id": "034", "name": "かき氷", "fee": "300" },
        ],
        unitName: { "fee": "円" },
    },
})
