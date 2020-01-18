<template>
  <a-row :gutter="16">
    <a-col :span="6">
      <affairsTree></affairsTree>
    </a-col>
    <a-col :span="18">
      <affairsTable></affairsTable>
    </a-col>
  </a-row>
</template>

<script>
import affairsTable from "@/components/affairs/affairsmanagment/affairsTable";
import affairsTree from "@/components/affairs/affairsmanagment/affairsTree";
export default {
  components: {
    affairsTable,
    affairsTree
  }
};
</script>

<style></style>
