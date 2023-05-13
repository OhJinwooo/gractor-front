<template>
  <div
    class="chartContainer"
    ref="chartContainer"
    style="width: 380px; height: 190px"
  ></div>
</template>

<script>
import { defineComponent } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "DangerousChart",
  mounted() {
    // 차트를 그릴 DOM 요소
    let chartContainer = this.$refs.chartContainer;

    // Echarts 객체 생성
    let chart = echarts.init(chartContainer);

    // 차트 옵션 설정
    let option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        x: "75%",
        y: "center", // y 값을 추가하여 아래로 이동시킴
        data: ["정상", "보통", "주의", "위험", "고독사예지"],
      },
      title: {
        text: "어르신\n위험등급",
        textStyle: {
          fontSize: 12,
        },
        left: "center",
        top: "center",
      },
      series: [
        {
          type: "pie",
          selectedMode: "single",
          avoidLabelOverlap: false,
          label: {
            position: "inner",
            fontSize: 12,
            formatter: function (params) {
              return params.value;
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 134,
              name: "정상",
            },
            {
              value: 32,
              name: "보통",
            },
            {
              value: 15,
              name: "주의",
            },
            {
              value: 2,
              name: "위험",
            },
            {
              value: 1,
              name: "고독사예지",
              selected: true,
            },
          ],
          radius: ["45%", "90%"],
        },
      ],
    };

    // 차트에 옵션 적용
    chart.setOption(option);
  },
});
</script>
