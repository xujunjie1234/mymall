import { debounce } from "./utils"

export const itemImageListener = {
    data() {
        return {
            homeImageListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 20)
        //3,监听item中图片加载完成
        this.homeImageListener = () => {
            refresh()
        }
        //监听全局事件
        this.$bus.$on('imageLoaded', this.homeImageListener)
    }
}