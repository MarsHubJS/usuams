<template>
  <div>
    <userBanner></userBanner>
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
        ></userTable>
      </a-col>
    </a-row>
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
import userTree from "@/components/user/usermanagement/userTree";
import userBanner from "@/components/user/usermanagement/userBanner";
import userEditModal from "@/components/user/usermanagement/userEditModal";
export default {
  components: {
    userTable,
    userTree,
    userBanner,
    userEditModal
  },
  data() {
    return {
      data: [],
      selectedKeys: [],
      checkedKeys: [],
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
        current: this.pagination.current,
        type: this.checkedKeys
      };
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
    showEditModal(user) {
      console.log("显示弹窗");
      this.editUser = user;
      this.editVisiable = true;
    },
    editHandelOk() {
      console.log("隐藏弹窗");
      this.editVisiable = false;
    },
    editHandelCancel() {
      console.log("关闭弹窗");
      this.editVisiable = false;
    }
  }
};
</script>

<style></style>
