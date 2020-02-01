<template>
  <div>
    <depaBanner></depaBanner>
    <depaTable
      :data="data"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
    ></depaTable>
  </div>
</template>

<script>
import depaTable from "@/components/department/departmentmanagement/depaTable";
import depaBanner from "@/components/department/departmentmanagement/depaBanner";
export default {
  components: {
    depaTable,
    depaBanner
  },
  data() {
    return {
      data: [],
      pagination: {
        pageSize: 10,
        current: 1,
        total: 0,
        //showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => `总共 ${total} 条数据`
      },
      loading: false
      // addVisiable: false
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
        current: this.pagination.current
      };
      this.$http.get("department", { params }).then(res => {
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
    }
    // showAddModal() {
    //   console.log("显示弹窗");
    //   this.addVisiable = true;
    // },
    // addHandelOk(values) {
    //   console.log("隐藏弹窗");
    //   this.addVisiable = false;
    //   this.$http.post("guest", values).then(res => {
    //     console.log(res);
    //     this.getData();
    //   });
    // },
    // addHandelCancel() {
    //   console.log("关闭弹窗");
    //   this.addVisiable = false;
    // }
  }
};
</script>

<style></style>
