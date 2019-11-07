# 카카오모빌리티 신규 웹 서비스 Front-end 개발 Homework  
[Example Page](http://15.164.141.35)
> 개인적으로 사용하고 있는 서버라 추후 다른 페이지로 변경되어 있을 수 있음.

## 기한 (Term)
2019.11.01(금) ~ 2019.11.08(금) [1 주일]  

## 요구사항 (Problem)
> To Do List Web Front 제작
프로젝트 경로에서, npm/yarn 스크립트로 실행 가능  
오픈 소스는 회사가 통상 사용 가능한 라이선스 준수 시 활용  
HTML 템플릿은 자유, 수퍼 셋 언어 SASS/SCSS, TypeScript 활용  

Detail한 요구사항은 [HOMEWORK.md](https://github.com/SimDaeSoo/Kakao_Mobility_Front_Homework/blob/master/HOMEWORK.md)참조  

## 작업 이력 (History of Problem Solve)
[문제와 문제해결](https://github.com/SimDaeSoo/Kakao_Mobility_Front_Homework/blob/master/SOLUTION.md) 참조  
[작업 히스토리](https://github.com/SimDaeSoo/Kakao_Mobility_Front_Homework/commits/master) 참조  

## 개발 환경 (Environments)
- Vue.js
- Typescript
- Javascript
- Webpack 4
- Babel

## 실행법 (How To Run?)
1. 의존성 모듈 설치 (Dependency install)
```sh
$ npm install

// npm 버전 상태나 os에 따라 오류가 날때가 있는데 안될 시 아래의 방법을 하나씩 해본다.
$ sudo npm install

// node sass 설치 에러 뜰때가 있다. (If node sass error)
$ sudo npm install --unsafe-perm
```  

2. 개발자 모드로 실행 (Run as develop mode with webpack-dev-server)
```sh
$ npm start
```  

3. 프로덕트로 빌드 (Build as production mode)
```sh
$ npm run build
```

## 샘플페이지 (Example Page Preview)  
| Chrome | Firefox | Safari |
|---|:---:|---:|
![Chrome](http://15.164.141.35/src/assets/github_image/Chrome.png) | ![Firefox](http://15.164.141.35/src/assets/github_image/Firefox.png) | ![Safari](http://15.164.141.35/src/assets/github_image/Safari.png)

| Mobile-Safari | Mobile-Chrome | Mobile-Edge |
|---|:---:|:---:|
![Mobile Safari](http://15.164.141.35/src/assets/github_image/Mobile_Safari.png) | ![Mobile Chrome](http://15.164.141.35/src/assets/github_image/Mobile_Chrome.png) | ![Mobile Edge](http://15.164.141.35/src/assets/github_image/Mobile_Edge.png)

## 기능설명 (Explain of product)
기본적으로 To Do List는 Done을 아래로 정렬하며, Important는 위로 정렬되도록 되이있다.

### Side Bar  
>각 Article들의 카테고리별 현재 갯수를 알 수 있다.  
~[Side Bar](http://15.164.141.35/src/assets/github_image/image_8.png)

### Search  
>각 Article들의 Contents 및, Tag에 달린 내용을 검색해서 찾아준다. (강조는 없다..) 삽입 및 Enter입력 시 검색됨.  
![Search](http://15.164.141.35/src/assets/github_image/image_9.png)

### Begin & End Date  
>createdAt 과는 별도로 각 Article의 작업 시작시간 및, 작업 종료 시간을 설정할 수 있다.  
![Date](http://15.164.141.35/src/assets/github_image/image_10.png)

### Contents  
>각 Article의 내용을 삽입할 수 있다. (Local Stroage에는 암호화 되어서 저장된다.)  
![Contents](http://15.164.141.35/src/assets/github_image/image_11.png)

### Tags  
>각 Article의 태그를 삽입할 수 있다. 태그의 양식은 '#\~\~'과 같으며 0자 ~ 15자, 4개 이하를 작성할 수 있으며  
'#'과 스페이스를 인식하여 태그가 분리된다.  
![Tags](http://15.164.141.35/src/assets/github_image/image_12.png)

### Important  
>각 Article의 중요성을 마킹할 수 있다. important가 설정된 article은 위쪽에 노출된다.  
![Important](http://15.164.141.35/src/assets/github_image/image_13.png)

### Done  
>각 Article의 처리 완료결과를 마킹할 수 있다. Done된 article은 아래쪽에 노출된다.  
![Done](http://15.164.141.35/src/assets/github_image/image_14.png)

## 드리고 싶은 말
이번 개발을 작은 프로젝트라서 즐겁게 짬짬히 만들었습니다. 결과에 관련없이 제겐 좋은 경험이 되겠지만,  
개발자는 항상 성장을 목적으로 해야하는 직업인 만큼, 수 많은 지원자들의 개발 결과물을 보시며 지치시겠지만 가능하다면  
다른 개발자들에 비해 '이것'이 아쉬웠다, '이것'을 좀 더 잘했으면 좋았을텐데 와 같은 피드백을 주신다면  
작은 개발자에게 큰 힘이 될 것 같습니다. 감사합니다.  
(tlaeotn123@gmail.com)

## 각 사용된 라이브러리 공식 문서 (Library Documents)
- [Vue.js Documents](https://kr.vuejs.org/v2/guide/index.html)  
- [Vuex Documents](https://vuex.vuejs.org/kr/)  
- [Vue Router Documents](https://router.vuejs.org/kr/)  
- [Typescript Documents](https://www.typescriptlang.org/docs/home.html)  
- [Webpack 4 Documents](https://webpack.js.org/concepts/)  
- [CryptoJs Github](https://github.com/brix/crypto-js)  
- [Vue-toasted Github](https://madewithvuejs.com/vue-toasted)  
- [Vue-datepicker Github](https://github.com/charliekassel/vuejs-datepicker)  
- [Vue-js-modal Github](https://github.com/euvl/vue-js-modal)