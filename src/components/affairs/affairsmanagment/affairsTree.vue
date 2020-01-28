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
    title: "待审核",
    key: "待审核"
  },
  {
    title: "已创建",
    key: "已创建"
  },
  {
    title: "已开始",
    key: "已开始"
  },
  {
    title: "已结束",
    key: "已结束"
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
