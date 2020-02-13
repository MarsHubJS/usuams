<template>
  <a-modal
    title="新增例会"
    v-model="visiAble"
    @cancel="handleCancel"
    @ok="handleOk"
    width="1080px"
  >
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <a-form :form="form">
          <a-row :gutter="16">
            <a-col :span="6">
              <a-form-item v-bind="formItemLayout" label="例会名称">
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
              <a-form-item v-bind="formItemLayout" label="开会时间">
                <a-date-picker
                  v-decorator="[
                    'meeting_date',
                    {
                      rules: [
                        {
                          required: true,
                          message: '必须选择开会时间'
                        }
                      ]
                    }
                  ]"
                  :showTime="{ format: 'HH:mm' }"
                  placeholder="data.meeting_date"
                  style="width:100%"
                  @ok="selectMeeting"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="记录时间">
                <a-date-picker
                  v-decorator="[
                    'upload_date',
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
                  placeholder="data.upload_date"
                  style="width:100%"
                  @ok="selectUpload"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="例会部门">
                <a-input
                  v-decorator="[
                    'department',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  placeholder="data.department"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="记录人">
                <a-input
                  v-decorator="[
                    'recorder',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  placeholder="data.recorder"
                />
              </a-form-item>
            </a-col>
            <a-col :span="18">
              <a-form-item v-bind="formItemLayout" label="参会人">
                <a-input
                  v-decorator="[
                    'participant',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  placeholder="data.participant"
                />
              </a-form-item>
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
      meeting_date: "",
      upload_date: "",
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
        values.meeting_date = this.meeting_date;
        values.upload_date = this.upload_date;
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
    selectMeeting(value) {
      console.log("onOk: ", this.moment(value).valueOf() / 1000);
      this.meeting_date = this.moment(value).valueOf() / 1000;
    },
    selectUpload(value) {
      console.log("onOk: ", this.moment(value).valueOf() / 1000);
      this.upload_date = this.moment(value).valueOf() / 1000;
    }
  }
};
</script>

<style></style>
