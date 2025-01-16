<script setup>
import { ref } from 'vue';
import Divider from './components/Divider.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

const isPopup = ref(false)

</script>

<template>
  <div style="font-family: 'ChungbukNationalUniversity'; height: 100%;">
    <transition name="fade" mode="out-in">
    <div v-if="isPopup" style="width: 100vw; height: 100vh; position: fixed; z-index: 9999999; background-color: rgba(65, 65, 65, 0.507);">
        <div class="popup">
          <div id="box">
            <div style="font-size:20px; width:500px;">
              2024학년도 대영고등학교 비상 예술제가 종료되었습니다
            </div>
            <div style="margin-top:10px;">
              축제를 즐겨주신 많은 분들께 감사드립니다다
            </div>
            <div @click="isPopup = false" style="text-align: right; cursor: pointer; margin-top:10px; font-size: 18px;">
              닫기
              </div>
        </div>
      </div>
    </div>
  </transition>
    <div style="background-color: white;">
      <Header></Header>
      </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer style="margin-top: 10px;"></Footer>
  </div>
</template>

<style scoped>

.popup #box{
  background-color: white;
  padding: 10px;
  
}

.popup{
  
  z-index: 1000000;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0);
  position: fixed;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@font-face {
    font-family: 'ChungbukNationalUniversity';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/ChungbukNationalUniversity-Regular.woff') format('woff');
    font-weight: 400;
}
@font-face {
    font-family: 'ChungbukNationalUniversity';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/ChungbukNationalUniversity-Bold.woff') format('woff');
    font-weight: 700;
}
</style>
