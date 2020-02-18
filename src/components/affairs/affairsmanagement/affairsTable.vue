<template>
  <a-table
    :columns="columns"
    :rowKey="record => record.id"
    :dataSource="data"
    :loading="loading"
    :pagination="pagination"
    :rowSelection="rowSelection"
    @change="handleTableChange"
  >
    <div slot="time" slot-scope="text">
      <span>{{ moment(text * 1000).format("YYYY-MM-DD HH:mm:ss") }}</span>
    </div>
    <div slot="operation" slot-scope="text, record">
      <a>查看</a>
      <a-divider type="vertical"></a-divider>
      <a
        @click="review(text)"
        v-show="
          $store.state.loginInfo.uid === record.reviewer &&
            record.state === '待审核'
        "
        >通过审核</a
      >
      <a-divider
        type="vertical"
        v-show="
          $store.state.loginInfo.uid === record.reviewer &&
            record.state === '待审核'
        "
      ></a-divider>
      <a @click="editAffairs(record)">编辑</a>
      <a-divider type="vertical"></a-divider>
      <a-popconfirm title="确定要删除?" @confirm="deleteAffairs(text)">
        <a @click="showDelete(text)">删除</a>
      </a-popconfirm>
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
    dataIndex: "leader_name",
    align: "center"
  },
  {
    title: "审核人",
    dataIndex: "reviewer_name",
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
      columns,
      deleteVisiable: false,
      rowSelection: {
        onChange: selectedRowKeys => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`);
        }
      }
    };
  },
  methods: {
    handleTableChange(pagination) {
      this.$emit("change", pagination);
    },
    editAffairs(data) {
      console.log("编辑");
      this.$emit("edit", data);
    },
    showDelete() {
      this.deleteVisiable = true;
    },
    deleteAffairs(id) {
      this.deleteVisiable = false;
      this.$emit("delete", id);
    },
    review(id) {
      this.$emit("review", id);
    }
  }
};
</script>

<style></style>
