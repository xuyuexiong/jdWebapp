<template>
    <div>
        <Heador/>
        <Slider/>
        <Navbar/>
        <Footor/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Slider from "./islider.vue";

export default {
  components: {
    Heador,
    Slider,
    Navbar,
    Footor,
    
  }
};
</script>

