## silent - ログや警告の出力を抑止する

Vue.config.silent を true にすることにより、Vue のログや警告の出力を抑止します。<br>

```
Vue.config.silent = true
```

## devtools - 開発モードの切り替え

Vue.config.devtools は、開発モードのときは true、本番モードのときは false となります。<br>

```
Vue.config.devtools = true
```

## errorHandler - エラーハンドラ

Vue.config.errorHandler は、エラーが発生した際のエラーハンドラを定義します。<br>
err には throw された Error オブジェクト、<br>
vm にはエラーが発生した Vue コンポーネント、<br>
info には Vue 固有のエラー情報が渡されます。

```
Vue.config.errorHandler = function(err, vm, info) {...}
```

## warnHandler - 警告ハンドラ

Vue.config.warnHandler は、警告が発生したときの警告ハンドラを定義します。<br>
msg には警告メッセージ、<br>
vm にはエラーが発生した Vue コンポーネント、<br>
info には Vue 固有のエラー情報が渡されます。

```
Vue.config.warnHanler = function(msg, vm, trace) {...}
```

## ignoredElements - 無視エレメント

Vue.config.ignoredElements には、Vueの外部で作成された Webコンポーネント のカスタムタグなどで無視する対象を指定します。<br>
正規表現を用いることもできます。<br>

```
Vue.config.ignoredElements  [
    'my-custom-web-component',
    'another-web-component',
    /^ion-/
]
```

## keyCodes - キーコード

keyCodes は @keyup などで使用するキーコードを指定します。<br>
この例では、Alt-H キーに "alt-h" という名前を割り当てて、@keyup で使用しています。<br>
Alt-H キーが押下されるとハンドラが呼び出されます。<br>
18 は Altキー、72 は Hキー のキーコードです。<br>
ハイフンを含む名前の場合は "..." で囲みます。<br>

```
<div id="app-301">
    <input type="text" @keyup.alt-h="help">
</div>
<script>
    Vue.config.keyCodes = {
        h: 72,
        "alt-h": [ 18, 72 ]
    }
    var app301 = new Vue({
        el: '#app-301',
        methods: {
            help: function() {
                alert("Help ...");
            }
        }
    })
</script>
```

## performance - パフォーマンス

performance を true にすると、開発者のタイムライン機能でパフォーマンスデータを詳細に表示することができる。
開発モードでのみ使用可能です。

```
Vue.config.performance = true
```

## productionTip - プロダクションチップ

productionTip を false にすると、起動時の製品ヒント情報の出力を抑止します。

```
Vue.config.productionTip = false
```
