# Skeleton 6.0

+ Skeletonはレスポンシブ化された静的コーディングテンプレートです。
+ WebpackによってCSS・JSをビルドします。

## インストール

### 環境

Nodeのインストールが必要です。<br>
下記の開発環境での動作を保証します。

- Windows 10
- macOS Catalina, Big Sur
- Node v16.15.0
- npm v8.5.5

### インストール

ターミナルで下記コマンドを実行

```shell
npm ci
```

## CSS・JS の編集・ビルド方法

ビルドにはwebpackを使用しています。

### CSSの編集

Sassを使用して記述されています。<br>
Sass のソースコードは `/assets/sass` にあります。<br>
ビルドされたcssファイルは `/assets/css` に出力されます。

※ CSSのエントリーポイントは `/assets/sass` 内の style.scss と editor-style.scss のみです。<br>
追加・削除したい場合は webpack.config.dev.js 及び webpack.config.production.js を編集してください。

### JSの編集

Babelを使用してES5にコンパイルします。<br>
ビルド時に圧縮・難読化されます。<br>
JS のソースコードは `/assets/js` にあります。<br>
ビルドされたJSファイルは `/assets/js/min` に出力されます。<br>

※ JSのエントリーポイントは `/assets/js` 内の effect.js と loading.js のみです。<br>
追加・削除したい場合は webpack.config.dev.js 及び webpack.config.production.js を編集してください。

### ビルド

ターミナルで下記コマンドを実行。<br>
ビルドには開発用ビルド（sourceMap対応）と本番用ビルド（sourceMap非対応）があります。

**開発用ビルド**
```shell
npm run dev
```
または
```shell
npm run watch     # Sass, JSの変更を監視してビルド
```

**本番用ビルド**
```shell
npm run build
```

※ 本番用ビルドを実施すると既存の.mapファイルは削除されます。


## 対応ブラウザ

- Chrome
- Edge
- Fire fox
- Safari
- IE11
- iOS Safari
- Android Chirome


## お問い合わせ

Skeletonは 株式会社イッパイアッテナ が作成しています。

株式会社イッパイアッテナ<br>
[https://ippaiattena.co.jp/](https://ippaiattena.co.jp/)