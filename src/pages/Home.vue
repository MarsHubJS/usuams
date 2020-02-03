<template>
  <div>
    <a-row>
      <a-col :span="18">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-card hoverable>
              <a-statistic
                title="待审核事务"
                :value="2"
                style="margin-right: 70px"
              />
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card hoverable>
              <a-statistic
                title="待处理事务"
                :value="2"
                style="margin-right: 70px"
              />
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card hoverable>
              <a-statistic
                title="进行中事务"
                :value="2"
                style="margin-right: 70px"
              />
            </a-card>
          </a-col>
        </a-row>
        <div style="padding:50px">
          <Editor></Editor>
        </div>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>

<script>
import Editor from "@/components/editor/editor";
export default {
  components: {
    Editor
  }
};
</script>

<style></style>
