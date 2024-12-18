# apollo-demo

https://app.apollo.io/#/companies

# 功能/組件分析

｜ 目錄 ｜ 子頁面 ｜

## 子頁面

1. 頭部
   標題 + 操作欄

2. 工具欄

- 視圖切換
- 過濾選項面板顯示隱藏
- 搜索欄
- 保存至視圖
- 排序
- 搜索設置

- 表格勾選後操作 bar

3. 過濾選項面板

- 頭部固定狀態選擇
- 折疊組
- 底部固定操作欄
  -- 清除
  -- 更詳細過濾設置面板
  覆蓋表格
  --- 頭部： 清除 篩選 收起按鈕
  --- 左側： 支持自定義排序功能
  --- 右側： 分組展示過濾項
  pin/unpin 按鈕

4. 表格

- 勾選框
- 左側固定欄
- 操作列，save 完 => 展示其他操作
- tag 欄，點擊實現篩選該 tag
- 表頭 +，彈出 drawer，同 search table
- 底部分頁

5. 空狀態

# 組件間關聯

## operate bar

1. default-view 路由控制
2. show/hide filter 控制 filter side 顯示隱藏
3. search 出現表格數據
4. save search 彈窗
5. 排序 控制表格
6. search setting 出現彈窗

## default filter side

1. 頭部狀態篩選 控制表格數據
2. filter 控制表格
3. 底部 清除 filter 控制 more filters 面板

## 表格

1. 勾選，operate bar 出現 new

## more filters

1. apply filter 控制 filter
2. 收起按鈕 展示 default filter side and table

多處控制
多個組件需要顯示相同的信息
搜索設置 過濾選項 字段

# 技術棧選擇

`Vite` + `React` + `Typescript` + `react-router-dom` + `zustand` + `tailwindcss` + `shadcn/ui` + `tanstack/table` + `radix/icon`

# 日誌

1. add tailwindcss and shadcn/ui config

2. searchparams 參數轉換 各組件用到的數據
   數據組織更新邏輯
