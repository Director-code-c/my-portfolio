// 作品数据：以后新增作品时，向数组末尾追加一个对象即可。

export const projects = [
  {
    id: 'ai-paper-reader',
    name: '知研 AI（外文论文 AI 阅读器）',
    version: 'v0.11.0',
    platform: 'Windows x64',
    icon: `${import.meta.env.BASE_URL}ai-paper-reader.png`,
    description:
      '面向个人科研工作的本地论文研究平台，覆盖论文阅读、AI 翻译、知识库检索、原文证据管理、单论文阅读图、多论文证据矩阵与研究脉络，帮助从阅读资料逐步形成可追溯的研究判断。',
    tags: ['论文阅读', 'AI 翻译', 'Hybrid RAG', 'Evidence Matrix', 'Paper Map', 'Citation', 'Research Lineage', '本地存储'],
    // Windows 正式版安装包，托管于 GitHub Releases
    downloadUrl:
      'https://github.com/Director-code-c/ai-paper-reader-releases/releases/download/v0.11.0/AI.Setup.0.11.0.exe',
    capabilityGroups: [
      {
        title: '论文阅读与学习',
        items: [
          'PDF / TXT 论文导入与阅读',
          '扫描 PDF 自动检测与离线英文 OCR',
          'PDF 原文划选、复制与定位',
          '划词 AI 翻译与学术总结',
          'AI 选区总结与全文总结',
          '文本批注与跨论文记录中心',
          'StarDict 本地词典导入与优先级管理',
          '单词本与重复选词提醒',
          'SRS 间隔复习与学习状态管理',
          '最近阅读、阅读状态与星标论文',
        ],
      },
      {
        title: '知识库与智能检索',
        items: [
          '本地论文知识库',
          '多论文持久化知识库',
          'Keyword / Semantic / Hybrid 三种检索模式',
          'RRF Hybrid Search',
          '项目级 Hybrid RAG',
          '单论文与跨论文 AI 问答',
          '回答绑定本地 Citation 与真实页码',
          'Embedding 不可用时自动降级关键词检索',
          '论文信息自动提取',
          'DOI 识别与 Crossref 在线补全',
          'BibTeX、APA、GB/T 7714 引用导出',
        ],
      },
      {
        title: '证据研究工作区',
        items: [
          'Research Projects 研究项目',
          '一篇论文可加入多个研究项目',
          'Evidence Matrix 多论文证据矩阵',
          '自动整理研究问题、方法、数据集、主要结果与局限',
          'Matrix 单元格绑定本地原文证据',
          '项目综述与研究笔记',
          '项目范围跨论文问答',
          'Citation 页码、原文摘录与来源管理',
          '点击证据跳回 PDF 对应位置',
          'Markdown 与 CSV 导出',
          '论文事实、AI 推断和个人理解保持区分',
        ],
      },
      {
        title: '科研知识结构',
        items: [
          'Paper Map 单论文结构化阅读图',
          '划选原文直接加入阅读图',
          '研究问题、方法、实验、结果与局限节点',
          '我的理解、我的疑问、重点与笔记节点',
          '节点编辑、拖动、连线与自动布局',
          'Undo / Redo，最多保存 50 步',
          'Research Lineage 多论文研究脉络',
          '论文关系、方法演进与并行路线整理',
          'AI 关系建议、阶段总结与脉络分析',
          'AI 只提供建议，不自动修改用户知识结构',
          'Markdown 科研笔记导出',
        ],
      },
    ],
    localDataNote:
      '论文、笔记、原文证据和知识结构均保存在本地。AI 功能仅在用户主动调用时使用已配置的 AI 服务。',
    status: 'Windows v0.11.0 正式版',
  },
  {
    id: 'studydock',
    name: 'StudyDock',
    version: 'v0.2.0',
    platform: 'Web · Windows x64',
    icon: `${import.meta.env.BASE_URL}studydock.svg`,
    description:
      '面向学习管理的桌面工作台，支持课程与项目管理，Dashboard 展示真实课程数据，所有数据通过 Supabase RLS 隔离。',
    tags: ['Web 应用', 'Next.js + Supabase', 'Tailwind CSS', '邮箱认证', '课程管理', '项目管理', 'Windows 桌面版'],
    // 线上体验地址，托管于 Vercel
    liveUrl: 'https://studydock-two.vercel.app',
    // Windows 正式版安装包，托管于 GitHub Releases
    downloadUrl:
      'https://github.com/Director-code-c/studydock/releases/download/v0.2.0/StudyDock_0.2.0_x64-setup.exe',
    capabilityGroups: [
      {
        title: '核心功能',
        items: [
          '邮箱认证与个人资料管理',
          '课程创建、编辑、归档与删除',
          'Dashboard 展示真实课程数据',
          '项目创建、编辑与删除',
          '项目可选关联课程',
          '项目状态与截止日期管理',
          '服务端路由保护与安全认证回调',
          'Supabase RLS 用户数据隔离',
        ],
      },
    ],
    status: 'Windows v0.2.0 正式版',
  },
]
