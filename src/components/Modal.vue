<template>
  <b-modal 
    v-model="modalShow" 
    :title="title"
    :variant="options.variant" 
    :hideHeader="options.hideHeader"
  >
    <template #modal-header>
        <slot name="header"></slot>
    </template>

    <slot name="text"></slot>

    <template #modal-footer>
        <slot name="footer"></slot>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalShow: {
      type: Boolean,
      required: true,
    },
    classModal: String,
    title: {
      type: String,
      default: ""
    },
    options: {
        type: Object,
    }
  },
};
</script>
<style lang="scss" scoped></style>
