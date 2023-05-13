<template>
  <div
    id="map"
    style="
      background-color: #000000;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    "
  ></div>
</template>

<script>
import { onMounted, ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const map = ref(null);

    onMounted(() => {
      let script = document.createElement("script");
      script.onload = () => initKakaoMap();
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" +
        process.env.VUE_APP_KAKAO_MAP_API_KEY +
        "&autoload=false";
      document.head.appendChild(script);
    });

    const initKakaoMap = () => {
      window.kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        map.value = new window.kakao.maps.Map(container, options);
      });
    };

    return { map };
  },
});
</script>

<style scoped>
#map {
  width: 400%;
  height: 500%;
}
</style>
