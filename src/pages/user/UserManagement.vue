<template>
  <div>
    <userBanner></userBanner>
    <a-row :gutter="16">
      <a-col :span="5">
        <userTree></userTree>
      </a-col>
      <a-col :span="19">
        <userTable></userTable>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import userTable from "@/components/user/usermanagement/userTable";
import userTree from "@/components/user/usermanagement/userTree";
import userBanner from "@/components/user/usermanagement/userBanner";
export default {
  components: {
    userTable,
    userTree,
    userBanner
  }
};
</script>

<style></style>
