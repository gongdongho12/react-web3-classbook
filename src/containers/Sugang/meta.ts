export enum SUGANG_STATUS {
  NOT = 'NOT',
  ING = 'ING',
  END = 'END',
}

export const sugang = [
  {
    id: '1',
    name: "네트워크최신기술",
    professor: '이상환',
    token: null,
    status: SUGANG_STATUS.ING
  },
  {
    id: '2',
    name: "소프트웨어실제",
    professor: '노현아',
    token: null,
    status: SUGANG_STATUS.NOT
  },
  {
    id: '3',
    name: "알고리즘",
    professor: '임은진',
    token: null,
    status: SUGANG_STATUS.END
  },
  {
    id: '4',
    name: "손호성 테스트",
    professor: '손호성',
    token: "0x20fe562d797a42dcb3399062ae9546cd06f63280",
    status: SUGANG_STATUS.NOT
  }
]