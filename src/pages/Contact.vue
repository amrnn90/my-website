<template>
  <route-wrapper headerBackground="#f7fafc">
    <div class="contact-page-wrapper">
      <div class="contact-page">
        <div class="contact-section">
          <div>
            <h1 class="contact-section__heading">Get in touch</h1>
            <p
              class="contact-section__intro"
            >Feel free to reach out to me if you wish to talk about something.</p>

            <div class="contact-section__info mobile-hidden">
              <div class="contact-section__info-item">
                <icon-mail class="icon contact-section__info-item-icon" />
                <a :href="`mailto: ${email}`" class="contact-section__into-item-text">{{email}}</a>
              </div>
              <div class="contact-section__info-item">
                <icon-call class="icon contact-section__info-item-icon" />
                <a :href="`tel:${phone}`" class="contact-section__into-item-text">{{phone}}</a>
              </div>
            </div>
          </div>

          <div class="mobile-hidden">
            <h3 class="contact-section__links-heading">Also find me here</h3>
            <div class="contact-section__links">
              <a
                href="https://github.com/amrnn90"
                class="contact-section__links-link"
                target="_blank"
              >
                <github />
              </a>
              <a
                href="https://twitter.com/amrnn90"
                class="contact-section__links-link"
                target="_blank"
              >
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
              <icon-user class="icon" />
              <input
                type="text"
                name="name"
                v-model="formData.name"
                placeholder="Your name"
                required
              />
            </div>
            <div class="contact-form__field">
              <icon-mail class="icon" />
              <input
                type="email"
                name="email"
                v-model="formData.email"
                placeholder="Email"
                required
              />
            </div>

            <div class="contact-form__field">
              <textarea
                name="message"
                v-model="formData.message"
                placeholder="What do you have in mind?"
                required
              />
            </div>

            <button type="submit" class="btn btn--primary">Send</button>
          </form>
        </div>
        <div class="mobile-only">
          <div class="contact-section__info">
            <div class="contact-section__info-item">
              <icon-mail class="icon contact-section__info-item-icon" />
              <a :href="`mailto: ${email}`" class="contact-section__into-item-text">{{email}}</a>
            </div>
            <div class="contact-section__info-item">
              <icon-call class="icon contact-section__info-item-icon" />
              <a :href="`tel:${phone}`" class="contact-section__into-item-text">{{phone}}</a>
            </div>
          </div>

          <div>
            <h3 class="contact-section__links-heading">Also find me here</h3>
            <div class="contact-section__links">
              <a
                href="https://github.com/amrnn90"
                class="contact-section__links-link"
                target="_blank"
              >
                <github />
              </a>
              <a
                href="https://twitter.com/amrnn90"
                class="contact-section__links-link"
                target="_blank"
              >
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
        </div>
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
      formData: {
        name: "",
        email: "",
        message: ""
      }
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

.mobile-hidden {
  @include md-down(780px) {
    display: none;
  }
}

.mobile-only {
  @include md-up(781px) {
    display: none;
  }
}

.contact-page-wrapper {
  background: $gray-100;
  height: 100%;
  width: 100%;
  flex: 1;
}

.contact-page {
  padding: $sp-8 $sp-4;
  @include px($sp-16 - $sp-4, $sp-6);
  max-width: $wsp-4xl;
  margin-left: auto;
  margin-right: auto;

  display: flex;

  @include md-down(780px) {
    width: 100%;
    max-width: 420px;
    flex-direction: column;
    align-items: stretch;
  }
}

.contact-section {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include md-down(780px) {
    width: 100%;
  }
}

.contact-form {
  width: 60%;
  @include md-down(780px) {
    width: 100%;
  }
}

.contact-section__heading {
  font-weight: $fw-black;
  color: $gray-900;
  letter-spacing: $tracking-wide;
  text-transform: uppercase;
  @include fz($fz-2xl, $fz-xl);
}

.contact-section__intro {
  font-size: $fz-sm;
  font-weight: $fw-medium;
  color: $gray-500;
  margin-top: $sp-2;
}

.contact-section__info {
  margin-top: $sp-10;
  @include md-down(780px) {
    @include mt($sp-24, $sp-16, 780px);
  }
}

.contact-section__info-item {
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: $sp-3;
  }
}

.contact-section__info-item-icon {
  width: $sp-8;
  & > * {
    fill: $gray-500;
  }
}

.contact-section__into-item-text {
  margin-left: $sp-4;
  font-size: $fz-sm;
  color: $gray-600;
  font-weight: $fw-medium;
}

.contact-section__links-heading {
  font-weight: $fw-bold;
  color: $gray-600;
  letter-spacing: $tracking-wide;
  text-transform: uppercase;
  font-size: $fz-sm;

  @include md-down(780px) {
    @include mt($sp-16, $sp-8, 780px);
  }
}

.contact-section__links {
  display: flex;
  align-items: center;
}

.contact-section__links-link {
  margin-top: $sp-4;
  &:not(:first-child) {
    margin-left: $sp-4;
  }
}

.contact-form {
  background: white;
  box-shadow: $shadow-lg;
  @include p(70px, 20px);
  @include ml($sp-12, $sp-4);

  .btn {
    width: 100%;
    margin-top: $sp-5;
  }

  @include md-down(780px) {
    width: 100%;
    margin-left: 0;

    @include mt($sp-16, $sp-8, 780px);
  }
}

.contact-form__field {
  position: relative;
  margin-bottom: $sp-4;
  input,
  textarea {
    width: 100%;
    border-radius: $rounded-default;
    border: 1px solid $gray-300;
    padding: $sp-4 $sp-4 $sp-4 $sp-12;
    font-weight: $fw-medium;
    font-size: $fz-sm;
    transition: all 0.2s ease-in-out;
    color: $gray-700;

    &::placeholder {
      color: $gray-400;
    }

    &:focus {
      outline: none;
      border-color: $gray-500;
    }
  }

  textarea {
    padding: $sp-4;
    min-height: 95px;
  }

  .icon {
    position: absolute;
    left: $sp-3;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    pointer-events: none;
    > * {
      fill: $gray-600;
    }
  }
}
</style>