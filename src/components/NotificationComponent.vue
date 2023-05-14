<template>
  <div class="notification">
    <div style="height: 14%">
      <div class="rectangle-839" />
      <span class="location">고척중학교 교차로</span>
      <span class="address">서울특별시 구로구 고척동 76-224</span>
      <div class="vector-182" />
    </div>

    <div class="coordinates">
      <div class="installation">
        <div class="installation-point"></div>
        <span class="installation-location">설치위치</span>
      </div>
      <div class="latitude">
        <div class="latitude-box">
          <span class="latitude-text">위도</span>
        </div>
        <div class="latitude-line"></div>
        <div class="latitude-number-box">
          <span class="latitude-number">37.49999581324621</span>
        </div>
      </div>
      <div class="longitude">
        <div class="longitude-box">
          <span class="longitude-text">경도</span>
        </div>
        <div class="longitude-line"></div>
        <div class="longitude-number-box">
          <span class="longitude-number">126.86281102222206</span>
        </div>
      </div>
      <div class="height">
        <div class="height-box">
          <span class="height-text">고도(m)</span>
        </div>
        <div class="height-line"></div>
        <div class="height-number-box">
          <span class="height-number">2.60</span>
        </div>
      </div>
      <div class="device">
        <div class="device-point"></div>
        <span class="device-text">디바이스 상태</span>
      </div>

      <div class="device-box1">
        <div class="device-box">
          <span class="device-title1">단말명칭</span>
          <span class="device-desc1">{{ deviceInfo.deviceName }}</span>
        </div>
        <div class="vector-183" />
        <div class="device-box">
          <span class="device-title1">설치일</span>
          <span class="device-desc1">{{ deviceInfo.installDay }}</span>
        </div>
        <div class="vector-183" />
        <div class="device-box">
          <span class="device-title1">단말 운영상태</span>
          <span class="device-desc1">{{ deviceInfo.operationStatus }}</span>
        </div>
        <div class="vector-183" />
        <div class="device-box">
          <span class="device-title1">단말 통신상태</span>
          <span class="device-desc1">{{ deviceInfo.communicationStatus }}</span>
        </div>
      </div>
    </div>
    <div style="height: 24%">
      <div class="vector-177" />
      <div class="dvice-box2">
        <span class="device-notification">교차로 알리미 서비스</span>
        <br />
        <span class="device-notification-desc">
          어린이 보호 구역과 교차로 지역에 진입하는 차량 속도를 AI/IoT 기술을
          활용하여 보행자 및 운전자 동시에 알려주는 사고예방 안전서비스 입니다.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      deviceInfo: {},
    };
  },
  mounted() {
    axios
      .get(process.env.HTTPHOST + process.env.PORT + "/api/device")
      .then((response) => {
        this.deviceInfo = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
