## 2023-07-04

```
项目初始化：
npm i -g pnpm
pnpm create vite

1. 启动打开页面
 在vite后面添加 --open
2. 添加eslint
pnpm i eslint -D
3. 添加eslint相关插件
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier esint-plugin-node @babel/eslint-parser


pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier

4. 安装css格式化相关
    pnpm add sass sass-loader  stylelint postcss postcss-scss postcss-html stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-scss stylelint-config-standard-vue stylelint-order stylelint-scss -D
    注意：stylelint-config-prettier  从styelint v15开始，所有与样式相关的规则都已弃用。如果您使用的是v15或更高版本，并且没有使用这些已弃用的规则，则不再需要此插件。

5. 安装husky 规范代码提交
pnpm i -D husky
npx husky-init

如果是mac电脑，需要给pre-commit加上执行权限  chmod +x pre-comit

6. 配置commotlint

pnpm add @commitlint/config-conventional @commitlint/cli -D
npx husky add .husky/commit-msg

7. 安装element-plus
 pnpm i element-plus
 pnpm i @element-plus/icons-vue

```
