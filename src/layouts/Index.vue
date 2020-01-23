<template>
  <a-layout style="height:100%" id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu
        :openKeys="openKeys"
        :defaultSelectedKeys="[`${this.$route.meta.key}`]"
        mode="inline"
        theme="dark"
        :inlineCollapsed="collapsed"
        @openChange="openChange"
      >
        <a-menu-item key="" @click="selectHome">
          <router-link :to="{ path: '/home' }">
            <a-icon type="home" />
            <span>首页</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="affair">
          <span slot="title">
            <a-icon type="solution" />
            <span>事务管理</span>
          </span>
          <a-menu-item key="affairsmanagement">
            <router-link :to="{ path: '/affairsmanagement' }">
              活动管理
            </router-link>
          </a-menu-item>
          <a-menu-item key="meetingmanagement">
            <router-link :to="{ path: '/meetingmanagement' }">
              例会管理
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="user">
          <span slot="title">
            <a-icon type="team" />
            <span>人员管理</span>
          </span>
          <a-menu-item key="departmentmanagement">
            <router-link :to="{ path: '/departmentmanagement' }">
              部门管理
            </router-link>
          </a-menu-item>
          <a-menu-item key="departmentrecruitment">
            <router-link :to="{ path: '/departmentrecruitment' }">
              部门招新
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <!-- <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="dollar" />
            <span>财产管理</span>
          </span>
          <a-menu-item key="9">办公室</a-menu-item>
          <a-menu-item key="10">资产</a-menu-item>
        </a-sub-menu> -->
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
        <a-row type="flex" align="middle">
          <a-col :span="8">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-col :span="8" style="text-align:center">
            <span class="title">
              <a-icon type="block" />高校学生会事务管理系统
            </span>
          </a-col>
          <a-col :span="7" style="text-align:right">
            <a-tag color="red">超级管理员</a-tag>
            <a-divider type="vertical" />
            <span>{{ this.$store.state.loginInfo.username }}</span>
            <a-divider type="vertical" />
            <a @click="logout"><a-icon type="poweroff" />退出</a>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-breadcrumb style="margin: 16px 0 0 0;padding: 0 24px 0 24px">
        <a-breadcrumb-item v-show="this.$route.meta.name !== '首页'">
          {{ this.$route.meta.subname }}
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ this.$route.meta.name }} </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          margin: '16px',
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
      collapsed: false,
      rootSubmenuKeys: ["affairs", "user"],
      openKeys: [`${this.$route.meta.subkey}`]
    };
  },
  methods: {
    openChange(openKeys) {
      console.log(openKeys);
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      this.openKeys = latestOpenKey ? [latestOpenKey] : [];
    },
    selectHome() {
      this.openKeys = [];
    },
    logout() {
      this.$router.push("/login");
      sessionStorage.clear();
      this.$router.go(0);
    }
  }
};
</script>
<style lang="less">
.title {
  padding: 5px 30px;
  font-size: 16px;
  font-weight: 800;
  border: 2px solid rgb(207, 207, 207);
  border-radius: 50px;
}
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
