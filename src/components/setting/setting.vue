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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
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
    }
  }
};
</script>
