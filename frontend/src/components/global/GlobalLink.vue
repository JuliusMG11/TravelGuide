<template>
    <div class="global-button"  :class="[ theme, size]">
        <a class="button-link" :href="link">
            <slot></slot>
        </a>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        theme: {
            type: String,
            required: false,
            default: ''
        },
        size: {
            type: String,
            required: false,
            default: ''
        },
        link: {
            type: String,
            required: false,
            default: ''
        },

    },
    setup() {
        return {

        }
    }
})
</script>

<style scoped>

.global-button .button-link {
    width: 100%;
    padding: 8px 24px;
    border-radius: 32px;
    font-size: 14px;
    letter-spacing: 0.4px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ion-color-secondary);
    color: var(--ion-color-secondary-contrast);
    transition: all 0.2s ease;
    font-weight: bold;
}

.global-button .button-link:hover {
    transform: translateY(-4px);
    background-color: var(--ion-color-secondary);
    box-shadow: 0 10px 20px -10px var(--ion-color-secondary);
    transition: all ease .2s;
}

 .global-button.outline-theme .button-link {
    background-color: transparent;
    color: var(--ion-color-secondary-contrast);
    border: solid 1px var(--ion-color-secondary);
}
.global-button.outline-theme .button-link:hover {
    transform: translateY(-4px);
    color: var(--ion-color-secondary-contrast);
    background-color: var(--ion-color-secondary);
    box-shadow: 0 10px 20px -10px var(--ion-color-secondary);
}

 .global-button.big .button-link {
    width: 320px;
    font-size: 18px;
    height: 42px;
 }

</style>