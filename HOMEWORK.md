# 카카오모빌리티 신규 웹 서비스 Front-end 개발 Homework
할 일 목록, To do list

## 기본 요구사항
1. ~~프로젝트 경로에서, npm/yarn 스크립트로 실행 가능~~ (done)
2. ~~오픈 소스는 회사가 통상 사용 가능한 라이선스 준수 시 활용~~ (done)
3. ~~HTML 템플릿은 자유, 수퍼 셋 언어 SASS/SCSS, TypeScript 활용~~ (done)

## 요구사항 상세
### 기능적 구현 요구사항
- ~~고객이 사용할 수 있을 수준의 정갈한 화면~~ (done)
- ~~"할 일"을 저장 가능~~ (done)
- ~~"할 일"은 여러 줄의 문장 가능~~ (done)
- ~~"할 일"은 기록한 "시점", "완료 여부" 상태 정보 포함~~ (done) -> 일정의 시작시간, 종료시간을 기입하지만, created 시간도 "생성될때" 자동 기입되도록 되어있다.
- ~~"완료된 일"은 화면 아랫 쪽으로 정렬하여 표현~~ (done)
- ~~"완료된 일"과 "할 일" 화면 상 표현 차이로 구분 가능~~ (done)
- ~~"완료된 일"/"할 일"을 선택 필터 기능~~ (done) -> 카테고리 필터
- ~~사용자는 언제든, "완료된 일"/"할 일"을 변경 가능~~ (done)
- ~~"완료된 일"은 완전 삭제 가능~~ (done)

### 기술적 구현 요구사항
- ~~"할 일"은 기록한 브라우저에서 다시 열람 시 내용 유지~~ (done)
- ~~웹 브라우저 상의 HTML, CSS, Javascript를 사용~~ (done)
- ~~Pre-processor 역할에 한 해 다양한 runtime 활용 가능~~ (done)
- ~~사용자의 행동을 완전하게 막는 경고 시에는 다른 동작을 할 수 없도록 화면 막음 (modal 띄우고 동작 막는다.)~~ (done)

### 선택적 추가 구현 사항
- ~~저장 공간에는 입력 했던 문자열 모습이 아닌 형태로 저장~~ (done)
- ~~사용자의 잘못된 행동에 대해 직접 제작한 Modal/Toast 형태로 Message 표현~~ (done)
- ~~CSS 직접 작성~~ (done) -> 100% 제작은 아니다.

## 제출 정보
### 완성도 판단
- 전체 요구사항에 명시된 내용 준수 정도
- ~~판단에 사용할 수 있는 모던 브라우저는 크롬, 파이어폭스, 사파리, 엣지~~ (done) IE 11
- ~~제출된 내용을 모던 브라우저를 통해 온전하며, 유사한 UI 확인~~ (done)
- ~~"할 일"을 기록한 후, "저장"/"완료" 동작 수행~~ (done)
- ~~창을 종료 후 동일 브라우저로 다시 열람 시 마지막 내용 조회 가능~~ (done)
- ~~저장된 "할 일"은 제출된 프로그램을 통하지 않고 직접 조회 시 원래와 다른 문자열~~ (done)

### 유의사항
- ~~설치 가능한 의존성 제거 ( `/node_modules`, `/bower_components` 등)~~ (done)
- ~~Build 된 결과물이 아닌, 작업 상태의 코드를 제출~~ (done)
- `${지원자의 이름}.zip` 형식으로 압축하여 제출