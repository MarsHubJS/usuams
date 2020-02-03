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
          <a-timeline>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item
              >Solve initial network problems 2015-09-01</a-timeline-item
            >
            <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
            <a-timeline-item
              >Network problems being solved 2015-09-01</a-timeline-item
            >
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item
              >Solve initial network problems 2015-09-01</a-timeline-item
            >
            <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
            <a-timeline-item
              >Network problems being solved 2015-09-01</a-timeline-item
            >
          </a-timeline>
        </div>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
