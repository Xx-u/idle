<template>
  <!-- 人类认证模块 -->
  <div class="behavior">
    <van-overlay :show="show" />
    <div v-show="show" class="captcha" id="captcha"></div>
  </div>
</template>

<script setup>
import '../vendor/longbow.slidercaptcha.min.js'
import '../vendor/slidercaptcha.min.css'
import { useRouter } from 'vue-router';
import { ref, onMounted, defineProps } from 'vue'
import { Dialog } from 'vant';
let router = useRouter();
let captcha = null
let { page } = defineProps({
  show: Boolean,
  page: String
})
onMounted(() => {
  captcha = sliderCaptcha({
    // 这里的id和上面结构相对应
    id: 'captcha',
    onSuccess () {
      // 成功
      Dialog.alert({ message: '登录成功' }).then(() => {
        router.push(page)
      })
    },
    onFail () {
      // 失败
      captcha.reset()
    },
    verify () {
      // 默认的认证行为
      return true
    }
  })
})
</script>

<style lang="scss" scoped>
.behavior {
  .captcha {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
  }
}
</style>