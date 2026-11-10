# win12-online-vue

基于 Vue 3 + TypeScript 的网页版桌面操作系统模拟项目，目标是在浏览器里使用 Vue3 还原并改进 Windows 12 Online 。

> **项目状态：早期开发中。** 目前只完成了桌面外壳和数据模型的基础骨架，窗口管理、文件系统、开始菜单等都还只是最小实现，距离可用还有较大差距，接口和目录结构都可能调整。

## 当前已实现

- 开机加载页、锁屏登录页与页面过渡
- 桌面壁纸、桌面图标与框选多选
- 窗口容器：标题栏拖拽、点击置顶、关闭
- Dock：由已打开窗口的状态派生，聚合同一应用、点击聚焦
- 应用注册表与统一的启动入口
- 静态文件树与按扩展名分发打开意图（`txt` / `exe`）

## 尚未实现

- 最小化、最大化、窗口缩放
- 开始菜单、任务栏、搜索
- WinUI 风格组件库（目前只有按钮和窗口标题栏按钮）
- 真实的文件增删改、文件资源管理器、持久化
- 主题切换（`dark` 主题变量尚未补全）
- 移动端适配、键盘操作与无障碍
- 自动化测试与 CI

## 技术栈

- Vue 3（`<script setup>` + TypeScript）
- Vite
- Pinia
- Vue Router（Memory History）
- Sass
- Iconify Fluent 图标
- oxlint + ESLint + Prettier

## 快速开始

要求 Node `^22.18.0 || >=24.12.0`，包管理器使用 pnpm。

```sh
pnpm install
pnpm dev        # 启动开发服务器
pnpm build      # 类型检查 + 生产构建
pnpm preview    # 预览构建产物
pnpm lint       # oxlint + eslint
pnpm format     # Prettier 格式化
```

## 目录结构

```
src/
├── apps/         应用注册表与各应用的实现
│   ├── registry.ts   appId → 标题 / 图标 / 组件
│   └── about/        "关于"应用
├── components/   桌面外壳与通用组件（窗口、Dock、文件视图等）
├── views/        路由页面：开机加载 / 锁屏 / 桌面
├── stores/       纯状态：window / files / config
├── services/     组合层：launcher（负责把"启动请求"变成窗口）
├── typed/        领域类型定义
├── styles/       全局样式、CSS 变量与主题
├── router/       路由配置
└── utils/        工具函数
```

## 下一步

1. **搭建 WinUI 风格组件库**：补齐 `Button`、`Input`、`Checkbox`、`Switch`、`Slider`、`ListView`、`Dialog`、`InfoBar` 等基础组件。
2. **添加第一批应用**：记事本、文件资源管理器、设置、计算器、终端等，用来验证组件库和窗口系统。
3. 完善窗口生命周期（最小化 / 最大化 / 缩放 / 边界）。
4. 实现开始菜单与搜索。
5. 主题切换、状态持久化等。

## 许可证

[Eclipse Public License 2.0](./LICENSE)
