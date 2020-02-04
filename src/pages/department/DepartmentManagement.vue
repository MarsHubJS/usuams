<template>
  <div>
    <depaBanner @add="showAddModal"></depaBanner>
    <depaTable
      :data="data"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
      @delete="deleteDepa"
      @edit="showEditModal"
    ></depaTable>
    <depaAddModal
      :visiable="addVisiable"
      @handleOk="addHandelOk"
      @handleCancel="addHandelCancel"
    ></depaAddModal>
    <depaEditModal
      :data="editData"
      :visiable="editVisiable"
      @handleOk="editHandelOk"
      @handleCancel="editHandelCancel"
    ></depaEditModal>
  </div>
</template>

<script>
import depaTable from "@/components/department/departmentmanagement/depaTable";
import depaBanner from "@/components/department/departmentmanagement/depaBanner";
import depaAddModal from "@/components/department/departmentmanagement/depaAddModal";
import depaEditModal from "@/components/department/departmentmanagement/depaEditModal";
export default {
  components: {
    depaTable,
    depaBanner,
    depaAddModal,
    depaEditModal
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
      addVisiable: false,
      editVisiable: false,
      editData: {}
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
    },
    showAddModal() {
      console.log("显示弹窗");
      this.addVisiable = true;
    },
    addHandelOk(values) {
      console.log("隐藏弹窗");
      this.addVisiable = false;
      this.$http.post("department", values).then(res => {
        console.log(res);
        this.getData();
      });
    },
    addHandelCancel() {
      console.log("关闭弹窗");
      this.addVisiable = false;
    },
    editHandelOk(values) {
      console.log("隐藏弹窗");
      this.editVisiable = false;
      this.$http.put(`department/${this.editData.id}`, values).then(res => {
        console.log(res);
        this.getData();
      });
    },
    editHandelCancel() {
      console.log("关闭弹窗");
      this.editVisiable = false;
    },
    deleteDepa(id) {
      this.$http.delete(`department/${id}`).then(res => {
        console.log(res);
        this.getData();
      });
    },
    showEditModal(data) {
      this.editData = data;
      this.editVisiable = true;
    }
  }
};
</script>

<style></style>
