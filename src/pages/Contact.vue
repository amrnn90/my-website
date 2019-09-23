<template>
  <route-wrapper>
    <div class="contact-page">
      <div class="contact-section">
        <h1 class="contact-section__heading">Get in touch</h1>
        <p
          class="contact-section__intro"
        >Feel free to reach out to me if you wish to talk about something.</p>

        <div class="contact-section__info">
          <div class="contact-section__info-item">
            <icon-mail class="contact-section__info-item-icon" />
            <a :href="`mailto: ${email}`" class="contact-section__into-item-text">{{email}}</a>
          </div>
          <div class="contact-section__info-item">
            <icon-call class="contact-section__info-item-icon" />
            <a :href="`tel:${phone}`" class="contact-section__into-item-text">{{phone}}</a>
          </div>
        </div>

        <div class="contact-section__links">
          <h3 class="contact-section__links-heading">Also find me here</h3>
          <a href="https://github.com/amrnn90" class="contact-section__links-link" target="_blank">
            <github />
          </a>
          <a href="https://twitter.com/amrnn90" class="contact-section__links-link" target="_blank">
            <twitter />
          </a>
          <a
            href="https://stackoverflow.com/users/4765497/amr-noman"
            class="contact-section__links-link"
            target="_blank"
          >
            <stackoverflow />
          </a>
        </div>
      </div>

      <div class="contact-form">
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <div class="contact-form__field">
            <icon-user />
            <input type="text" name="name" v-model="formData.name" placeholder="Your name" />
          </div>
          <div class="contact-form__field">
            <icon-mail />
            <input type="email" name="email" v-model="formData.email" placeholder="Email" />
          </div>

          <div class="contact-form__field">
            <textarea name="message" v-model="formData.message" placeholder="What do you have in mind?"></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </route-wrapper>
</template>

<script>
import IconCall from "~/assets/svgs/icon-call.svg";
import IconMail from "~/assets/svgs/icon-mail.svg";
import IconUser from "~/assets/svgs/icon-user.svg";
import Github from "~/assets/svgs/github.svg";
import Twitter from "~/assets/svgs/twitter.svg";
import Stackoverflow from "~/assets/svgs/stackoverflow.svg";
import RouteWrapper from "~/layouts/RouteWrapper";

export default {
  components: {
    "route-wrapper": RouteWrapper,
    IconCall,
    IconMail,
    IconUser,
    Github,
    Stackoverflow,
    Twitter
  },
  data() {
    return {
      email: "",
      phone: "",
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  },
  mounted() {
    this.email = "amnnn90" + "@" + "gmail" + ".com";
    this.phone = "(967)734-960-335";
  },
  metaInfo: {
    title: "Contact"
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/abstract";

.contact-page {
  @include py($sp-16, $sp-12);
  @include px($sp-16 - $sp-4, $sp-6);
  max-width: $wsp-4xl;
  margin-left: auto;
  margin-right: auto;
}
</style>