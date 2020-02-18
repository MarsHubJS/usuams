<template>
  <div>
    <affairsBanner @add="showAddModal"></affairsBanner>
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
          @edit="showEditModal"
          @delete="deleteAffairs"
          @review="review"
        ></affairsTable>
        <affairsAddModal
          :visiable="addVisiable"
          @handleOk="addHandelOk"
          @handleCancel="addHandelCancel"
        ></affairsAddModal>
        <affairsEditModal
          :data="editData"
          :visiable="editVisiable"
          @handleOk="editHandelOk"
          @handleCancel="editHandelCancel"
        ></affairsEditModal>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import affairsTable from "@/components/affairs/affairsmanagement/affairsTable";
import affairsTree from "@/components/affairs/affairsmanagement/affairsTree";
import affairsBanner from "@/components/affairs/affairsmanagement/affairsBanner";
import affairsAddModal from "@/components/affairs/affairsmanagement/affairsAddModal";
import affairsEditModal from "@/components/affairs/affairsmanagement/affairsEditModal";
export default {
  components: {
    affairsTable,
    affairsTree,
    affairsBanner,
    affairsAddModal,
    affairsEditModal
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
    },
    showAddModal() {
      console.log("显示弹窗");
      this.addVisiable = true;
    },
    addHandelOk(values) {
      console.log("隐藏弹窗");
      this.addVisiable = false;
      this.$http.post("affair", values).then(res => {
        console.log(res);
        this.getData();
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
      this.$http.put(`affair/${this.editData.id}`, values).then(res => {
        console.log(res);
        this.getData();
      });
    },
    editHandelCancel() {
      console.log("关闭弹窗");
      this.editVisiable = false;
    },
    deleteAffairs(id) {
      this.$http.delete(`affair/${id}`).then(res => {
        console.log(res);
        this.getData();
      });
    },
    review(id) {
      this.$http.put(`review/${id}`).then(res => {
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
