<template>
  <a-tree
    checkable
    v-model="checkedKey"
    @select="onSelect"
    :selectedKeys="selectedKeys"
    :treeData="treeData"
  />
</template>
<script>
const treeData = [
  {
    title: "超级管理员",
    key: "1"
  },
  {
    title: "指导老师",
    key: "2"
  },
  {
    title: "主席团",
    key: "3"
  },
  {
    title: "部长团",
    key: "4"
    // children: [
    //   { title: "办公室", key: "4-1" },
    //   { title: "IT部", key: "4-2" },
    //   { title: "生活权益部", key: "4-3" },
    //   { title: "体育部", key: "4-4" },
    //   { title: "外联部", key: "4-5" },
    //   { title: "文宣部", key: "4-6" },
    //   { title: "文娱部", key: "4-7" },
    //   { title: "学习部", key: "4-8" }
    // ]
  },
  {
    title: "干事",
    key: "5"
    // children: [
    //   { title: "办公室", key: "5-1" },
    //   { title: "IT部", key: "5-2" },
    //   { title: "生活权益部", key: "5-3" },
    //   { title: "体育部", key: "5-4" },
    //   { title: "外联部", key: "5-5" },
    //   { title: "文宣部", key: "5-6" },
    //   { title: "文娱部", key: "5-7" },
    //   { title: "学习部", key: "5-8" }
    // ]
  }
];

export default {
  props: {
    selectedKeys: {
      type: Array,
      default: () => {
        return [];
      }
    },
    checkedKeys: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      treeData,
      checkedKey: []
    };
  },
  watch: {
    checkedKey(val) {
      this.onCheck(val);
    }
  },
  methods: {
    onCheck(checkedKey) {
      console.log("onCheck", checkedKey);
      this.$emit("check", checkedKey);
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.$emit("select", selectedKeys);
    }
  }
};
</script>
