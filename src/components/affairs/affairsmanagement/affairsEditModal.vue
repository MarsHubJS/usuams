<template>
  <a-modal
    title="编辑事务"
    v-model="visiAble"
    @cancel="handleCancel"
    @ok="handleOk"
    width="1080px"
  >
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <a-form :form="form">
          <a-row>
            <a-col :span="12">
              <a-form-item v-bind="formItemLayout" label="事务名称">
                <a-input
                  v-decorator="[
                    'name',
                    {
                      rules: [
                        {
                          required: true,
                          message: '必须填写事务名称'
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.name"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="开始时间">
                <a-input
                  v-decorator="[
                    'start_date',
                    {
                      rules: [
                        {
                          required: true,
                          message: '必须填写学号'
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.start_date"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="结束时间">
                <a-input
                  v-decorator="[
                    'end_date',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.end_date"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="负责人">
                <a-input
                  v-decorator="[
                    'leader_name',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.leader_name"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="审核人">
                <a-input
                  v-decorator="[
                    'reviewer_name',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.reviewer_name"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="优先级">
                <a-input
                  v-decorator="[
                    'level',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.level"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="状态">
                <a-input
                  v-decorator="[
                    'state',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.state"
                /> </a-form-item
            ></a-col>
            <a-col :span="12">
              <a-form-item v-bind="formItemLayout" label="内容">
                <a-textarea
                  v-decorator="[
                    'context',
                    {
                      rules: [
                        {
                          required: true,
                          message: '至少填写一个志愿部门'
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.context"
                  :autosize="{ minRows: 18 }"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    visiable: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  data() {
    return {
      visiAble: false,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 }
        }
      }
    };
  },
  watch: {
    visiable(val) {
      this.visiAble = val;
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleOk() {
      this.form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log("Received values of form: ", values);
        this.$emit("handleOk", values);
        this.form.resetFields();
      });
    },
    handleCancel() {
      this.$emit("handleCancel");
    }
  }
};
</script>

<style></style>
