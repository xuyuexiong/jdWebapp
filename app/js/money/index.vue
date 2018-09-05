<template>
    <div>
        <Heador/>
        <Slider/>
        <Navbar/>
        <Footor/>
        <Ada/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./mslider.vue"
import Ada from "./ada.vue"

export default {
    components: {
        Heador,
        Slider,
        Navbar,
        Footor,
        Ada
    },
}
</script>