<template>
  <div class="login-post-login-container">
    <div class="login-post-login-container1">
      <div class="login-post-login-container2">
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/1087358158458073110/1131623691604742324/Cloudarts.png?width=691&amp;height=628"
          class="login-post-login-image"
        />
        <nav class="login-post-login-links">
          <span>Inicio</span>
          <span class="login-post-login-text1">Meu Plano</span>
          <span class="login-post-login-text2">Contato</span>
        </nav>
      </div>
    </div>
    <lottie-vue-player
      :src="`https://lottie.host/3197a47c-d420-47a2-8d36-d0340ecac13a/Zk5zvwac9j.json`"
      :loop="true"
      :speed="1"
      :autoplay="true"
      :backgroundColor="transparent"
      class="login-post-login-lottie-node"
    ></lottie-vue-player>
  </div>
</template>

<script>
export default {
  name: 'LoginPostLogin',
  metaInfo: {
    title: 'Login-PostLogin - TestFrontEnd',
    meta: [
      {
        property: 'og:title',
        content: 'Login-PostLogin - TestFrontEnd',
      },
    ],
  },
}
</script>

<style scoped>
.login-post-login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.login-post-login-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: flex-start;
}
.login-post-login-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: var(--dl-space-space-sixunits);
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: row;
  justify-content: flex-start;
}
.login-post-login-image {
  width: 140px;
  margin: var(--dl-space-space-twounits);
  padding: var(--dl-space-space-unit);
  object-fit: cover;
}
.login-post-login-links {
  gap: var(--dl-space-space-unit);
  flex: 1;
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.login-post-login-text1 {
  margin-left: var(--dl-space-space-twounits);
}
.login-post-login-text2 {
  margin-left: var(--dl-space-space-twounits);
}
.login-post-login-lottie-node {
  width: 300px;
  height: 300px;
}
@media(max-width: 479px) {
  .login-post-login-container2 {
    padding-left: 0px;
    padding-right: 0px;
    justify-content: space-between;
  }
  .login-post-login-image {
    margin: 0px;
  }
  .login-post-login-links {
    flex: 1;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .login-post-login-lottie-node {
    margin: var(--dl-space-space-sixunits);
  }
}
</style>
