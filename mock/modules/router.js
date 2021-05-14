const Mock = require('mockjs');
const { VUE_APP_BASE_URL } = process.env;
const mock = {};

mock[`GET ${VUE_APP_BASE_URL || ''}/menu`] = (req, res) => {
  res.send({
    code: 0,
    msg: 'ok',
    data: [
      {
        id: Mock.mock('@id'),
        name: '驾驶舱',
        menus: [
          {
            id: Mock.mock('@id'),
            path: 'home',
            key: 'home',
            name: '综合看板',
            icon: 'el-icon-s-shop',
          },
          {
            id: Mock.mock('@id'),
            path: 'task',
            key: 'task',
            name: '工作任务',
            icon: 'el-icon-tickets',
            children: [{
              id: Mock.mock('@id'),
              path: 'detail',
              key: 'taskDetail',
              name: '工作任务详情',
              hidden: true
            }]
          },
          {
            id: Mock.mock('@id'),
            path: 'https://www.baidu.com/',
            key: 'link',
            name: '外部链接',
            icon: 'el-icon-link',
          },
          {
            id: Mock.mock('@id'),
            path: 'message',
            key: 'message',
            name: '个人信息',
            hidden: true, // 当前菜单不需要展示在导航栏上
          },
        ],
      },
      {
        id: Mock.mock('@id'),
        name: '安标管理',
        menus: [
          {
            id: Mock.mock('@id'),
            path: 'educationTraining',
            key: 'educationTraining',
            name: '教育培训',
            icon: 'icon-1',
            children: [
              {
                id: Mock.mock('@id'),
                path: 'staffFile',
                key: 'staffFile',
                name: '员工档案',
                icon: 'icon-2',
              },
              {
                id: Mock.mock('@id'),
                path: 'examQuestionBank',
                key: 'examQuestionBank',
                name: '考试题库',
                icon: 'icon-2',
              },
              {
                id: Mock.mock('@id'),
                path: 'myExam',
                key: 'myExam',
                name: '我的考试',
                icon: 'icon-2',
              },
            ],
          },
          {
            id: Mock.mock('@id'),
            path: 'hazardousWork',
            key: 'hazardousWork',
            name: '危险作业',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'contractor',
            key: 'contractor',
            name: '承包商管理',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'emergency',
            key: 'emergency',
            name: '应急管理',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'license',
            key: 'license',
            name: '证照管理',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'occupationalHealth',
            key: 'occupationalHealth',
            name: '职业健康',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'changeManagement',
            key: 'changeManagement',
            name: '变更管理',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'systemRules',
            key: 'systemRules',
            name: '制度规程',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'lawsRegulations',
            key: 'lawsRegulations',
            name: '法律法规',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'chemicalFile',
            key: 'chemicalFile',
            name: '化学品档案',
            icon: 'icon-2',
          },
          {
            id: Mock.mock('@id'),
            path: 'specialEquipment',
            key: 'specialEquipment',
            name: '特种设备',
            icon: 'icon-2',
          },
        ],
      },
    ],
  });
};

module.exports = {
  ...mock,
};
