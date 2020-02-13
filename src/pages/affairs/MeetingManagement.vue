<template>
  <div>
    <meetingBanner @add="showAddModal"></meetingBanner>
    <a-row :gutter="16">
      <a-col :span="24">
        <meetingTable
          :data="data"
          :loading="loading"
          :pagination="pagination"
          @change="handleTableChange"
          @edit="showEditModal"
          @delete="deleteMeeting"
        ></meetingTable>
        <meetingAddModal
          :visiable="addVisiable"
          @handleOk="addHandelOk"
          @handleCancel="addHandelCancel"
        ></meetingAddModal>
        <meetingEditModal
          :data="editData"
          :visiable="editVisiable"
          @handleOk="editHandelOk"
          @handleCancel="editHandelCancel"
        ></meetingEditModal>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import meetingTable from "@/components/affairs/meetingmanagement/meetingTable";
import meetingBanner from "@/components/affairs/meetingmanagement/meetingBanner";
import meetingAddModal from "@/components/affairs/meetingmanagement/meetingAddModal";
import meetingEditModal from "@/components/affairs/meetingmanagement/meetingEditModal";
export default {
  components: {
    meetingTable,
    meetingBanner,
    meetingAddModal,
    meetingEditModal
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
        current: this.pagination.current
      };
      this.$http.get("meeting", { params }).then(res => {
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
      this.$http.post("meeting", values).then(res => {
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
      this.$http.put(`meeting/${this.editData.id}`, values).then(res => {
        console.log(res);
        this.getData();
      });
    },
    editHandelCancel() {
      console.log("关闭弹窗");
      this.editVisiable = false;
    },
    deleteMeeting() {
      // this.$http.delete(`affair/${id}`).then(res => {
      //   console.log(res);
      //   this.getData();
      // });
    }
  }
};
</script>

<style></style>
