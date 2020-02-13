<template>
  <div>
    <div
      class="setting"
      @click="drawerhandel"
      :class="visible ? 'open' : 'close'"
    >
      <a-icon v-if="visible" type="close"></a-icon>
      <a-icon v-else type="setting"></a-icon>
    </div>
    <a-drawer
      title="设置"
      placement="right"
      @close="onClose"
      :visible="visible"
      :closable="false"
    >
      <h4>主题选择</h4>
      <a-row>
        <a-col :span="4">
          <div
            style="background-color:#1890ff"
            class="color"
            @click="changeTheme('#1890ff')"
          >
            <!-- 默认 -->
          </div>
        </a-col>
        <a-col :span="4">
          <div
            style="background-color:#F5222D"
            class="color"
            @click="changeTheme('#F5222D')"
          >
            <!-- 薄暮 -->
          </div>
        </a-col>
        <a-col :span="4">
          <div
            style="background-color:#FA541C"
            class="color"
            @click="changeTheme('#FA541C')"
          >
            <!-- 火山 -->
          </div>
        </a-col>
        <a-col :span="4">
          <div
            style="background-color:#FAAD14"
            class="color"
            @click="changeTheme('#FAAD14')"
          >
            <!-- 日暮 -->
          </div>
        </a-col>
        <a-col :span="4">
          <div
            style="background-color:#13C2C2"
            class="color"
            @click="changeTheme('#13C2C2')"
          >
            <!-- 明青 -->
          </div>
        </a-col>
        <a-col :span="4">
          <div
            style="background-color:#52C41A"
            class="color"
            @click="changeTheme('#52C41A')"
          >
            <!-- 极光绿 -->
          </div>
        </a-col>
      </a-row>
      <div style="height:20px"></div>
      <a-row>
        <a-col :span="4">
          <div
            style="background-color:#2F54EB"
            class="color"
            @click="changeTheme('#2F54EB')"
          >
            <!-- 极客蓝 -->
          </div>
        </a-col>
        <a-col :span="4">
          <div
            style="background-color:#722ED1"
            class="color"
            @click="changeTheme('#722ED1')"
          >
            <!-- 酱紫 -->
          </div>
        </a-col>
      </a-row>
      <a-divider></a-divider>
      <h4>侧边栏主题</h4>
      <a-row>
        <a-col :span="10">
          <div
            style="background-color:#ffffff"
            class="sider"
            @click="changeSider('#ffffff')"
          ></div>
        </a-col>
        <a-col :span="10">
          <div
            style="background-color:#001529"
            class="sider"
            @click="changeSider('#001529')"
          ></div>
        </a-col>
      </a-row>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      primaryColor: "",
      siderColor: ""
    };
  },
  methods: {
    drawerhandel() {
      this.visible ? this.onClose() : this.showDrawer();
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    changeTheme(primaryColor) {
      console.log(primaryColor);
      this.primaryColor = primaryColor;
      window.less.modifyVars({
        "@primary-color": primaryColor,
        "@layout-header-background": this.siderColor
      });
    },
    changeSider(siderColor) {
      console.log(siderColor);
      this.siderColor = siderColor;
      window.less.modifyVars({
        "@primary-color": this.primaryColor,
        "@layout-header-background": siderColor
      });
    }
  }
};
</script>

<style lang="less" scoped>
.open {
  position: fixed;
  top: 250px;
  right: 256px;
  z-index: 1001;
  transition: right 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);
}
.close {
  position: fixed;
  top: 250px;
  right: 0;
  transition: right 0.3s cubic-bezier(0.9, 0, 0.3, 0.7);
}
.color {
  border: solid 1px gray;
  height: 20px;
  width: 80%;
}
.sider {
  border: solid 1px gray;
  height: 50px;
  width: 80%;
}
</style>
