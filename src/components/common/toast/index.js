import Toast from "./Toast.vue"

const obj = {}

//install函数执行的时候默认会传入vue作为参数
obj.install = function(Vue) {
    //1,console.log('obj')
    //创建组件构造器
    const toastConstructor = Vue.extend(Toast);
    //2,new一个组件对象
    const toast = new toastConstructor();
    //3,将组件对象手动挂载到某一个元素中
    toast.$mount(document.createElement('div'));

    //4,toast.$el就是div
    document.body.appendChild(toast.$el);
    // console.log(Vue)
    Vue.prototype.$toast = toast;
};

export default obj;