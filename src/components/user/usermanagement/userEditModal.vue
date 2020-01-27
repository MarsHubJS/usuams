<template>
  <a-modal
    title="编辑用户"
    v-model="visiAble"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <a-row type="flex" justify="center">
      <a-col :span="20">
        <a-form :form="form">
          <a-form-item v-bind="formItemLayout" label="姓名">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.name"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="学号">
            <a-input
              v-decorator="[
                'number',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.number"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="性别">
            <a-input
              v-decorator="[
                'sex',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.sex"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="学院">
            <a-input
              v-decorator="[
                'collage',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.collage"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="专业">
            <a-input
              v-decorator="[
                'major',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.major"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="年级">
            <a-input
              v-decorator="[
                'grade',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.grade"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="班级">
            <a-input
              v-decorator="[
                'class',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.class"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="部门">
            <a-input
              v-decorator="[
                'department',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              :placeholder="user.department"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="用户类型">
            <a-select
              v-decorator="[
                'user_type',
                {
                  rules: [
                    {
                      required: false
                    }
                  ]
                }
              ]"
              placeholder="请选择用户身份类型"
            >
              <a-select-option value="1">
                超级管理员
              </a-select-option>
              <a-select-option value="2">
                指导老师
              </a-select-option>
              <a-select-option value="3">
                主席团
              </a-select-option>
              <a-select-option value="4">
                部长团
              </a-select-option>
              <a-select-option value="5">
                干事
              </a-select-option>
              <a-select-option value="6">
                会外人员
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
export default {
  props: {
    user: {
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
          sm: { span: 16 }
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
