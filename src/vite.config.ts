import { resolve } from 'path'

export default {
  base:'/jsvite/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        idbn: resolve(__dirname, 'idbn.html'),
      }
    }
  }
}