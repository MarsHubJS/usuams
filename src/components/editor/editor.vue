<template>
  <div>
    <div id="editorMenu" class="editorMenu"></div>
    <div id="editor" class="editor"></div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  props: {
    data: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  mounted() {
    var editor = new E("#editorMenu", "#editor");
    editor.customConfig.onchange = html => {
      this.$emit("change", html);
    };
    editor.create();
    editor.txt.html(this.data);
  }
};
</script>

<style lang="less" scoped>
.editorMenu {
  border: 1px solid #ccc;
}
.editor {
  margin-top: -1px;
  border: 1px solid #ccc;
  height: 520px;
  overflow: auto;
}
</style>
