export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg) => `你好${msg}！`
    }
  }
})
