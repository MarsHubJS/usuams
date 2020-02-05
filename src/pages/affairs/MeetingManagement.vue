<template>
  <div>
    <meetingBanner></meetingBanner>
    <a-row :gutter="16">
      <a-col :span="24">
        <meetingTable
          :data="data"
          :loading="loading"
          :pagination="pagination"
          @change="handleTableChange"
        ></meetingTable>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import meetingTable from "@/components/affairs/meetingmanagement/meetingTable";
import meetingBanner from "@/components/affairs/meetingmanagement/meetingBanner";
export default {
  components: {
    meetingTable,
    meetingBanner
  },
  data() {
    return {
      data: [],
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
    }
  }
};
</script>

<style></style>
