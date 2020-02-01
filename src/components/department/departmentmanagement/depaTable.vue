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
      <div slot="operation" slot-scope="text">
        <a @click="showDepa(text)">查看</a>
        <a-divider type="vertical"></a-divider>
        <a @click="editDepa(text)">编辑</a>
        <a-divider type="vertical"></a-divider>
        <a @click="deleteDepa(text)">删除</a>
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
    }
  }
};
</script>

<style></style>
