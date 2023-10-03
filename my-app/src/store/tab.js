export default {
    state:{
        isCollapse:false//控制菜单打开收起
    },
    mutations:{
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}