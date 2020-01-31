<template>
  <a-row :gutter="16">
    <a-col :span="24">
      <outsideBanner @add="showAddModal"></outsideBanner>
      <outsideTable
        :data="data"
        :loading="loading"
        :pagination="pagination"
        @change="handleTableChange"
      ></outsideTable>
      <outsideAddModal
        :visiable="addVisiable"
        @handleOk="addHandelOk"
        @handleCancel="addHandelCancel"
      ></outsideAddModal>
    </a-col>
  </a-row>
</template>

<script>
import outsideTable from "@/components/user/outsidestaff/outsideTable";
import outsideBanner from "@/components/user/outsidestaff/outsideBanner";
import outsideAddModal from "@/components/user/outsidestaff/outsideAddModal";
export default {
  components: {
    outsideTable,
    outsideBanner,
    outsideAddModal
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
      loading: false,
      addVisiable: false
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
        depa: this.$store.state.loginInfo.depa
      };
      this.$http.get("guest", { params }).then(res => {
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
    showAddModal() {
      console.log("显示弹窗");
      this.addVisiable = true;
    },
    addHandelOk(values) {
      console.log("隐藏弹窗");
      this.addVisiable = false;
      this.$http.post("guest", values).then(res => {
        console.log(res);
        this.getData();
      });
    },
    addHandelCancel() {
      console.log("关闭弹窗");
      this.addVisiable = false;
    }
  }
};
</script>

<style></style>
