// 作品数据：以后新增作品时，向数组末尾追加一个对象即可。

// 作品展示顺序：知研 AI → 简历工坊 → StudyDock → 留白
const resumeWorkshop = {
    id: 'resume-workshop',
    name: '简历工坊',
    version: 'v0.1.2',
    platform: 'Web · Windows x64',
    icon: `${import.meta.env.BASE_URL}resume-workshop-icon.png`,
    description:
      '把真实经历整理成可正式投递的简历：素材库与简历数据分离，测量式分页预览做到打印即所见，另有求职看板与单文件个人网站导出。所有数据只保存在自己的浏览器里。',
    tags: [
      'React 19',
      'TypeScript',
      'Vite',
      'IndexedDB 本地存储',
      '多模板分页排版',
      '打印 / 保存 PDF',
      '素材库',
      '求职看板',
      '个人网站导出',
      '四套皮肤 × 明暗',
      '星空背景',
      '版本快照',
      '撤销重做',
    ],
    liveUrl: 'https://director-code-c.github.io/my-portfolio/resume-workshop/',
    // Windows 正式版安装包，托管于 GitHub Releases
    downloadUrl:
      'https://github.com/Director-code-c/resume-workshop-releases/releases/download/v0.1.2/Resume-Workshop-0.1.2-win-x64-Setup.exe',
    capabilityGroups: [
      {
        title: '简历编辑与排版',
        items: [
          '多套简历模板，切换不丢内容、排序与隐藏设置',
          '测量式分页预览，长内容自动延续到下一页',
          '打印视图复用同一分页结果，预览与打印一致',
          '打印／保存为 PDF：中文正常显示、文字可选中复制、链接可点击',
          '字号、行距、页边距与强调色可调',
          '区块显示隐藏、排序与双栏模板',
          '模板气质预设，切换时一键应用并可手动覆盖',
        ],
      },
      {
        title: '素材库与求职',
        items: [
          '经历与作品素材库，与简历数据分离（加入简历为独立副本）',
          '素材之间可建立关联，提供列表视图与时间轴视图',
          '关键词搜索、类型筛选、标签多选与多选预览',
          '求职看板五状态流转：已收藏 / 已投递 / 面试中 / 已录用 / 已结束',
          '内容质量检查：只做结构性提示，不代写任何内容',
          '岗位描述匹配在本机完成分析，不把简历外发',
        ],
      },
      {
        title: '个人网站',
        items: [
          '把档案、经历、作品与文章汇成单页网站',
          '栏目开关与自定义排序，空栏目自动隐藏',
          '四套网站主题，跟随界面皮肤与明暗切换',
          '导出自包含单文件 HTML，预览即产物',
          '草稿状态的文章不进入导出结果',
        ],
      },
      {
        title: '数据与界面',
        items: [
          '全部数据保存在本机浏览器 IndexedDB',
          '完整备份导出，导入前预览、相同内容自动去重',
          '命名版本快照与自动快照，恢复操作可撤销',
          '撤销 / 重做与历史节点跳转',
          '四套界面皮肤 × 浅色 / 深色 / 跟随系统',
          '星空画布背景，与皮肤和明暗自由组合',
          '核心流程可纯键盘完成，图标按钮均有可读标签',
        ],
      },
    ],
    localDataNote:
      '网页版数据只保存在访客自己的浏览器中；桌面版数据保存在本机应用内，两者相互独立，可用「设置 → 备份」导出 JSON 互相迁移。',
    status: 'Windows v0.1.2 正式版',
  }

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
  resumeWorkshop,
  {
    id: 'studydock',
    name: 'StudyDock',
    version: 'v0.5.0',
    platform: 'Web · Windows x64',
    icon: `${import.meta.env.BASE_URL}studydock.svg`,
    description:
      '面向学习管理的桌面工作台，支持课程、项目、文件库、全局搜索与回收站管理。文件可重命名、预览、按文件夹整理与批量操作，并支持离线查看最近同步的课程。',
    tags: ['Web 应用', 'Next.js + Supabase', 'Tailwind CSS', '邮箱认证', '课程管理', '项目管理', '文件管理', '文件夹整理', '批量操作', '全局搜索', '回收站', '文件预览', '离线可用', 'Windows 桌面版'],
    // Windows 正式版安装包，托管于 GitHub Releases
    downloadUrl:
      'https://github.com/Director-code-c/studydock/releases/download/v0.5.0/StudyDock_0.5.0_x64-setup.exe',
    capabilityGroups: [
      {
        title: '课程与项目',
        items: [
          '邮箱认证与个人资料管理',
          '课程创建、编辑、归档与删除',
          '项目管理与课程文件关联',
          '项目状态跟踪（待办 / 进行中 / 已完成）',
          'Dashboard 截止日期与最近项目',
        ],
      },
      {
        title: '文件管理',
        items: [
          '文件库与文件上传（单文件最大 50 MB）',
          '多级文件夹整理（最多 5 层）',
          '文件夹移动与重命名',
          '文件重命名（不影响已存内容）',
          '图片与 PDF 在线预览',
          '文件下载与全局搜索',
          '批量移到回收站、批量移动与批量恢复',
          'Dashboard 最近文件',
        ],
      },
      {
        title: '回收站与离线',
        items: [
          '文件回收站、恢复与永久删除',
          '一键清空回收站',
          '删除时间显示（今天 / 昨天 / N 天前）',
          '离线状态提示与恢复网络重试',
          '离线查看最近同步的课程列表',
        ],
      },
      {
        title: '数据安全',
        items: [
          'Supabase RLS 用户数据隔离',
          '列级权限控制（最小权限模型）',
          '私有存储桶与签名下载链接',
          '上传服务端二次校验',
        ],
      },
    ],
    status: 'Windows v0.5.0 正式版',
  },
  {
    id: 'liubai',
    name: '留白 · 日常记录',
    version: 'v0.1.0',
    platform: 'Web · PWA · Windows 桌面版',
    icon: `${import.meta.env.BASE_URL}liubai-icon.png`,
    description:
      '随手记下发生的事，在需要的时候找回当时的自己。一款纯本地的日常记录应用：随笔与活动分门别类，支持图片视频、日历、回顾与完整备份，所有数据只保存在自己的浏览器里。',
    tags: ['日记记录', 'React 19', 'PWA 离线可用', 'IndexedDB 本地存储', '图片/视频附件', '日历视图', '深色模式', '水彩背景模板', 'ZIP 备份恢复', '桌面版'],
    liveUrl: 'https://director-code-c.github.io/my-portfolio/liubai/',
    capabilityGroups: [
      {
        title: '记录与整理',
        items: [
          '随笔 / 活动两类记录，支持自定义分类',
          '图片与视频附件：文件选择、拖放、剪贴板粘贴上传',
          '标签、收藏、全文搜索与组合筛选',
          '日历视图按天浏览，归档页导出 CSV / Markdown',
          '回顾页按周聚合统计',
        ],
      },
      {
        title: '界面与主题',
        items: [
          '浅色 / 深色 / 跟随系统三档主题',
          '8 款背景模板：象牙纸纹 + 7 款水彩风景',
          '漂浮光斑与浮点动态背景，可随系统减少动效',
          '窄窗口单栏卡片布局，宽屏自动切换侧边栏',
        ],
      },
      {
        title: '数据安全与迁移',
        items: [
          '所有数据仅保存在本机浏览器 IndexedDB',
          '完整 ZIP 备份导出，含附件原文件',
          '导入前预览，相同内容自动去重，冲突保留副本',
          '回收站、恢复与彻底删除',
        ],
      },
      {
        title: '离线使用',
        items: [
          'PWA 预缓存全部资源，离线可完整使用',
          '可安装为独立窗口应用',
          'Windows 桌面版：双击图标即开，自动拉起本地服务',
          '新版本自动更新，不会停留在旧缓存',
        ],
      },
    ],
    localDataNote:
      '在线体验版的数据只保存在访客自己的浏览器中，与作者本机数据完全隔离；可在设置页开启演示模式快速查看示例内容。',
    status: 'Web 在线体验版',
  },
]
