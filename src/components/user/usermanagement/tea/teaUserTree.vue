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
    title: "主席团",
    key: "3"
  },
  {
    title: "部长团",
    key: "4"
  },
  {
    title: "干事",
    key: "5"
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
