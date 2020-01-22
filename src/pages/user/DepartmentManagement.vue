<template>
  <a-row :gutter="16">
    <a-col :span="5">
      <userTree></userTree>
    </a-col>
    <a-col :span="19">
      <userTable></userTable>
    </a-col>
  </a-row>
</template>

<script>
import userTable from "@/components/user/departmentmanagment/userTable";
import userTree from "@/components/user/departmentmanagment/userTree";
export default {
  components: {
    userTable,
    userTree
  }
};
</script>

<style></style>
