const express = require("express")
const ejs = require("ejs")
const bodyParser = require('body-parser')
const app = express()

app.set("view engine", "ejs") // 템플릿설정
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/views'))

// 여기서 "test"는 연결할 ejs 파일 이름, "data" 부터 시작

app.get("/", (req, res) => {
      res.render("infoSection", {
        "data": {
          "apply": {
            "major": 28,
            "culture": 46,
            "etc": 6
          },
          "del": {
            "major": 0,
            "culture": 0,
            "etc": 0
          },
          "get": { // 취득학점
            "major": 28,
            "culture": 46,
            "etc": 6
          },
          "score": {
            "fs": 3.69, // 학교에서 보이는 학점
            "rs": 3.69 // 성적증명서 기준
          },
          "course": {
            "2020-1": [ // 학기별 수강학점, 과목
              {
                "id": "H030-3-8485-03",
                "name": "응용소프트웨어실습",
                "major": "소프트웨어학부",
                "type": "전필",
                "grade": "3",
                "score": "미입력",
                "re": ""
              },
              {
                "id": "H030-3-6899-01",
                "name": "휴먼컴퓨터인터페이스",
                "major": "소프트웨어학부",
                "type": "전선",
                "grade": "3",
                "score": "미입력",
                "re": ""
              },
              {
                "id": "H030-3-1647-02",
                "name": "컴퓨터구조",
                "major": "소프트웨어학부",
                "type": "전선",
                "grade": "3",
                "score": "미입력",
                "re": ""
              },
              {
                "id": "H030-3-1110-02",
                "name": "운영체제",
                "major": "소프트웨어학부",
                "type": "전선",
                "grade": "3",
                "score": "미입력",
                "re": ""
              },
              {
                "id": "H030-3-0969-01",
                "name": "알고리즘",
                "major": "소프트웨어학부",
                "type": "전필",
                "grade": "3",
                "score": "미입력",
                "re": ""
              },
              {
                "id": "0000-3-6136-02",
                "name": "경제신문읽기",
                "major": "전체공통",
                "type": "교선",
                "grade": "3",
                "score": "미입력",
                "re": ""
              },
              {
                "id": "0000-2-3029-01",
                "name": "인터넷활용",
                "major": "전체공통",
                "type": "교선",
                "grade": "3",
                "score": "미입력",
                "re": ""
              }
            ],
            "2019-2": [{
                "id": "교류",
                "name": "참빛설계I",
                "major": "국내교류",
                "type": "전선",
                "grade": "3",
                "score": "A0",
                "re": ""
              },
              {
                "id": "교류",
                "name": "참빛설계II",
                "major": "국내교류",
                "type": "전선",
                "grade": "3",
                "score": "A0",
                "re": ""
              },
              {
                "id": "H030-2-7777-01",
                "name": "객체지향프로그래밍",
                "major": "소프트웨어학부",
                "type": "전선",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H030-2-3405-01",
                "name": "자료구조실습",
                "major": "소프트웨어학부",
                "type": "전필",
                "grade": "2",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H030-2-3395-02",
                "name": "시스템소프트웨어",
                "major": "소프트웨어학부",
                "type": "전선",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H030-2-1243-01",
                "name": "자료구조",
                "major": "소프트웨어학부",
                "type": "전필",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "3170-2-9663-01",
                "name": "APP디자인",
                "major": "미디어영상학부",
                "type": "일선",
                "grade": "3",
                "score": "A0",
                "re": ""
              },
              {
                "id": "0000-1-7000-01",
                "name": "21세기기업의인재상",
                "major": "전체공통",
                "type": "교선",
                "grade": "2",
                "score": "P",
                "re": ""
              }
            ],
            "2019-1": [{
                "id": "H030-2-8484-02",
                "name": "리눅스활용실습",
                "major": "소프트웨어학부",
                "type": "전필",
                "grade": "2",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H030-2-3403-01",
                "name": "고급프로그래밍",
                "major": "소프트웨어 학부",
                "type": "전선",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H030-2-1183-02",
                "name": "이산구조",
                "major": "소프트웨어학부",
                "type": "전선",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H030-2-0448-02",
                "name": "디지털논리",
                "major": "소프트웨어학부",
                "type": "전선",
                "grade": "3",
                "score": "B0",
                "re": ""
              },
              {
                "id": "3170-2-7702-01",
                "name": "컴퓨터그래픽디자인",
                "major": "미디어영상학부",
                "type": "일선",
                "grade": "3",
                "score": "A0",
                "re": ""
              },
              {
                "id": "0000-2-3236-01",
                "name": "진로탐색",
                "major": "전체공통",
                "type": "교선",
                "grade": "2",
                "score": "P",
                "re": ""
              },
              {
                "id": "0000-1-7465-03",
                "name": "공학프레젠테이션과토론",
                "major": "전체공통",
                "type": "교선",
                "grade": "3",
                "score": "A+",
                "re": ""
              }
            ],
            "2018-계": [{
              "id": "교류",
              "name": "컴퓨팅사고",
              "major": "국내교류",
              "type": "교필",
              "grade": "3",
              "score": "A+",
              "re": ""
            }],
            "2018-2": [{
                "id": "H030-1-5714-02",
                "name": "고급C프로그래밍및설계",
                "major": "소프트웨어학부",
                "type": "기필",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H000-1-3362-05",
                "name": "대학영어",
                "major": "소프트웨어 융합대학공통",
                "type": "교필",
                "grade": "3",
                "score": "C0",
                "re": ""
              },
              {
                "id": "0000-3-3240-01",
                "name": "취업전략",
                "major": "전체공통",
                "type": "교선",
                "grade": "2",
                "score": "P",
                "re": ""
              },
              {
                "id": "0000-2-6999-01",
                "name": "색채심리와현대생활",
                "major": "전체공통",
                "type": "교선",
                "grade": "3",
                "score": "B0",
                "re": ""
              },
              {
                "id": "0000-1-8085-02",
                "name": "논리적으로사고하기",
                "major": "전체공통",
                "type": "교선",
                "grade": "3",
                "score": "A0",
                "re": ""
              },
              {
                "id": "0000-1-5704-01",
                "name": "자연교양세미나",
                "major": "전체공통",
                "type": "교선",
                "grade": "3",
                "score": "A0",
                "re": ""
              }
            ],
            "2018-1": [{
                "id": "H030-1-4625-02",
                "name": "대학수학및연습1",
                "major": "소프트웨어학부",
                "type": "기선",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H030-1-2957-01",
                "name": "공학설계입문",
                "major": "소프트웨어학부",
                "type": "기선",
                "grade": "3",
                "score": "A0",
                "re": ""
              },
              {
                "id": "H030-1-0019-02",
                "name": "C프로그래밍",
                "major": "소프트웨어학부",
                "type": "교필",
                "grade": "3",
                "score": "A+",
                "re": ""
              },
              {
                "id": "H000-1-4628-01",
                "name": "기초수학및연습",
                "major": "소프트웨어융합대학공통",
                "type": "기선",
                "grade": "3",
                "score": "A+",
                "re": ""
              },
              {
                "id": "H000-1-3415-01",
                "name": "대학화학및실험1",
                "major": "소프트웨어융합대학공통",
                "type": "기필",
                "grade": "3",
                "score": "B+",
                "re": ""
              },
              {
                "id": "H000-1-1077-07",
                "name": "영어회화",
                "major": "소프트웨어융합대학공통",
                "type": "교필",
                "grade": "3",
                "score": "A0",
                "re": ""
              },
              {
                "id": "0000-1-8128-01",
                "name": "광운인되기",
                "major": "전체공통",
                "type": "교필",
                "grade": "1",
                "score": "P",
                "re": ""
              }
            ]
          }
        }
      });
    });
    
    app.get("/", (req, res) => {
      res.render("creditsData", {"data": {
        "graduated_data": {
          "전자공학과": {
            "conditions": {
              "2015/공학인증": {
                "commons": {
                  "major_credits": 60,
                  "total_credits": 140,
                  "culture_credits": 0,
                  "balance_culture_credits": 18,
                  "ess_culture_credits": 0,
                  "basic_culture_credits": 30,
                  "necessary_major": [
                    ["공학설계입문"],
                    ["기초전자회로및실험1"],
                    ["기초전자회로및실험2"],
                    ["전자공학응용실험"],
                    ["캡스톤설계"]
                  ],
                  "necessary_basic_culture": [
                    ["확률및불규칙신호론"],
                    ["공학수학1"],
                    ["공학수학2"],
                    ["대학물리및실험1"],
                    ["대학물리및실험2"],
                    ["c프로그래밍"],
                    ["공학설계입문"]
                  ],
                  "necessary_essential_culture": [],
                  "non_checking": [""]
                }
              },
              "2016/공학인증": {
                "commons": {
                  "major_credits": 60,
                  "total_credits": 140,
                  "culture_credits": 0,
                  "balance_culture_credits": 12,
                  "ess_culture_credits": 4,
                  "basic_culture_credits": 30,
                  "necessary_major": [
                    ["공학설계입문"],
                    ["기초전자회로및실험1"],
                    ["기초전자회로및실험2"],
                    ["전자공학응용실험"],
                    ["캡스톤설계"]
                  ],
                  "necessary_basic_culture": [
                    ["확률및불규칙신호론"],
                    ["공학수학1"],
                    ["공학수학2"],
                    ["대학물리및실험1"],
                    ["대학물리및실험2"],
                    ["c프로그래밍"],
                    ["공학설계입문"]
                  ],
                  "necessary_essential_culture": [
                    ["광운인되기"],
                    ["대학영어"],
                    ["c프로그래밍"],
                    ["c프로그래밍응용"]
                  ],
                  "non_checking": [""]
                }
              },
              "2018/공학인증": {
                "commons": {
                  "major_credits": 60,
                  "total_credits": 133,
                  "culture_credits": 0,
                  "balance_culture_credits": 12,
                  "ess_culture_credits": 10,
                  "basic_culture_credits": 27,
                  "necessary_major": [
                    ["기초전자회로및실험1"],
                    ["기초전자회로및실험2"],
                    ["전자공학응용실험"],
                    ["캡스톤설계"],
                    ["전자회로실험"]
                  ],
                  "necessary_basic_culture": [
                    ["확률및불규칙신호론"],
                    ["공학수학1"],
                    ["공학수학2"],
                    ["대학물리및실험1"],
                    ["대학물리및실험2"],
                    ["c프로그래밍"],
                    ["공학설계입문"]
                  ],
                  "necessary_essential_culture": [
                    ["광운인되기"],
                    ["대학영어"],
                    ["c프로그래밍"],
                    ["c프로그래밍응용"]
                  ],
                  "non_checking": [""]
                }
              },
              "2019/공학인증": {
                "commons": {
                  "major_credits": 60,
                  "total_credits": 133,
                  "culture_credits": 0,
                  "balance_culture_credits": 12,
                  "ess_culture_credits": 10,
                  "basic_culture_credits": 27,
                  "necessary_major": [
                    ["기초전자회로및실험1"],
                    ["기초전자회로및실험2"],
                    ["전자공학응용실험"],
                    ["캡스톤설계"],
                    ["전자회로실험"]
                  ],
                  "necessary_basic_culture": [
                    ["확률및불규칙신호론"],
                    ["공학수학1"],
                    ["공학수학2"],
                    ["대학물리및실험1"],
                    ["대학물리및실험2"],
                    ["공학설계입문"]
                  ],
                  "necessary_essential_culture": [
                    ["광운인되기"],
                    ["대학영어"],
                    ["c프로그래밍"],
                    ["c프로그래밍응용"]
                  ],
                  "non_checking": [""]
                }
              },
              "2020/공학인증": {
                "commons": {
                  "major_credits": 60,
                  "total_credits": 133,
                  "culture_credits": 0,
                  "balance_culture_credits": 12,
                  "ess_culture_credits": 10,
                  "basic_culture_credits": 27,
                  "necessary_major": [
                    ["기초전자회로및실험1"],
                    ["기초전자회로및실험2"],
                    ["전자공학응용실험"],
                    ["캡스톤설계"],
                    ["전자회로실험"]
                  ],
                  "necessary_basic_culture": [
                    ["확률및불규칙신호론"],
                    ["공학수학1"],
                    ["공학수학2"],
                    ["대학물리및실험1"],
                    ["대학물리및실험2"],
                    ["공학설계입문"]
                  ],
                  "necessary_essential_culture": [
                    ["광운인되기"],
                    ["대학영어"],
                    ["c프로그래밍"],
                    ["c프로그래밍응용"],
                    ["융합적사고와글쓰기"]
                  ],
                  "non_checking": [""]
                }
              },
              "2015/일반프로그램": {
                "commons": {
                  "major_credits": 60,
                  "total_credits": 140,
                  "culture_credits": 30,
                  "balance_culture_credits": 0,
                  "ess_culture_credits": 0,
                  "basic_culture_credits": 0,
                  "necessary_major": [
                    ["공학설계입문"],
                    ["기초전자회로및실험1"],
                    ["기초전자회로및실험2"],
                    ["전자공학응용실험"],
                    ["캡스톤설계"]
                  ],
                  "necessary_basic_culture": [],
                  "necessary_essential_culture": [],
                  "non_checking": [""]
                }
              }
            }
          },
          "정보융합학부": {
            "conditions": {
              "2020/일반프로그램": {
                "commons": {
                  "major_credits": 60,
                  "total_credits": 133,
                  "culture_credits": 0,
                  "balance_culture_credits": 0,
                  "ess_culture_credits": 0,
                  "basic_culture_credits": 0,
                  "necessary_major": [
                    ["객체지향프로그래밍"],
                    ["자료구조"],
                    ["오픈소스소프트웨어"],
                    ["모바일프로그래밍"]
                  ],
                  "necessary_basic_culture": [
                    ["프로그래밍기초"],
                    ["컴퓨팅사고"],
                    ["대학수학및연습1"],
                    ["대학수학및연습2"],
                    ["고급c프로그래밍및설계"]
                  ],
                  "necessary_essential_culture": [],
                  "non_checking": ["졸업작품/논문 진행 여부"]
                }
              }
            }
          }
        }
      }
      })
  })

app.listen(3000, () => {
  console.log("Port 3000 connected.");
});