<template>
  <div class="mom">
    <KakaoMapComponent />
    <!-- <from> -->
    <HeaderComponent style="width: 100%; height: 8%" />
    <TimeServiceComponent />
    <GraphComponent />
    <div>
      <NotificationComponent />
    </div>
    <CurrentComponent />
    <div class="path">
      <div class="path-vector-1"></div>
      <div class="path-vector-2"></div>
      <div class="path-plus-line-1"></div>
      <div class="path-plus-line-2"></div>
      <label for="customRange1" class="form-label"></label>
      <input type="range" class="form-range" id="customRange1" />
      <div class="path-minus-line"></div>
    </div>
    <ChoiceComponent />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NotificationComponent from "./components/NotificationComponent.vue";
import CurrentComponent from "./components/CurrentComponent.vue";
import GraphComponent from "./components/GraphComponent.vue";
import TimeServiceComponent from "./components/TimeServiceComponent.vue";
import KakaoMapComponent from "./components/KakaoMpaComponent.vue";
import ChoiceComponent from "./components/ChoiceComponent.vue";
export default defineComponent({
  name: "App",
  components: {
    NotificationComponent,
    CurrentComponent,
    GraphComponent,
    HeaderComponent,
    TimeServiceComponent,
    KakaoMapComponent,
    ChoiceComponent,
  },
});
</script>

<style>
@import "style.css";
</style>
