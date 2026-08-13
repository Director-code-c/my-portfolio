// 作品数据：以后新增作品时，向数组末尾追加一个对象即可。

export const projects = [
  {
    id: 'ai-paper-reader',
    name: '外文论文 AI 阅读器',
    version: 'v0.1.1',
    platform: 'Windows x64',
    icon: `${import.meta.env.BASE_URL}ai-paper-reader.png`,
    description: '轻量级 AI 辅助外文论文阅读工具，帮助完成阅读、翻译、总结与知识整理。',
    tags: ['PDF / TXT', '选区翻译', 'AI 总结', '单词本', '批注', '记录中心', 'Markdown 导出'],
    // Windows 正式版安装包，托管于 GitHub Releases
    downloadUrl:
      'https://github.com/Director-code-c/ai-paper-reader-releases/releases/download/v0.1.1/AI.Setup.0.1.1.exe',
    capabilities: [
      'PDF / TXT 阅读',
      'PDF 文本选择',
      'AI 选区翻译',
      'AI 选区总结',
      'AI 全文总结',
      '单词本',
      '重复选词提醒',
      '文本批注',
      '跨论文记录中心',
      'Markdown 导出',
      '最近阅读',
      'Light / Dark / System 主题',
    ],
    status: 'Windows v0.1.1 正式版',
  },
]
