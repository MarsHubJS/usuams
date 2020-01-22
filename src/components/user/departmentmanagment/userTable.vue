<template>
  <a-table
    :columns="columns"
    :rowKey="record => record.id"
    :dataSource="data"
    :loading="loading"
  >
    <div slot="time" slot-scope="text">
      <span>{{ moment(text * 1000).format("YYYY-MM-DD HH:mm:ss") }}</span>
    </div>
  </a-table>
</template>

<script>
const columns = [
  {
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "学号",
    dataIndex: "number"
  },
  {
    title: "用户名",
    dataIndex: "username"
  },
  {
    title: "性别",
    dataIndex: "sex"
  },
  {
    title: "学院",
    dataIndex: "collage"
  },
  {
    title: "专业",
    dataIndex: "major"
  },
  {
    title: "年级",
    dataIndex: "grade"
  },
  {
    title: "班级",
    dataIndex: "class"
  },
  {
    title: "部门",
    dataIndex: "department"
  },
  {
    title: "用户权限",
    dataIndex: "user_type"
  },
  {
    title: "入会时间",
    dataIndex: "join_date",
    scopedSlots: { customRender: "time" }
  },
  {
    title: "退会时间",
    dataIndex: "exit_date",
    scopedSlots: { customRender: "time" }
  },
  {
    title: "操作",
    dataIndex: "id"
  }
];

export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    };
  },
  methods: {
    getData() {
      this.loading = true;
      this.$http.get("user").then(res => {
        console.log(res);
        this.loading = false;
        this.data = res.data;
      });
    }
  }
};
</script>

<style></style>
