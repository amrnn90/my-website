<template>
  <div class="contact-info">
    <div class="contact-info__item">
      <icon-mail class="icon contact-info__item-icon" />
      <a :href="`mailto: ${email}`" class="contact-info__item-text">{{email}}</a>
    </div>
    <div class="contact-info__item">
      <icon-call class="icon contact-info__item-icon" />
      <a :href="`tel:${phone}`" class="contact-info__item-text">{{phone}}</a>
    </div>
  </div>
</template>

<script>
import IconCall from "~/assets/svgs/icon-call.svg";
import IconMail from "~/assets/svgs/icon-mail.svg";

export default {
  components: {
    IconCall,
    IconMail
  },
  data() {
    return {
      email: "",
      phone: ""
    };
  },
  mounted() {
    this.email = "amrnn90" + "@" + "gmail" + ".com";
    this.phone = "(967)734-960-335";
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/abstract";

.contact-info {
  margin-top: $sp-10;
  @include md-down(780px) {
    @include mt($sp-24, $sp-16, 780px);
  }
}

.contact-info__item {
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: $sp-3;
  }
}

.contact-info__item-icon {
  width: $sp-8;
  & > * {
    fill: $gray-500;
  }
}

.contact-info__item-text {
  margin-left: $sp-4;
  font-size: $fz-sm;
  color: $gray-600;
  font-weight: $fw-medium;
}
</style>