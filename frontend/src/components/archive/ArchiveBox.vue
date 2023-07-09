<template>
<div class="archive-box">
    <div class="box-content">
        <div class="archive-image">
        <img src="/assets/img/big-cake.png" alt="Cake 1" title="..." />
    </div>
    <div class="archive-text">
        <div class="title">
             <h3 class="pb-4">Koláč one</h3>
             <span class="date">14.1. 2023</span>
        </div>
            <div class="order-number">
                <span>Číslo obj.: 2039302</span>
        </div>
        <div class="buttons-group">
            <div class="box-btn">
                <GlobalBtn>
                    Priradiť do prijaté
                </GlobalBtn>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import GlobalBtn from '@/components/global/GlobalBtn.vue'

export default  defineComponent({
  props: {
    progress: {
        type: Boolean,
        required: false,
        default: false
    },
    finish: {
        type: Boolean,
        required: false,
        default: false
    }
  },
  components: { 
    GlobalBtn
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.archive-box {
    position: relative;
    background:var(--ion-background-color);
    box-shadow: 4px 4px 46px rgba(0, 0, 0, 0.14);
    border-radius: 12px;
    padding: 12px;
}

.archive-box.active-border {
    border: 2px solid var(--ion-color-primary);
}

.archive-box .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}


.box-content {
    display: flex;
    gap: 8px;
}

.box-content .archive-image img {
    max-height: 60px;
}

.archive-text {
    width: 80%;
}

.archive-text h3 {
    margin-top: 0px;
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: 600;
}

.archive-text .title {
    display: flex;
    justify-content: space-between;
}

.archive-text .date {
    font-size: 14px;
    margin-bottom: 6px;
}

.archive-text .order-number {
    font-size: 14px;
}


.buttons-group {
    margin-top: 12px;
}

.buttons-group .box-btn {
    width: 100%;
}


.right-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
}


.right-section .price {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.right-section .price strong {
    font-size: 16px;
}
.right-section .price span {
    font-size: 12px;
}
</style>