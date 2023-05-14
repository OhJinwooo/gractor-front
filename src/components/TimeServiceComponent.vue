<template>
  <div class="time-service">
    <div class="time-table">
      <span class="time">현재시각</span>
      <span class="moment">{{ timeInfo.currentTime }}</span>
      <span class="day">2023.05.09</span>
    </div>

    <div class="vector1"></div>

    <div class="Weather">
      <span class="weather">날씨</span>
      <span class="number">21</span>
      <span class="symbol">°C</span>
      <font-awesome-icon class="weather-icon" :icon="['fas', 'cloud-sun']" />
    </div>

    <div class="vector2"></div>

    <div class="fine-dust">
      <span class="pm">PM2.5</span>
      <span class="number2">27</span>
      <span class="good">좋음</span>
    </div>

    <div class="vector3"></div>

    <div class="blue-box">
      <div class="t-1"></div>
      <div class="t-2"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      timeInfo: {},
    };
  },
  mounted() {
    axios
      .get(process.env.HTTPHOST + process.env.PORT + "/api/time")
      .then((response) => {
        this.timeInfo = response.data;

        console.log(response.data.currentTime);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
