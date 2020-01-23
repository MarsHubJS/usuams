<template>
  <a-table
    :columns="columns"
    :rowKey="record => record.id"
    :dataSource="data"
    :loading="loading"
    :pagination="pagination"
    @change="handleTableChange"
  >
    <div slot="time" slot-scope="text">
      <span>{{ moment(text * 1000).format("YYYY-MM-DD HH:mm:ss") }}</span>
    </div>
  </a-table>
</template>

<script>
const columns = [
  {
    title: "事务名称",
    dataIndex: "name",
    align: "center"
  },
  {
    title: "申请时间",
    dataIndex: "create_date",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "开始时间",
    dataIndex: "start_date",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "结束时间",
    dataIndex: "end_date",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "负责人",
    dataIndex: "leader",
    align: "center"
  },
  {
    title: "优先级",
    dataIndex: "level",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "state",
    align: "center"
  },
  {
    title: "查看内容",
    dataIndex: "context",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "id",
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
        pageSize: 10,
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
        current: this.pagination.current
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
    }
  }
};
</script>

<style></style>
