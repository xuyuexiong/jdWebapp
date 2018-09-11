<template>
    <div>
        <Heador/>
        <Slider/>
        <Navbar/>
        <Footor cname="mfooter"/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Slider from "./mslider.vue";
import Ada from "./ada.vue";
import Adb from "./adb.vue";
import Money from "./money.vue";
import Finance from "./finnace.vue";
import Adc from "./adc.vue";

export default {
  components: {
    Heador,
    Slider,
    Navbar,
    Footor,
    Ada,
    Money,
    Adb,
    Finance
  }
};
</script>

<style lang="scss">
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>