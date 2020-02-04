<template>
  <a-modal
    title="新增部门"
    v-model="visiAble"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <a-row type="flex" justify="center">
      <a-col :span="20">
        <a-form :form="form">
          <a-form-item v-bind="formItemLayout" label="部门名称">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: true
                    }
                  ]
                }
              ]"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="额定干事人数">
            <a-input
              v-decorator="[
                'people',
                {
                  rules: [
                    {
                      required: true
                    }
                  ]
                }
              ]"
            />
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
export default {
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
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
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
