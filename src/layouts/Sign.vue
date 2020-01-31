<template>
  <a-row class="bg" type="flex" justify="center" align="middle">
    <a-col :span="12">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <h1>加入学生会！</h1>
        <a-divider></a-divider>
        <a-row type="flex" justify="space-around">
          <a-col :span="8">
            <a-form-item label="姓名">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: '请输入您的真实姓名' }]
                  }
                ]"
                placeholder="真实姓名"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="学号">
              <a-input
                v-decorator="[
                  'number',
                  {
                    rules: [{ required: true, message: '请输入您的学号' }]
                  }
                ]"
                placeholder="学号"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="性别">
              <a-input
                v-decorator="[
                  'sex',
                  {
                    rules: [{ required: true, message: '请输入您的性别' }]
                  }
                ]"
                placeholder="性别"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="学院">
              <a-input
                v-decorator="[
                  'collage',
                  {
                    rules: [{ required: true, message: '请输入您的学院' }]
                  }
                ]"
                placeholder="学院"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="专业">
              <a-input
                v-decorator="[
                  'major',
                  {
                    rules: [{ required: true, message: '请输入您的专业' }]
                  }
                ]"
                placeholder="专业"
              >
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="年级">
              <a-input
                v-decorator="[
                  'grade',
                  {
                    rules: [{ required: true, message: '请输入您的年级' }]
                  }
                ]"
                placeholder="年级（大一/大二/大三）"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="班级">
              <a-input
                v-decorator="[
                  'class',
                  {
                    rules: [{ required: true, message: '请输入您的班级' }]
                  }
                ]"
                placeholder="班级（如：软件1901）"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="第一志愿部门">
              <a-input
                v-decorator="[
                  'depa1',
                  {
                    rules: [
                      { required: true, message: '请输入您的第一志愿部门' }
                    ]
                  }
                ]"
                placeholder="第一志愿部门"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="第二志愿部门">
              <a-input
                v-decorator="[
                  'depa2',
                  {
                    rules: [
                      { required: true, message: '请输入您的第二志愿部门' }
                    ]
                  }
                ]"
                placeholder="第二志愿部门"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="第三志愿部门">
              <a-input
                v-decorator="[
                  'depa3',
                  {
                    rules: [
                      { required: true, message: '请输入您的第三志愿部门' }
                    ]
                  }
                ]"
                placeholder="第三志愿部门"
              >
              </a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-divider></a-divider>
        <a-row type="flex" justify="space-around">
          <a-col :span="7">
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                注册
              </a-button>
            </a-form-item>
          </a-col>
          <a-col :span="7">
            <a-form-item>
              <a-button
                type="primary"
                class="login-form-button"
                @click="backToLogin()"
              >
                返回登录
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  data() {
    return {
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
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          this.$http.post("sign", values).then(res => {
            console.log(res);
            if (res.code === 0) {
              this.$message.success("注册成功");
              this.$router.push("/login");
            }
          });
        }
      });
    },
    backToLogin() {
      this.$router.push("login");
    }
  }
};
</script>

<style lang="less">
.bg {
  background-image: url("../assets/sign.png");
  height: 100%;
  background-size: 100% 100%;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
