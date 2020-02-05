<template>
  <div>
    <a-row>
      <a-col :span="2">
        <a-button type="primary" @click="showAddModal">新增事务</a-button>
      </a-col>
      <a-col :span="2">
        <a-button type="danger">批量删除</a-button>
      </a-col>
      <a-col :span="4">
        <a-input placeholder="名称模糊查询"></a-input>
      </a-col>
    </a-row>
    <div style="height:16px"></div>
  </div>
</template>

<script>
export default {
  methods: {
    showAddModal() {
      this.$emit("add");
    }
  }
};
</script>

<style></style>
