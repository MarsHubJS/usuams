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
    <div slot="operation">
      <a>查看</a>
      <a-divider type="vertical"></a-divider>
      <a>编辑</a>
      <a-divider type="vertical"></a-divider>
      <a>删除</a>
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
    title: "审核人",
    dataIndex: "reviewer",
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
  // {
  //   title: "查看内容",
  //   dataIndex: "context",
  //   align: "center",
  //   width: "20%"
  // },
  {
    title: "操作",
    dataIndex: "id",
    scopedSlots: { customRender: "operation" },
    align: "center"
  }
];

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    loading: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          current: 1, //初始页
          pageSize: 10, //分页大小
          total: 0 //数据总数
        };
      }
    }
  },
  data() {
    return {
      columns
    };
  },
  methods: {
    handleTableChange(pagination) {
      this.$emit("change", pagination);
    }
  }
};
</script>

<style></style>
