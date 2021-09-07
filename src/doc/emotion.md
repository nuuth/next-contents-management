# Emotion

https://www.npmtrends.com/@emotion/core-vs-styled-components-vs-@emotion/styled


## 概要

* **@emotion/core**
  * 現在は`@emotion/reactnn`
  * React で Emotion を使うときにはこれを選ぶ
  * <Global /> でグローバルスタイルが書ける?
* **@emotion/styled** 
  * Styled-Component を使うときに選ぶ
* **emotion, Vanilla Emotion**
  * React を使わないときにはこれを使う

### sample
```json
    "@emotion/react": "^11.4.1",
    "@emotion/styled": "^11.3.0",
```

## 特徴

###　メリット
* styled component記法に対応
* css prop(要素にstyle要素を埋め込む)でも書ける
* dl数は本家styled-componentsに次いで多い
* 同スタイルがあった場合、生成したスタイルオブジェクトが異なっても自動的に統合され、無駄なスタイルを作らないエコシステム
* nestやアンパサンド(&)が使える
* 別で生成したスタイルオブジェクトを結合できるので、mixin的な使い方も可能
* 変数(enum)を使って定数定義ができ、cssコード内で変数を使用できる
* functonも可能

###　デメリット
https://blog.unimoku.com/20201106

* 日本語ドキュメントがまだ少ない
* ts error 等


## styled component
`styled component`と同じ記法で記述し、style付コンポーネントのインスタンスを生成する。

* 本家のstyled components の機能は一通りある？
* 拡張(extends)、ネスト、mixin, function的なものも実装できる
* 疑似要素・メディアクエリが使える
* 同一スタイルの`styled components`オブジェクトが存在した場合、1つのクラス定義にまとめられる

### 生成されるcomponentのinterface
```ts
StyledComponent<{
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>
```

### eample

```tsx
const Wrap = styled.div`
  padding: 16px;
  border: solid 1px silver;
  margin: 16px 0;
  border-radius: 4px;
`
const Title = styled.h1`
  font-size: 24px;
`

/** render */
<Wrap>
  <Title>title!!</Title>
</Wrap>
```

## css props

* `SerializedStyles`オブジェクトを生成する
* 要素に直接スタイルを書くことができる
* オブジェクトとして出力した場合、`css`プロパティに格納して使用する

### 直接書く

```tsx
import { css } from '@emotion/react'

/** render */
<div css={css`
  background-color: #333;
  color: #fff;
  font-size: 20px;
  padding: 15px;
`}>
  <h2 css={css`
    font-size: 24px;
    font-weight: bold;
  `}>
    title
  </h2>
</div>
```
クラス定義として出力される

###　オブジェクトにする
renderを汚したくないときや、別ファイルにする場合はスタイルをオブジェクト化しておく。

#### style.ts
```ts
import { css } from '@emotion/react'

// 別ファイルにする場合は、以下のようにexport defaultにしておくと、import時がラク
const style = {
  bg: css`
    background-color: #333;
    color: #fff;
    font-size: 20px;
    padding: 15px;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
  `
}
export default style
```
#### index.tsx
```tsx
import style from './style'

/** render */
<div css={style.bg}>
  <h2 css={style.title}>title</h2>
</div>
```


##　重複したスタイル

###　styled components
- 同一componentであっても、別componentやpageであっても、同一スタイルであれば1つのクラスにマージされる
- もともと要素名に絞ったセレクタの出力の仕方でないからか、`div`,`p`,`section`のような要素別に定義したobjectであっても、同一スタイルの場合はマージされる
  - 要素名セレクタを使えないことによるトラブルが思いつかないので、大丈夫そう？
  - 最初から要素名に依存したスタイルにしなければ問題ない？



###　css props
- 同一のcomponent内であれば、1つのクラス名の定義にマージされる
- 別componentになると、別スタイルとなる様子
  - classの命名ルールにcomponent名が含まれるからかもしれない




## theme
https://dev.classmethod.jp/articles/react-typescript-emotion-theming/

css のカスタムプロパティを利用したテーマ切り替え機能？

