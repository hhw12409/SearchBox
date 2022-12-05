# SearchBox

## 동작화면

https://user-images.githubusercontent.com/85764782/198266950-aad27614-7926-4ddf-be1d-d74e4bda9ddf.mov

## 실행 방법

```bash
yarn install
yarn start
```

## 프로젝트 파일 구조

```bash
└─ src
   ├─ apis
   ├─ assets
   │   ├─ image
   ├─ components
   │   ├─ @icons
   │   ├─ AttractionsList
   │   ├─ NoResult
   │   ├─ SearchBox
   │   ├─ Skeloton
   │   ├─ Starts
   ├─ mocks
   ├─ pages
   │   ├─ Home
   │   ├─ NotFound
   ├─ utils
   │   ├─ highlightedText
```

---

## 사용한 스택 및 라이브러리

- axios
  - axios를 이용하여 비동기적으로 api를 호출해주었습니다.
  - 동기식으로 표현하기 위해서 async/await을 사용해주었습니다.
- react-query
  - enabled를 이용해 해당 값의 변화를 감지해도록 하였습니다.
  - react-query를 이용하여서 api를 사용하였습니다.
  - unique key를 활용하여서 특정 id에 맞는 api를 사용하였습니다.
  - deafultOptions: refetchOnMount, refetchOnReconnect, refetchOnWindowFocus를 이용하여서 과도한 API요청을 방지 하였습니다.
  - onSuccess, onError를 이용해 쿼리에 대한 성공, 실패 전처리를 하였습니다.
- styled-components
  - 재사용가능한 컴포넌트를 만들어서 생산성있는 스타일링을 하였습니다.
  - SASS의 중첩 스코프를 이용하여서 하위 컴포넌트에 스타일을 적용해주었습니다. 해당 방법으로 불필요한 컴포넌트 생성을 방지 하였습니다.
  - createGlobalStyle를 이용하여서 글로벌 스타일을 만들어주었으며 글로벌 스타일안에 reset를 넣어 기본 스타일을 제거해주었습니다.
- styled-reset
  - 브라우저마다 기본적으로 설치되어 있는 스타일을 제거해주었습니다.
- prettier
  - prettier를 이용하여서 코드 스타일을 관리하였습니다.

---

## 필수 요구 사항 정리 및 해결방법

## 관광지

1. 관광지 목록을 확인할 수 있습니다.

   - react-query를 이용하여서 api를 불러왔습니다. 이후 불러온 데이터를 map반복문을 이용하여서 `<AttractionsList/>` 컴포넌트의 props로 전달해주었습니다.
   - props를 통해 전달받은 데이터들을 바탕으로 `<AttractionsList/>`컴포넌트안에서 styled-components를 이용하여서 스타일링을 하면서 데이터를 불러와줬습니다.

2. 관광지의 평점을 별 개수로 확인할 수 있습니다. 평점은 0.5 단위로 올림하여 별 0개부터 별 5개로 표현합니다. 예를 들어 평점이 0.3점이면 별 반개로, 4.84점이면 별 5개로 표현합니다.

   - Math.ceil(리뷰의 평점값 * 2) / 2 Math함수를 이용하였으며 *2 / 2를 해주어서 평점을 0.5단위로 구별하였습니다.
   - `<Star/>`이라는 컴포넌트를 만들어준뒤 0.5단위로 계산된 평점을 props로 받아와서 받아온 평점을 SVG이미지화 해주었습니다.
   - (((Math.round((stars _ 10) / 5) _ 5) / 10) \* 20).toString() + '%' 구글링을 통해서 해당 공식을 알아내었으며 해당 공식을 활용해서 평점을 SVG이미지화 하였습니다.

3. 관광지에 달린 리뷰의 개수를 확인할 수 있습니다. 리뷰의 개수는 최대 99까지 표시하며 99를 넘는 수는 "99+"로 표현합니다.
   - 삼항연사자를 이용하여서 99초과일경우 "99+"가 나오게 하였으며 그외의 경우에는 기존값을 반환하게 하였습니다.
4. 관광지를 좋아요한 사람 수를 확인할 수 있습니다. 관광지를 좋아요한 사람 수는 최대 999까지 999를 넘는 수는 "999+"로 표현합니다.
   - 삼항연사자를 이용하여서 999초과일경우 "999+"가 나오게 하였으며 그외의 경우에는 기존값을 반환하게 하였습니다.

## 좋아요 / 좋아요 취소

1. 관광지를 좋아요할 수 있습니다. 좋아요한 관광지를 좋아요 취소할 수 있습니다.
   - handleLikeClick라는 LikeClick를 control하는 함수를 만들었습니다.
   - img안에 id값은 데이터의 id값 className에는 삼항연사자를 이용한 isLike의 True of False값에 대한 처리를 하였습니다.
   - 클릭하였을때 당시 if문을 이용해 img의 className에 해당하는 작업을 수행해주었습니다.
   - img를 클릭하게되면 useState에 설정해놓은 id값이 변경이 되는데 react-query의 enabled option을 이용해 해당값의 변화를 지켜보게하고 해당값이 변화되면 api가 실행되게 하였습니다.
   - unique key값을 활요하여서 클릭한 이미지의 id값을 전달해주어 전달받은 id값을 이용하여서 api를 호출하였습니다.

## 검색

1. 관광지를 검색할 수 있습니다.
   - 해당 form을 submit하게 되면 input안에 작성한 값을 searchValue안에 넣게되고 searchValue를 react-query를 이용해서 관광지를 검색하여서 list를 호출하게 해줍니다.
2. 검색 영역은 화면 상단에 고정하고 스크롤을 내리면 그림자를 표시합니다.
   - window.scrollY를 이용하여서 scrollY가 50보다 커지면 true를 아니면 false값을 반환하게 하였습니다.
   - scroll이 감지가 되면 동작될 addEventListener를 useEffect를 통해서 해당 스크롤이 감지되면 실행되게 구현하였습니다.
3. 검색어를 입력하는 중 그리고 검색어 입력 후 엔터를 눌렀을 때 API를 호출하여 목록을 표시합니다.
   - form안의 onSubmit를 이용하여서 엔터를 눌렀을때 api목록이 호출되도록 구현하였습니다.
4. 검색어를 입력할 때 너무 많은 API 요청을 하지 않도록 조절해야 합니다.
   - react-query의 default options로 refetchOnMount: false, refetchOnReconnect: false, refetchOnWindowFocus: false, option들을 false로 설정해두어 무분별한 api호출을 막았습니다.
5. 검색 API의 응답을 기다리고 있을 때 스켈레톤 UI를 표시합니다.
   - styled-components를 이용하여서 스켈레톤 UI를 만들었으며 react-query의 isLoading를 이용하여서 Loading중일때 스켈레톤 UI 컴포넌트를 불러오도록 구현하였습니다.
6. 관광지의 이름에서 검색어를 하이라이트합니다.
   - highlightedText라는 util을 만들었으며 input에 입력한 값이 목록의 이름에 포함되어 있는가 include를 이용해 확인을 하였으며 있을경우 split를 이용해서 입력한 값을 기준으로 배열화 한뒤 값을 나누어 줍니다. 나누어준 값을 반복문을 돌면서 탐색하고 탐색한 값과 내가 입력한 값의 동일한 값이 있다면 그 값은 span안에 color속성을 넣어주어 변경해주고 일치하는 값이 없으면 입력한 값을 반환해주게 하였습니다.
7. 검색어를 입력했을 있을 때는 입력 영역 우측에 검색어를 한 번에 제거하는 버튼을 표시합니다.
   - click시 useState의 값을 빈값으로 만들어주도록 구현하였습니다.

## 유의사항

1. `nucleus-ui`를 구현하는 라이브러리를 사용할 수 없습니다. 디자인 요소를 직접 구현해 주세요.
   - styled-components를 이용하여서 디자인 요소를 직접 구현하였습니다.

2. 만약 제공된 템플릿이나 테스트 코드, mock 서버 코드에서 문제를 발견했다면 문제를 수정한 후, README에서 수정 과정을 설명해 주세요.
  - mock서버에서 api uri의 접두사에 붙은 "api/"를 제거하였습니다.
  - initial page를 "/"로 구성하기 위하여서 변경해주었습니다.
  
3. 테스트 케이스를 어떻게든 진행해보려고 했으나,, 잘 되지않아서 테스트를 통과하지 못하였습니다.. 죄송합니다.
