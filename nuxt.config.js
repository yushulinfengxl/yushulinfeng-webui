// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 测试nuxt4
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // 监听
  devServer: {
    port: 3000,
    host: '',
    // url: "www.iqwq.com",
  },
  // 启用仅客户端渲染
  // ssr: false,
  vue: {
    // 这里告诉了vue前缀为"***-"的元素不是vue组件
    compilerOptions: {
      // isCustomElement: tag => tag.startsWith('i-') || tag.startsWith('xl-') || tag.startsWith('x-')
      isCustomElement: tag => tag.startsWith('xl-'),
    }
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  rootDir: "build-output",
  // 路由auto
  pages: true,
  appId: "yushulinfengApp",
  app: {
    teleportAttrs: {
      class: "tools"
    },
    // buildAssetsDir: "/_yushulinfeng____/",
    rootAttrs: {
      // root dom element id = _yushu
      'id': "root",
      'class': 'yushulinfeng',
      'lang': 'zh-CN',
    },
    // root dom element type
    rootTag: 'div',
    head: {
      title: 'i站',
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: "description",
          content: "Hi ~, This is my first community website."
        },
        {
          name: "keywords",
          content: "yushu,玉树临风,yushulinfeng,i站,iqwq"
        },
        {
          "charset": "utf-8"
        }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
        { src: '/script/custom-element.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
        { rel: 'stylesheet', href: '/' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' },
        { children: 'Hello world' }
      ]
    }
  },
})
