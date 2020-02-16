<template>
  <div>
    <userBanner @add="showAddModal"></userBanner>
    <a-row :gutter="16">
      <a-col :span="5">
        <userTree
          :selectedKeys="selectedKeys"
          :checkedKeys="checkedKeys"
          @check="onCheck"
          @select="onSelect"
        ></userTree>
      </a-col>
      <a-col :span="19">
        <userTable
          :data="data"
          :loading="loading"
          :pagination="pagination"
          @change="handleTableChange"
          @edit="showEditModal"
          @delete="deleteUser"
          @stay="stay"
          @leave="leave"
        ></userTable>
      </a-col>
    </a-row>
    <userAddModal
      :visiable="addVisiable"
      @handleOk="addHandelOk"
      @handleCancel="addHandelCancel"
    ></userAddModal>
    <userEditModal
      :user="editUser"
      :visiable="editVisiable"
      @handleOk="editHandelOk"
      @handleCancel="editHandelCancel"
    ></userEditModal>
  </div>
</template>

<script>
import userTable from "@/components/user/usermanagement/userTable";
import userTree from "@/components/user/usermanagement/tea/teaUserTree";
import userBanner from "@/components/user/usermanagement/userBanner";
import userEditModal from "@/components/user/usermanagement/userEditModal";
import userAddModal from "@/components/user/usermanagement/userAddModal";
export default {
  components: {
    userTable,
    userTree,
    userBanner,
    userEditModal,
    userAddModal
  },
  data() {
    return {
      data: [],
      selectedKeys: [],
      checkedKeys: [],
      addVisiable: false,
      editVisiable: false,
      editUser: {},
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
        current: this.pagination.current
      };
      if (this.checkedKeys.length === 0) {
        params.type = [3, 4, 5];
      } else {
        params.type = this.checkedKeys;
      }
      this.$http.get("user", { params }).then(res => {
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
    },
    showAddModal() {
      console.log("显示弹窗");
      this.addVisiable = true;
    },
    showEditModal(user) {
      console.log("显示弹窗");
      this.editUser = user;
      this.editVisiable = true;
    },
    addHandelOk(values) {
      console.log("隐藏弹窗");
      this.addVisiable = false;
      this.$http.post("user", values).then(res => {
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
      this.$http.put(`user/${this.editUser.id}`, values).then(res => {
        console.log(res);
        this.getData();
      });
    },
    editHandelCancel() {
      console.log("关闭弹窗");
      this.editVisiable = false;
    },
    deleteUser(id) {
      this.$http.delete(`user/${id}`).then(res => {
        console.log(res);
        this.getData();
      });
    },
    stay(id) {
      this.$http.put(`stay/${id}`).then(res => {
        console.log(res);
        this.getData();
      });
    },
    leave(id) {
      this.$http.put(`leave/${id}`).then(res => {
        console.log(res);
        this.getData();
      });
    }
  }
};
</script>

<style></style>
