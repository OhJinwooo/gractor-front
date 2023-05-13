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
        data: [
          "등원",
          "미등원",
          "등원승차",
          "등원미승차",
          "하원",
          "미하원",
          "하원승차",
          "하원미승차",
        ],
      },
      title: {
        text: "단말상태\n총 149개",
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
              // 레이블의 값이 객체인 경우 value 프로퍼티 사용
              const value =
                typeof params.value === "object"
                  ? params.value.value
                  : params.value;
              // 데이터 이름(name)이 "E"인 경우 합쳐진 값을 사용
              const displayValue = params.name === "E" ? "134/15" : value;
              return displayValue;
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 134,
              name: "등원",
            },
            {
              value: 15,
              name: "미등원",
            },
            {
              value: 136,
              name: "등원승차",
            },
            {
              value: 14,
              name: "등원미승차",
            },
            {
              value: 131,
              name: "하원",
            },
            {
              value: 18,
              name: "미하원",
            },
            {
              value: 143,
              name: "하원승차",
            },
            {
              value: 15,
              name: "하원미승차",
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
