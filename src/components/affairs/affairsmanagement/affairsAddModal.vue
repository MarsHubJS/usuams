<template>
  <a-modal
    title="新增事务"
    v-model="visiAble"
    @cancel="handleCancel"
    @ok="handleOk"
    width="1080px"
  >
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <a-form :form="form">
          <a-row :gutter="16">
            <a-col :span="8">
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
                  placeholder="data.name"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="开始时间">
                <a-date-picker
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
                  :showTime="{ format: 'HH:mm' }"
                  placeholder="data.start_date"
                  style="width:100%"
                  @ok="selectStart"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="结束时间">
                <a-date-picker
                  v-decorator="[
                    'end_date',
                    {
                      rules: [
                        {
                          required: true,
                          message: '必须填写学号'
                        }
                      ]
                    }
                  ]"
                  :showTime="{ format: 'HH:mm' }"
                  placeholder="data.end_date"
                  style="width:100%"
                  @ok="selectEnd"
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
                  placeholder="data.leader_name"
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
                  placeholder="data.reviewer_name"
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
                  placeholder="data.level"
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
                  placeholder="data.state"
                />
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <a-form-item v-bind="formItemLayout" label="内容">
                <Editor
                  @change="editorChange"
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
                  :autosize="{ minRows: 18 }"
                ></Editor>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
import Editor from "@/components/editor/editor";
export default {
  components: {
    Editor
  },
  props: {
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
      context: "",
      start_date: "",
      end_date: "",
      formItemLayout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 }
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
        values.start_date = this.start_date;
        values.end_date = this.end_date;
        this.$emit("handleOk", { ...values, context: this.context });
        this.form.resetFields();
      });
    },
    handleCancel() {
      this.$emit("handleCancel");
    },
    editorChange(context) {
      console.log(context);
      this.context = context;
    },
    selectStart(value) {
      console.log("onOk: ", this.moment(value).valueOf() / 1000);
      this.start_date = this.moment(value).valueOf() / 1000;
    },
    selectEnd(value) {
      console.log("onOk: ", this.moment(value).valueOf() / 1000);
      this.end_date = this.moment(value).valueOf() / 1000;
    }
  }
};
</script>

<style></style>
