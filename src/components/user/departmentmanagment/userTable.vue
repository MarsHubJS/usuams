<template>
  <a-table
    :columns="columns"
    :rowKey="record => record.id"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <div slot="time" slot-scope="text">
      <span v-if="text">{{
        moment(text * 1000).format("YYYY-MM-DD HH:mm:ss")
      }}</span>
      <span v-else-if="!text">暂无记录</span>
    </div>
    <div slot="type" slot-scope="text">
      <a-tag v-show="text == 1" color="red">超级管理员</a-tag>
      <a-tag v-show="text == 2" color="orange">指导老师</a-tag>
      <a-tag v-show="text == 3" color="green">主席团</a-tag>
      <a-tag v-show="text == 4" color="cyan">部长团</a-tag>
      <a-tag v-show="text == 5" color="blue">干事</a-tag>
      <a-tag v-show="text == 6" color="purple">会外人员</a-tag>
    </div>
    <div slot="operation" slot-scope="text">
      <a @click="showUser(text)">查看</a>
      <a-divider type="vertical"></a-divider>
      <a @click="editUser(text)">编辑</a>
      <a-divider type="vertical"></a-divider>
      <a @click="deleteUser(text)">删除</a>
    </div>
  </a-table>
</template>

<script>
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    align: "center"
  },
  {
    title: "学号",
    dataIndex: "number",
    align: "center"
  },
  {
    title: "性别",
    dataIndex: "sex",
    align: "center"
  },
  {
    title: "学院",
    dataIndex: "collage",
    align: "center"
  },
  {
    title: "专业",
    dataIndex: "major",
    align: "center"
  },
  {
    title: "年级",
    dataIndex: "grade",
    align: "center"
  },
  {
    title: "班级",
    dataIndex: "class",
    align: "center"
  },
  {
    title: "部门",
    dataIndex: "department",
    align: "center"
  },
  {
    title: "用户权限",
    dataIndex: "user_type",
    scopedSlots: { customRender: "type" },
    align: "center"
  },
  {
    title: "入会时间",
    dataIndex: "join_date",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "退会时间",
    dataIndex: "exit_date",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "id",
    scopedSlots: { customRender: "operation" },
    align: "center"
  }
];

export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      data: [],
      pagination: {
        pageSize: 1,
        current: 1,
        total: 0
      },
      loading: false,
      columns
    };
  },
  methods: {
    getData() {
      this.loading = true;
      let params = {
        pageSize: this.pagination.pageSize,
        pageNumber: this.pagination.current
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
    }
  }
};
</script>

<style></style>
