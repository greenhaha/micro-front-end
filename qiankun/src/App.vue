<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider v-show="silderFlag">
        <main-menu :menus="menus" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="Header"
            @back="() => silderFlag=!silderFlag"
          />
        </a-layout-header>
        <a-layout-content>
            <router-view v-show="$route.name" />
            <!-- 子应用渲染区，用于挂载子应用节点 -->
            <section v-show="!$route.name" id="frame"></section>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>

</template>

<script>
import MainMenu from '@/components/menu/index.vue'
export default {
  components: {
    MainMenu
  },
  data () {
    return {
      silderFlag: true,
      menus: [
        {
          key: 'Home',
          title: '主页',
          path: '/'
        },
        {
          key: 'VueMicroApp',
          title: 'Vue 主页',
          path: '/vue'
        },
        {
          key: 'VueMicroAppList',
          title: 'Vue 列表页',
          path: '/vue/list'
        },
        {
          key: 'ReactMicroApp',
          title: 'React 主页',
          path: '/react'
        },
        {
          key: 'ReactMicroAppList',
          title: 'React 列表页',
          path: '/react/list'
        },
        {
          key: 'AngularMicroApp',
          title: 'Angular 主页',
          path: '/angular'
        },
        {
          key: 'AngularMicroAppList',
          title: 'Angular 列表页',
          path: '/angular/list'
        },
        {
          key: 'StaticMicroApp',
          title: 'Static 微应用',
          path: '/static'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after{
  border-bottom: 2px solid rgba($color: #fff, $alpha: 0)!important;
}
#components-layout-demo-basic {
  text-align: center;
  height: 100vh;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: rgb(255, 255, 255);
  color: #2c3e50;
}
#components-layout-demo-basic .ant-layout-header{
  padding:0
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #1c2429;
  color: #2c3e50;
  // line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgb(241, 243, 245);
  color: #2c3e50;
  // min-height: 120px;
  // line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
  height: 100vh;
}
</style>
