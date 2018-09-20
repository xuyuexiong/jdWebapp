<template>
    <div>
        <Heador/>
        <Slider/>
        <Navbar/>
        <Footor cname="mfooter"/>
        <Daily/>
        <In/>
        <More/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Slider from "./rslider.vue";
import Daily from "./daily.vue";
import In from "./in.vue";
import More from "./more.vue";

export default {
  components: {
    Heador,
    Slider,
    Navbar,
    Footor,
    Daily,
    In,
    More,
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