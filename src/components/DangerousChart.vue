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
        data: ["A 등급", "B 등급", "C 등급", "D 등급", "E 등급"],
      },
      title: {
        text: "시설물등급",
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
              value: 76,
              name: "A 등급",
            },
            {
              value: 67,
              name: "B 등급",
            },
            {
              value: 54,
              name: "C 등급",
            },
            {
              value: 26,
              name: "D 등급",
            },
            {
              value: 18,
              name: "E 등급",
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
