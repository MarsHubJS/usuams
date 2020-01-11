<template>
  <a-layout style="height:100%" id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['sub1']"
        mode="inline"
        theme="dark"
        :inlineCollapsed="collapsed"
      >
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="solution" />
            <span>事务管理</span>
          </span>
          <a-menu-item key="1">活动管理</a-menu-item>
          <a-menu-item key="2">例会管理</a-menu-item>
          <a-menu-item key="3">部门事务</a-menu-item>
          <a-menu-item key="4">组织建设</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="team" />
            <span>人员管理</span>
          </span>
          <a-menu-item key="5">部门管理</a-menu-item>
          <a-menu-item key="6">部门招新</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="dollar" />
            <span>财产管理</span>
          </span>
          <a-menu-item key="9">办公室</a-menu-item>
          <a-menu-item key="10">资产</a-menu-item>
        </a-sub-menu>
        <!-- <a-sub-menu key="sub4">
          <span slot="title">
            <a-icon type="sound" />
            <span>论坛/个性化</span>
          </span>
          <a-menu-item key="13">Option 5</a-menu-item>
          <a-menu-item key="14">Option 6</a-menu-item>
          <a-menu-item key="15">Option 7</a-menu-item>
          <a-menu-item key="16">Option 8</a-menu-item>
        </a-sub-menu> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    };
  }
};
</script>
<style lang="less">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
