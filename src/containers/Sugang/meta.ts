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
    status: SUGANG_STATUS.ING
  },
  {
    id: '2',
    name: "소프트웨어실제",
    professor: '노현아',
    status: SUGANG_STATUS.NOT
  },
  {
    id: '3',
    name: "알고리즘",
    professor: '임은진',
    status: SUGANG_STATUS.END
  }
]