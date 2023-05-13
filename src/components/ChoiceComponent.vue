<template>
  <div class="choice-button">
    <div class="choice-button-symbol">
      <!-- <div class="choice-button-symbol-symbol"></div> -->
      <font-awesome-icon
        class="choice-button-symbol-symbol"
        :icon="['fas', 'play']"
      />
    </div>
    <span class="choice-button-text">도시 서비스 선택</span>
  </div>
  <div class="choice">
    <div class="cloes-button">
      <div class="line-1"></div>
      <div class="line-2"></div>
    </div>
    <div class="dangerous-point">
      <font-awesome-icon
        class="choice-dangerous-icon"
        :icon="['fas', 'building']"
      />
    </div>
    <span class="choice-dangerous-text">위험시설물 예•경보알림 서비스</span>

    <div class="crossing-point">
      <font-awesome-icon
        class="choice-crossing-icon"
        :icon="['fas', 'signs-post']"
      />
    </div>
    <span class="choice-crossing-text">교차로 알리미 서비스</span>

    <div class="right-point">
      <font-awesome-icon
        class="choice-right-icon"
        :icon="['fas', 'arrow-turn-down']"
      />
    </div>
    <span class="choice-right-text">우회전 알리미 서비스</span>

    <div class="adult-point">
      <font-awesome-icon
        class="choice-adult-icon"
        :icon="['fas', 'person-cane']"
      />
    </div>
    <span class="choice-adult-text">홀몸어르신 안심 서비스</span>

    <div class="children-point">
      <font-awesome-icon
        class="choice-children-icon"
        :icon="['fas', 'children']"
      />
    </div>
    <span class="choice-children-text">어린이집 알림 서비스</span>

    <div class="school-point">
      <font-awesome-icon
        class="choice-school-icon"
        :icon="['fas', 'wheelchair']"
      />
    </div>
    <span class="choice-school-text">특수학교 알림 서비스</span>

    <div class="smart-point">
      <font-awesome-icon
        class="choice-smart-icon"
        :icon="['fas', 'lightbulb']"
      />
    </div>
    <span class="choice-smart-text">스마트 보안등 서비스</span>
    <div class="time-box">
      <div class="play-time-box">
        <span class="play-time">재생시간</span>
        <input type="text" class="input" />
        <span class="minute">분</span>
      </div>
      <div class="storage">
        <span class="storage-text">저장</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
});
</script>
