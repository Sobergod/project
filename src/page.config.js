// 顶级页面基础信息设置,包括图标,底部栏结构等
import { routersPart } from "./router.config.js";
const Header = {
    style: {
        color: "" || "#fff",
        backgroundColor: "" || "#2196F3",
    },
    iconColor: "" || "#fff",
}
/**
* tabbar选择栏位基础样式设置
* icon推荐使用字体图标,直接给class名即可
* iconType==2!important, 
* list推荐最多配置5个
*/
function _setTabBar() {
    const TabBar = {
        style: {
            color: "grey" || "#000",
            backgroundColor: "" || "#fff",
        },
        selectColor: "" || "#2196F3",
        iconType: 2, //0代表字体图标,1代表图片,2代表ui自带
        list: [
            {
                icon: "home",
                selectIcon: "",
                text: "主页",
            },
            {
                icon: "person",
                selectIcon: "",
                text: "我的",
            }
        ]
    }
    setTimeout(() => {
        for (let i in routersPart) {
            TabBar.list[i].pagePath = routersPart[i].path;
            TabBar.list[i].name = routersPart[i].name;
        }
    }, 0)
    return TabBar
}
const TabBar = _setTabBar()

export {
    Header,
    TabBar
}