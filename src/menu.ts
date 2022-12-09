interface Relation {
  parent?: number;
}

interface DataScheme {
  ID: number;
}

export interface MenuItem extends Relation, DataScheme {
  label: string;
  groupID?: MenuGroup["ID"];
  slug?: string;
  isTab?: boolean;
  iconSrc?: string;
  skip?: boolean;
}

export interface MenuGroup extends DataScheme {
  label?: string;
}

export const menu: MenuItem[] = [
  {
    ID: 1,
    isTab: true,
    slug: "statistics",
    label: "방문분석",
    iconSrc: "/images/tab/statistics.png",
    skip: true,
  },
  {
    ID: 2,
    isTab: true,
    slug: "sscampus",
    label: "상캠소개",
    iconSrc: "/images/tab/sscampus.png",
    skip: true,
  },
  {
    ID: 3,
    isTab: true,
    slug: "program",
    label: "프로그램 관리",
    iconSrc: "/images/tab/program.png",
    skip: true,
  },
  {
    ID: 4,
    isTab: true,
    slug: "groover",
    label: "그루버 관리",
    iconSrc: "/images/tab/groover.png",
    skip: true,
  },
  {
    ID: 6,
    slug: "visitor",
    parent: 1,
    groupID: 1,
    label: "방문자 수",
  },
  {
    ID: 7,
    slug: "pageview",
    parent: 1,
    groupID: 1,
    label: "페이지 뷰",
  },
  {
    ID: 8,
    slug: "game",
    parent: 1,
    groupID: 1,
    label: "게임",
  },
  {
    ID: 9,
    slug: "depttest",
    parent: 1,
    groupID: 1,
    label: "테스트",
  },
];

export const menuGroupList: MenuGroup[] = [
  {
    ID: 1,
    label: "방문자 수",
  },
];
