<template>
  <div>
    <a-row>
      <a-col :span="24">
        <a-row :gutter="16">
          <a-col :span="6">
            <a-card hoverable>
              <a-statistic
                title="待审核事务"
                :value="2"
                style="margin-right: 70px"
              />
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card hoverable>
              <a-statistic
                title="待开始事务"
                :value="2"
                style="margin-right: 70px"
              />
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card hoverable>
              <a-statistic
                title="进行中事务"
                :value="2"
                style="margin-right: 70px"
              />
            </a-card>
          </a-col>
          <a-col :span="6">
            <a-card hoverable>
              <a-statistic
                title="已结束事务"
                :value="2"
                style="margin-right: 70px"
              />
            </a-card>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>

<script></script>

<style></style>
