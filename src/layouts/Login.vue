<template>
  <a-row class="bg">
    <a-col :span="18">1</a-col>
    <a-col :span="6">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: '请输入用户名' }]
              }
            ]"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }]
              }
            ]"
            type="password"
            placeholder="密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true
              }
            ]"
          >
            记住我
          </a-checkbox>
          <a class="login-form-forgot" href="">
            忘记密码
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            登录
          </a-button>
          或
          <a href="">
            加入学生会！
          </a>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
import admin from "@/router/admin";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let data = {
            username: values.username,
            password: values.password
          };
          this.$http.post("login", data).then(res => {
            console.log(res);
            this.$message.success(res.msg);
            sessionStorage.setItem("type", res.type);
            this.$store.commit("setLoginInfo", {
              username: values.username,
              uid: res.uid,
              type: res.type
            });
            switch (res.type) {
              case 1:
                this.$router.addRoutes(admin);
                this.$router.push("/home");
                break;
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less">
.bg {
  padding: 250px;
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
