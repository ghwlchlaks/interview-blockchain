# 실행 방법

#### step1

```
cd interview-blockchain
npm install
npm start
```

#### step2

```
localhost:3000 접속
```

# config

```
  mainTitle : [{
     title: 제목
     type: Func, Call, Send 중 한개
     method: method 이름, 디폴트 object
     permission: 권한
     parameters: [{
       field: 필드 이름,
       type: 필드 타입,
       description: 필드 설명
     }]
     responses: [{
       field: 필드 이름,
       type: 필드 타입,
       description: 필드 설명
     }],
     description: [{
       // Contract에 적용
        words: 출력할 글
        highlight: 강조 유무
     }],
     event: 바인딩할 event
  }]
```

# 사용한 라이브러리

> react@4.0.27  
> react-dom@16.8.5  
> react-script@16.8.5  
> ethers@2.1.8

# 사용한 node, npm 버전

> node@10.15.3  
> npm@6.4.1
