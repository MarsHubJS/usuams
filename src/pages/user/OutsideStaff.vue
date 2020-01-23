<template>
  <a-row :gutter="16">
    <a-col :span="24">
      <outsideTable></outsideTable>
    </a-col>
  </a-row>
</template>

<script>
import outsideTable from "@/components/user/outsidestaff/outsideTable";
export default {
  components: {
    outsideTable
  }
};
</script>

<style></style>
