// 作品数据：以后新增作品时，向数组末尾追加一个对象即可。

export const projects = [
  {
    id: 'ai-paper-reader',
    name: '知研 AI（外文论文 AI 阅读器）',
    version: 'v0.11.0',
    platform: 'Windows x64',
    icon: `${import.meta.env.BASE_URL}ai-paper-reader.png`,
    description:
      'AI 驱动的论文阅读、原文证据管理与科研知识结构工具，支持单论文阅读图、多论文研究脉络和 Markdown 科研笔记导出。',
    tags: ['PDF 阅读', 'AI 翻译', 'Paper Map', 'Citation', 'Research Lineage', '知识库', 'Markdown 导出', 'Undo / Redo'],
    // Windows 正式版安装包，托管于 GitHub Releases
    downloadUrl:
      'https://github.com/Director-code-c/ai-paper-reader-releases/releases/download/v0.11.0/AI.Setup.0.11.0.exe',
    capabilities: [
      'PDF / TXT 论文导入与阅读',
      '划词 AI 翻译与学术总结',
      '本地单词本与重复选词提醒',
      '本地论文知识库与项目级检索',
      'Paper Map 单论文结构化阅读图',
      '划选原文加入阅读图',
      'Citation 页码、原文摘录与来源管理',
      '点击证据跳回 PDF 对应位置',
      '节点编辑、拖动、连线与自动布局',
      'Undo / Redo，最多保存 50 步',
      'Research Lineage 多论文研究脉络',
      '论文关系与方法演进整理',
      'AI 关系建议与脉络分析',
      'Markdown 科研笔记导出',
      'SQLite 本地存储',
    ],
    status: 'Windows v0.11.0 正式版',
  },
]
