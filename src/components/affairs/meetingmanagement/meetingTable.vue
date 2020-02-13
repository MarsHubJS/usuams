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
    <div slot="operation" slot-scope="text, record">
      <a>查看</a>
      <a-divider type="vertical"></a-divider>
      <a @click="editMeeting(record)">编辑</a>
      <a-divider type="vertical"></a-divider>
      <a-popconfirm title="确定要删除?" @confirm="deleteMeeting(text)">
        <a @click="showDelete(text)">删除</a>
      </a-popconfirm>
    </div>
  </a-table>
</template>

<script>
const columns = [
  {
    title: "例会名称",
    dataIndex: "name",
    align: "center"
  },
  {
    title: "开会时间",
    dataIndex: "meeting_date",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "记录时间",
    dataIndex: "upload_date",
    scopedSlots: { customRender: "time" },
    align: "center"
  },
  {
    title: "例会部门",
    dataIndex: "department",
    align: "center"
  },
  {
    title: "参会人",
    dataIndex: "participant",
    align: "center"
  },
  {
    title: "记录人",
    dataIndex: "recorder",
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
    },
    editMeeting(data) {
      console.log("编辑");
      this.$emit("edit", data);
    },
    showDelete() {
      this.deleteVisiable = true;
    },
    deleteMeeting(id) {
      this.deleteVisiable = false;
      this.$emit("delete", id);
    }
  }
};
</script>

<style></style>
