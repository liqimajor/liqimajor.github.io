import Vue from 'vue';
import App from './components/app';
import './assets/fonts/iconfont.css';

new Vue({
    el:"#root",
    render:h=>h(App)
})
console.log("process.env.NODE_ENV 的值是(app.js)："+ process.env.NODE_ENV)
