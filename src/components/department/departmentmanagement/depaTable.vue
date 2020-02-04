<template>
  <div>
    <a-table
      :columns="columns"
      :rowKey="record => record.id"
      :dataSource="data"
      :loading="loading"
      :pagination="pagination"
      :rowSelection="rowSelection"
      @change="handleTableChange"
    >
      <div slot="operation" slot-scope="text, record">
        <!-- <a @click="showDepa(text)">查看</a>
        <a-divider type="vertical"></a-divider> -->
        <a @click="editDepa(record)">编辑</a>
        <a-divider type="vertical"></a-divider>
        <a-popconfirm title="确定要删除?" @confirm="deleteDepa(text)">
          <a @click="showDelete()">删除</a>
        </a-popconfirm>
      </div>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "部门名称",
    dataIndex: "name",
    align: "center"
  },
  {
    title: "额定干事人数",
    dataIndex: "people",
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
    deleteDepa(id) {
      this.$emit("delete", id);
    },
    editDepa(data) {
      this.$emit("edit", data);
    },
    showDelete() {
      this.deleteVisiable = true;
    }
  }
};
</script>

<style></style>
