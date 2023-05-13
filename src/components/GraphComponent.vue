<template>
  <div class="graph">
    <div class="service">
      <span class="service-text">스마트 도시 서비스 주요 현황</span>
      <u class="smart-bar1"></u>
      <u class="smart-bar2"></u>
      <u class="smart-bar3"></u>
    </div>
    <div class="service-box1">
      <span class="dangerous">위험시설물 예・경보 알림 서비스</span>
      <DangerousChart />
    </div>
    <div class="service-box2">
      <span class="sir">홀몸어르신 안심 서비스</span>
      <AdultChart />
    </div>
    <div class="service-box3">
      <span class="children">어린이집 알림 서비스</span>
      <ChildrenChart />
    </div>
    <div class="graph-point1"></div>
    <div class="graph-point2"></div>
    <div class="graph-point3"></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import DangerousChart from "./DangerousChart.vue";
import ChildrenChart from "./ChildrenChart.vue";
import AdultChart from "./AdultChart.vue";

export default defineComponent({
  name: "MyChart",
  components: {
    DangerousChart,
    ChildrenChart,
    AdultChart,
  },
});
</script>
