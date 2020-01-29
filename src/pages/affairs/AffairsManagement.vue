<template>
  <a-row :gutter="16">
    <a-col :span="5">
      <affairsTree
        :selectedKeys="selectedKeys"
        :checkedKeys="checkedKeys"
        @check="onCheck"
        @select="onSelect"
      ></affairsTree>
    </a-col>
    <a-col :span="19">
      <affairsTable
        :data="data"
        :loading="loading"
        :pagination="pagination"
        @change="handleTableChange"
      ></affairsTable>
    </a-col>
  </a-row>
</template>

<script>
import affairsTable from "@/components/affairs/affairsmanagment/affairsTable";
import affairsTree from "@/components/affairs/affairsmanagment/affairsTree";
export default {
  components: {
    affairsTable,
    affairsTree
  },
  data() {
    return {
      data: [],
      selectedKeys: [],
      checkedKeys: [],
      pagination: {
        pageSize: 10,
        current: 1,
        total: 0,
        //showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => `总共 ${total} 条数据`
      },
      loading: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      let params = {
        pageSize: this.pagination.pageSize,
        current: this.pagination.current,
        state: this.checkedKeys,
        uid: this.$store.state.loginInfo.uid
      };
      this.$http.get("affair", { params }).then(res => {
        console.log(res);
        this.loading = false;
        this.data = res.data;
        this.pagination.total = res.total;
      });
    },
    handleTableChange(pagination) {
      console.log(pagination);
      this.pagination.current = pagination.current;
      this.getData();
    },
    onCheck(checkedKeys) {
      this.checkedKeys = checkedKeys;
      this.getData();
    },
    onSelect(selectedKeys) {
      this.selectedKeys = selectedKeys;
    }
  }
};
</script>

<style></style>
