<template>
  <div class="input-box" :class="[size]">
    <label for="image"></label>
    <input type="file"
        id="image" name="image"
        accept="image/png, image/jpeg"
    >
    <div class="icon">
        <img src="/assets/svg/image.svg" alt="">
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        size: {
            type: String,
            required: false,
            default: ''
        }
    },
    setup() {
        return {

        }
    }
})
</script>

<style scoped>
.input-box {
    position: relative;
    width: 92px;
    height: 92px;
    background: #EFEFEF;
    border: dashed 2px var(--ion-color-medium);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.input-box.small {
    width: 52px;
    height: 52px;
    border-radius: 4px;
}

input:hover {
    cursor: pointer;
}

input {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
}

.icon {
    position: absolute;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.icon img {
    width: 32px;
    height: 32px;
}

</style>