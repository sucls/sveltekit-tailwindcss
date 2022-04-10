# 构建Svelte开发环境

	基于SvelteKit Storybook构建基于tailwindcss的Svelte开发环境

## SvelteKit

   通过svelteKit可以快速构建基于Svelte的开发环境，并且自带如下功能：

   + 服务端渲染（SSR）
   + 路由
   + typescript支持
   + less, scss支持
   + serverless
   + vite打包

   执行一下命令，生产初始项目：	
```
	$npm init svelte@next sveltekit-tailwindcss
    - 选择 Skeleton project
	- Use TypeScript? yes
	- Add ESLint for code linting? yes
	- Add Prettier for code formatting? yes
	- Add Playwright for browser testing? yes
	$cd sveltekit-tailwindcss
	$npm install
	$npm run dev -- --open
```


## storybook

   storybook是一款UI开发工具组件，目前支持主流前端框架，React、Vue、React，它允许开发者浏览组件库，查看每个组件的不同状态，以及交互地开发和测试组件。为项目添加storybook，用于开发私有组件。
	
```
	npx sb init
	npm run storybook
```
   由于storybook是基于CommonJs，修改.storybook/main.js；添加package.json，配置storybook基于CommonJs规范。
	
	
## tailwindcss

   Tailwind CSS 是一个功能类优先的 **CSS 框架**，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。

```
	npm install tailwindcss
	npx tailwind init
```
   注意需要修改tailwind.config.js、postcss.config.js，后缀为cjs，因为SvelteKit是基于ESM规范的，通过修改js后缀.mjs、.cjs能够根据ESM、CommonJs规范解析。
	或者直接通过svelte-add
```
	npx svelte-add@latest tailwindcss
```

   因为tailwindcss是以插件的形式执行，需要配置postcss
	postcss.config.js
	svelte.config.js
	配置tailwind.config.js样式处理的目录

## 图标库

	添加图标库，material-design-icons，直接通过import '@mdi/font/css/materialdesignicons.min.css'在项目中使用。
```
	npm i -D @mdi/font
```

## svelte-heroicons

```
	npm install @rgossiaux/svelte-heroicons
```

## 其他配置

   + 支持ts文件能够识别import，在tsconfig.json中添加path，将别名配置加上
   + 


## 问题

   - 在css文件中通过 @import 'xxx'导入外部css默认从src开始，即package.json对应的main路径，如果想导入node_modules中的css文件，则需要通过类似 url(~xxx)的形式，此时依赖css-loader，那么如何配置svelte.config.js？
  
   - 在安装外部依赖的时候，经常出现依赖被删除，需要通过npm update更新
  
   - 注意不同模块有的是基于ESM有的是基于CommonJs，如果在pageage.json中配置type:"module|commonjs"则是全局生效，可以通过*.mjs与*.cjs来处理
  



## 相关

> 布局 
   + *[admin-one-tailwind](https://github.com/justboil/admin-one-tailwind)
   + [tailwind-dashboard-windster](https://github.com/themesberg/tailwind-dashboard-windster)
> 组件
   + *[svelte-headlessui](https://github.com/rgossiaux/svelte-headlessui)
   + *[notus-svelte](https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus)
> 其他
   + [vue-tailwind](https://www.vue-tailwind.com/)
   + [layoutsfortailwind](https://layoutsfortailwind.lalokalabs.dev/)
   + [starter-dashboard-layout](https://github.com/Kamona-WD/starter-dashboard-layout)
   + [kui-dashboard-vue](https://github.com/kamona-ui/kui-dashboard-vue)
   + [cleopatra](https://github.com/moesaid/cleopatra)