<template>
  <div>
    <div
      class="setting"
      @click="showDrawer"
      :style="{ position: 'fixed', top: '250', right: '0' }"
    >
      <a-icon type="setting"></a-icon>
    </div>
    <a-drawer
      title="设置"
      placement="right"
      @close="onClose"
      :visible="visible"
    >
      <div class="hello">
        <h1>{{ msg }}</h1>
        <a-button type="primary" @click="changeTheme('#992777')">默认</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#F5222D')">薄暮</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#FA541C')">火山</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#FAAD14')">日暮</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#13C2C2')">明青</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#52C41A')"
          >极光绿</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#1890FF')"
          >拂晓蓝</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#2F54EB')"
          >极客蓝</a-button
        ><br /><br />
        <a-button type="primary" @click="changeTheme('#722ED1')">酱紫</a-button
        ><br /><br />
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    changeTheme(primaryColor) {
      window.less.modifyVars({
        "@primary-color": primaryColor
      });
    }
  }
};
</script>
