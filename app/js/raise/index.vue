<template>
    <div>
        <Heador/>
        <Slider/>
        <Navbar/>
        <Footor cname="mfooter"/>
        <Daily/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Slider from "./rslider.vue";
import Daily from "./daily.vue";

export default {
  components: {
    Heador,
    Slider,
    Navbar,
    Footor,
    Daily,
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