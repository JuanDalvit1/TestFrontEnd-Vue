<template>
  <div class="login-container">
    <div class="login-container1">
      <div class="login-container2">
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/1087358158458073110/1131623691604742324/Cloudarts.png?width=691&amp;height=628"
          class="login-image"
        />
      </div>
    </div>
    <div class="login-container3">
      <div class="login-container4">
        <h1 class="login-text">Entre em sua conta</h1>
        <span class="login-text01">
          Para acessar sua conta informe seu e-mail e senha
        </span>
        <div class="login-container5">
          <span class="login-text02">
            <span>E-mail</span>
            <br />
          </span>
          <input
            type="text"
            placeholder="Seu e-mail"
            class="login-textinput input textarea"
          />
          <span class="login-text05">
            <span>E-mail</span>
            <br />
          </span>
          <input
            type="text"
            placeholder="Seu e-mail"
            class="login-textinput1 input textarea"
          />
          <span class="login-text08">Esqueci minha senha</span>
        </div>
        <router-link to="/login-post-login" class="login-navlink button">
          <span class="login-text09">
            <span>FAZER LOGIN</span>
            <br />
          </span>
        </router-link>
      </div>
    </div>
    <div class="login-container6">
      <span class="login-text12">Ainda não tem conta? </span>
      <router-link to="/register-plan-select" class="login-navlink1">
        Cadastre-se
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  metaInfo: {
    title: 'TestFrontEnd',
    meta: [
      {
        property: 'og:title',
        content: 'TestFrontEnd',
      },
    ],
  },
}
</script>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f1f1f1;
}
.login-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.login-container2 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.login-image {
  width: 200px;
  padding: var(--dl-space-space-unit);
  margin-top: var(--dl-space-space-fourunits);
  object-fit: cover;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.login-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.login-container4 {
  flex: 0 0 auto;
  width: 600px;
  height: 500px;
  margin: var(--dl-space-space-threeunits);
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-shadow: 0px 0px 15px 0px #c2c2c2;
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  border-top-left-radius: var(--dl-radius-radius-radius8);
  border-top-right-radius: var(--dl-radius-radius-radius8);
  border-bottom-left-radius: var(--dl-radius-radius-radius8);
  border-bottom-right-radius: var(--dl-radius-radius-radius8);
}
.login-text {
  color: #5800ff;
  align-self: flex-start;
  font-family: Open Sans;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.login-text01 {
  margin: 0px;
  align-self: flex-start;
  font-family: Open Sans;
  padding-top: 0px;
  padding-left: 26px;
  padding-right: 26px;
  padding-bottom: 0px;
}
.login-container5 {
  flex: 0 0 auto;
  width: 90%;
  height: 230px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: center;
}
.login-text02 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-bottom: var(--dl-space-space-halfunit);
}
.login-textinput {
  width: 100%;
  height: 60px;
  text-align: left;
  border-color: #b5b5b5;
}
.login-text05 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.login-textinput1 {
  width: 100%;
  height: 60px;
  text-align: left;
  border-color: #b5b5b5;
}
.login-text08 {
  color: var(--dl-color-gray-500);
  align-self: flex-end;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Open Sans;
}
.login-navlink {
  color: var(--dl-color-gray-white);
  width: 90%;
  height: 60px;
  border-style: inset;
  text-decoration: none;
  background-color: #5800ff;
}
.login-text09 {
  font-family: Open Sans;
}
.login-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.login-text12 {
  font-size: 20px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}
.login-navlink1 {
  color: #5800ff;
  font-size: 20px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  border-color: #5800ff;
  border-width: 1px;
  text-decoration: none;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
@media(max-width: 479px) {
  .login-container4 {
    width: 90%;
  }
}
</style>
