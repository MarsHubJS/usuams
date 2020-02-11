<template>
  <a-modal
    title="编辑例会"
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
                  :placeholder="data.name"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="开会时间">
                <a-input
                  v-decorator="[
                    'meet_date',
                    {
                      rules: [
                        {
                          required: true,
                          message: '必须填写学号'
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.meet_date"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="记录时间">
                <a-input
                  v-decorator="[
                    'upload_date',
                    {
                      rules: [
                        {
                          required: true
                        }
                      ]
                    }
                  ]"
                  :placeholder="data.upload_date"
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
                  :placeholder="data.department"
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
                  :placeholder="data.recorder"
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
                  :placeholder="data.participant"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="内容">
                <Editor
                  :data="data.context"
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
        this.$emit("handleOk", values);
        this.form.resetFields();
      });
    },
    handleCancel() {
      this.$emit("handleCancel");
    },
    editorChange(context) {
      console.log(context);
    }
  }
};
</script>

<style></style>
