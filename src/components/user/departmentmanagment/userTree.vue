<template>
  <a-tree
    checkable
    @expand="onExpand"
    :expandedKeys="expandedKeys"
    :autoExpandParent="autoExpandParent"
    v-model="checkedKeys"
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
    key: "4",
    children: [
      { title: "办公室", key: "4-1" },
      { title: "IT部", key: "4-2" },
      { title: "文娱部", key: "4-3" }
    ]
  },
  {
    title: "干事",
    key: "5",
    children: [
      { title: "办公室", key: "5-1" },
      { title: "IT部", key: "5-2" },
      { title: "文娱部", key: "5-3" }
    ]
  }
];

export default {
  data() {
    return {
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treeData
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    }
  },
  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    }
  }
};
</script>
