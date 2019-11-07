# 문제 및 문제해결 (Problem And Problem Solve)
본 페이지에서는 요구사항및 TO DO List를 만들며 생각한 것과 기능들을 왜? 어떻게 구현했는지를 작성해 본다.

## 프로젝트를 시작학기 전 리서치
본 프로젝트를 진행하기 전 내가 만들려고 하는 프로젝트(To Do List) 는 이미 널리 알려졌으며, 이미 만들어져 실제로 사용되는 어플리케이션이 많다.  
따라서 본 프로젝트를 처음 진행하는 나로서는 그냥 막 진행하기 보다는 진행하기 전 모범사례 To Do List 어플을 리서치 및 벤치마킹하여 비슷한 형태로 만들어 볼 것을 생각하게 되었으며
다음의 몇가지에서 영감을 받고 벤치마킹하여 비슷한 식으로 제작하였다.

### Microsoft To-Do Application (Layout)  
![Microsoft To-Do](http://15.164.141.35/src/assets/github_image/image_1.png)

### Notion (Hash Tag)  
![Notion](http://15.164.141.35/src/assets/github_image/image_2.png)

## createdAt 외에 왜? begin, end에 대간 시간값을 넣었는가?
기본적으로 요구사항은 만들어진 List의 생성 날짜만 기입하면 된다고 되어있다. 하지만 여기에 추가적으로 이 앱을 쓴다고 생각했을 때 나는 해당 일정을 알고싶을 것 같다는 판단을 하였으며
default로는 오늘 내에 처리해야하는 업무로 작성되지만, 클릭 시 해당 스케쥴을 조절할 수 있도록 되어있다.
따라서 하나의 게시글이 가지는 값은 총 3개다. createdAt은 노출되지는 않으나, LocalStorage에 보면 작성이 되어있다. 각 시간은 현재 시간을 millisec로 보인다.

1. createdAt : 글의 생성시점
2. begin : 일정의 시작 시간
3. end : 일정의 종료 시간

### 날짜설정  
![Set Date](http://15.164.141.35/src/assets/github_image/image_7.png)

## 해쉬태그를 왜 만들었는가?
기본적으로 그냥 To Do List 를 만든다면, 정말 각기 다른 프로젝트가 생성 될 것이다.  
쉽게만들고, 그냥 만들라고 한다면 뚝딱 만들어지기도 하며, 뭔가 추가하려면 추가할 수 있는 확장성 있는 프로젝트이다.  
이런 프로젝트를 진행하며, 다른 To Do App들보다 조금 더 나은 기능을 제공하고 싶었으며, 실제로 내가 사용했던 Notion에서  
각자 진행하는 To Do 의 분야를 해쉬태그(Hash Tag)를 이용해서 분류하는 방식이 사용성이 좋았던 기억이 있다. 따라서 해당 기능을 추가하게 되었다.
(Tag의 길이제한, 갯수제한을 둔 이유는 Mobile에서 layout이 좀 깨져서 그렇다.)

### Hash Tag  
![Hash Tag](http://15.164.141.35/src/assets/github_image/image_2.png)

## 암호화 및 복호화
예전에 POC용도의 게임을 만들 때 Back단과 Front단을 혼자서 작성했던 때가 있다. 그 때 사실 Front는 https를 믿고 pure text로 정보를 발송하고,  
Back단 에서는 해당 pure text를 node의 모듈인 crypto를 사용해서 암호화 했었다. 암호화 할때마다 salt값과 key값은 따로 서버에 저장해 두고 사용했었는데  
그런 것 같이 쓰려고 찾아 보니 crypto-js 라이브러리가 있었기에 그대로 가져다 사용했으며, 암호화 알고리즘은 실 프로젝트도 아니기에 AES로 사용했다.  
(key또한 git으로 옮긴다는게 말이 안되지만. 요구사항의 목표는 단지 암호화된 상태로 Local Storage에 저장되길 바라는 것 같기에 우선 그냥 진행했다.)  
[CryptoJs Github](https://github.com/brix/crypto-js)참조  

### Local Storage에 저장된 암호화 된 데이터  
![Local Storage에 암호화 된 데이터.](http://15.164.141.35/src/assets/github_image/image_4.png)

### 암호화, 복호화 과정  
![암호화, 복호화 과정.](http://15.164.141.35/src/assets/github_image/image_5.png)

## 검색기능
기본적으로 ToDo List가 많아지면 찾기가 힘들다. 그래서 아마 요구사항에 Done된 목록을 지울 수 있고, Done목록은 아래로 정렬해 달라고 하신 것 같다.  
하지만 그것은 근본적인 문제 해결법이 아니라고 생각이 되었으므로 다음과 같은 검색기능을 추가했다. 물론 "검색" 이라는 것은 정말 쉽지 않은 분야이고,  
지금 내가 만들 수 있는 수준의 "그것"이 아니라고 생각이 되지만, 기본적으로 내가 작성한 string을 포함한 article을 보여주는 것 만으로도 충분히 그 기능은 쓸모있다고 판단되었다.  
그렇기 때문에 Article의 Contents, Tag에서 검색한 String이 있는지 판단하여 있으면 반환하는 아주 간단한 검색기능을 넣어두었다. (성능 Issue는 기간이 짧아 확인하지 못하였다.)
(물론 Tag로 분류된 게시글만 해도 쓸모있을 수 있겠으나, 정말 List가 많아진다면??.. Tag또한 방법이 아닐것이다.)

### 검색기능  
![검색기능](http://15.164.141.35/src/assets/github_image/image_6.png)

## 저장기능
보통 "저장"한다 라는것은 Back-End의 기능이고 Save, Load, Edit, Add등의 기능이 있을 것 이라 판단되었는데, 이것을 Local Storage로 처리하면 되는 것 이라고 판단되었다.  
기본적으로 싱글톤으로 LocalStorage라는 Class를 만들어서 Save, Load기능이 되도록 작성했으며, Edit, Add도 사실상 Save, Load로 컨트롤 할 수 있다고 판단되어 그렇게 차리하였다.  
(사실 LocalStorage를 Back-End로 본다면 각 기능별로 API를 뚫듯 만들었어야 했겠으나, Vuex까지는 진행하고, Storage쪽에는 뚫어두지는 않았다. 단지 Save,Load 만 사용)

## Category 분류
Category는 다음과 같이 분류하였다.
1. All : 기본적으로 모든 To Do List를 볼 수 있다.
2. Upcoming : 현재 시간으로부터 해당 업무의 종료시간(end-date)의 절대값이 하루 이내인 (어제 지금시간쯤에 끝났어야 했거나, 내일 지금시간쯤 끝나야 하는) List를 볼 수 있다.
3. Important : 자신이 중요하다고 별표를 표시한 List의 목록을 볼 수 있다.
4. Done : 자신이 완료했다고 처리한 List를 볼 수 있다.

## Mobile
해당 페이지를 핸드폰으로도 볼 수 있었으면 좋겠다고 판단하여 모바일까지 CSS로 컨트롤 하도록 노력했다.  
하지만 UI레이아웃을 잘 잡지 못하여 시간 설정과, Important기능은 보이지 않는다.(길이때문에 너무 빡셈..)  
따라서 ToDo List의 핵심 기능인 추가, 제거, 완료, 수정, Tag 기능들만 사용할 수 있으며, 날짜설정 및 Important설정은 불가하다.

## Toast Message & Modal
사실 Toast Message 와 Modal은 해당 모듈만 만들라 라고 해도 잘 만들려면 일주일로는 턱없이 부족한 모듈일 것이다.  
따라서 회사일과 병행하며 프로젝트를 진행하는 나에게 다른 일도 하기 바쁜 지금, 다른 사용자들이 사용했던 모듈을 리서치하여 잘 사용하는것도 능력이라고 판단되었다.  
해당 Toast Message, Modal은 다음과 같은 라이브러리를 사용하였다.
- [Vue-toasted Github](https://madewithvuejs.com/vue-toasted)  
- [Vue-js-modal Github](https://github.com/euvl/vue-js-modal)

## Browser 별 호환도
브라우저는 IE, IE-Edge를 제외한 나머지 브라우저에서 테스트를 해 보았으며, Layout 및 기능이 정상동작 한다고 판단 되었으나. 추후 더 확인해 봐야할 것이다.

| Chrome | Firefox | Safari |
|---|:---:|---:|
![Chrome](http://15.164.141.35/src/assets/github_image/Chrome.png) | ![Firefox](http://15.164.141.35/src/assets/github_image/Firefox.png) | ![Safari](http://15.164.141.35/src/assets/github_image/Safari.png)

| Mobile-Safari | Mobile-Chrome | Mobile-IE-Edge |
|---|:---:|:---:|
![Mobile Safari](http://15.164.141.35/src/assets/github_image/Mobile_Safari.png) | ![Mobile Chrome](http://15.164.141.35/src/assets/github_image/Mobile_Chrome.png) | ![Mobile Edge](http://15.164.141.35/src/assets/github_image/Mobile_Edge.png)