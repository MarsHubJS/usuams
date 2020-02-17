<template>
  <a-row :gutter="16">
    <a-col :span="24">
      <outsideBanner @add="showAddModal"></outsideBanner>
      <outsideTable
        :data="data"
        :loading="loading"
        :pagination="pagination"
        @change="handleTableChange"
        @edit="showEditModal"
        @delete="deleteGuest"
        @agree="agree"
        @refuse="refuse"
      ></outsideTable>
      <outsideAddModal
        :visiable="addVisiable"
        @handleOk="addHandelOk"
        @handleCancel="addHandelCancel"
      ></outsideAddModal>
      <outsideEditModal
        :data="editData"
        :visiable="editVisiable"
        @handleOk="editHandelOk"
        @handleCancel="editHandelCancel"
      ></outsideEditModal>
    </a-col>
  </a-row>
</template>

<script>
import outsideTable from "@/components/user/outsidestaff/outsideTable";
import outsideBanner from "@/components/user/outsidestaff/outsideBanner";
import outsideAddModal from "@/components/user/outsidestaff/outsideAddModal";
import outsideEditModal from "@/components/user/outsidestaff/outsideEditModal";
export default {
  components: {
    outsideTable,
    outsideBanner,
    outsideAddModal,
    outsideEditModal
  },
  data() {
    return {
      data: [],
      selectedKeys: [],
      checkedKeys: [],
      addVisiable: false,
      editVisiable: false,
      editData: {},
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
        depa: this.$store.state.loginInfo.depa
      };
      this.$http.get("guest", { params }).then(res => {
        console.log(res);
        if (res.code === 0) {
          this.$message.success(res.msg);
          this.loading = false;
          this.data = res.data;
          this.pagination.total = res.total;
        } else {
          this.$message.error(res.msg);
        }
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
        if (res.code === 0) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    addHandelCancel() {
      console.log("关闭弹窗");
      this.addVisiable = false;
    },
    showEditModal(data) {
      console.log("显示弹窗");
      this.editData = data;
      this.editVisiable = true;
    },
    editHandelOk(values) {
      console.log("隐藏弹窗");
      this.editVisiable = false;
      this.$http.put(`guest/${this.editData.id}`, values).then(res => {
        console.log(res);
        if (res.code === 0) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    editHandelCancel() {
      console.log("关闭弹窗");
      this.editVisiable = false;
    },
    deleteGuest(id) {
      this.$http.delete(`guest/${id}`).then(res => {
        console.log(res);
        if (res.code === 0) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    agree(id) {
      let params = {
        depa: this.$store.state.loginInfo.depa
      };
      this.$http.put(`agree/${id}`, params).then(res => {
        console.log(res);
        if (res.code === 0) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    refuse(id) {
      this.$http.put(`refuse/${id}`).then(res => {
        console.log(res);
        if (res.code === 0) {
          this.$message.success(res.msg);
          this.getData();
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }
};
</script>

<style></style>
