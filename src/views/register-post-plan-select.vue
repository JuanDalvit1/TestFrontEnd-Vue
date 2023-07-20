<template>
  <div class="register-post-plan-select-container">
    <div class="register-post-plan-select-container01">
      <div class="register-post-plan-select-container02">
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/1087358158458073110/1131623691604742324/Cloudarts.png?width=691&amp;height=628"
          class="register-post-plan-select-image"
        />
      </div>
    </div>
    <div class="register-post-plan-select-container03">
      <div class="register-post-plan-select-container04">
        <h1 class="register-post-plan-select-text">Criar sua conta</h1>
        <span class="register-post-plan-select-text01">
          Informe seus dados pessoais para acesso à sua conta
        </span>
        <div class="register-post-plan-select-container05">
          <span class="register-post-plan-select-text02">
            <span>Nome Completo</span>
            <br />
          </span>
          <input
            type="text"
            required
            placeholder="Informe seu nome completo"
            class="register-post-plan-select-textinput input textarea"
          />
          <span class="register-post-plan-select-text05">
            <span>Celular</span>
            <br />
          </span>
          <input
            type="tel"
            required
            placeholder="(00) 00000-0000"
            class="register-post-plan-select-textinput1 input textarea"
          />
          <span class="register-post-plan-select-text08">
            <span>E-mail</span>
            <br />
          </span>
          <input
            type="email"
            required
            placeholder="Informe seu e-mail"
            class="register-post-plan-select-textinput2 input textarea"
          />
          <span class="register-post-plan-select-text11">
            <span>Senha</span>
            <br />
          </span>
          <input
            type="password"
            required
            class="register-post-plan-select-textinput3 input textarea"
          />
          <span class="register-post-plan-select-text14">
            <span>Confirme sua senha</span>
            <br />
          </span>
          <input
            type="password"
            required
            class="register-post-plan-select-textinput4 input textarea"
          />
        </div>
        <div class="register-post-plan-select-container06">
          <h1 class="register-post-plan-select-text17">Entre em sua conta</h1>
          <span class="register-post-plan-select-text18">
            <span>Nome do seu site</span>
            <br />
          </span>
          <input
            type="text"
            required
            placeholder="Meu site"
            class="register-post-plan-select-textinput5 input textarea"
          />
          <span class="register-post-plan-select-text21">
            <span>Exatamente igual o título do seu site</span>
            <br />
          </span>
        </div>
        <div class="register-post-plan-select-container07">
          <input
            type="checkbox"
            checked="true"
            class="register-post-plan-select-checkbox"
          />
          <span class="register-post-plan-select-text24">
            <span>
              Ao concluir com seu cadastro você concorda com nossos termos de uso
              e políticas de privacidade.
            </span>
            <br />
          </span>
        </div>
        <router-link
          to="/login-post-login"
          class="register-post-plan-select-button button"
        >
          CRIAR CONTA
        </router-link>
      </div>
      <div class="register-post-plan-select-container08">
        <div class="register-post-plan-select-container09">
          <div class="register-post-plan-select-container10">
            <span class="register-post-plan-select-text27">plano escolhido</span>
          </div>
          <h1 class="register-post-plan-select-text28">Adventure</h1>
          <div class="register-post-plan-select-container11">
            <h1 class="register-post-plan-select-text29">Grátis</h1>
          </div>
          <span class="register-post-plan-select-text30">
            <span class="register-post-plan-select-text31">
              Você não paga nada para usar
            </span>
            <br class="register-post-plan-select-text32" />
            <span class="register-post-plan-select-text33">
              sem taxa de setup
            </span>
            <br />
          </span>
          <div class="register-post-plan-select-container12">
            <span class="register-post-plan-select-text35">
              Ideal para quem está começando.
            </span>
          </div>
          <span class="register-post-plan-select-text36">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            elementum non ante in eleifend. Quisque rutrum, metus eget pretium
            accumsan, libero arcu dignissim nisl, id sagittis lectus mauris eu
            libero. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer luctus sem lacus, quis
            ullamcorper sem molestie id. Nunc justo felis, vestibulum at fringilla
            sit amet, iaculis nec enim. Morbi eu pulvinar sem.
          </span>
          <router-link
            to="/register-plan-select"
            class="register-post-plan-select-button1 button"
          >
            Trocar plano
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPostPlanSelect',
  metaInfo: {
    title: 'Register-PostPlanSelect - TestFrontEnd',
    meta: [
      {
        property: 'og:title',
        content: 'Register-PostPlanSelect - TestFrontEnd',
      },
    ],
  },
}
</script>

<style scoped>
.register-post-plan-select-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f1f1f1;
}
.register-post-plan-select-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.register-post-plan-select-container02 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-post-plan-select-image {
  width: 200px;
  padding: var(--dl-space-space-unit);
  margin-top: var(--dl-space-space-fourunits);
  object-fit: cover;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.register-post-plan-select-container03 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.register-post-plan-select-container04 {
  flex: 0 0 auto;
  width: 64%;
  height: 950px;
  display: flex;
  box-shadow: 0px 0px 10px 0px #ededed;
  align-items: stretch;
  border-color: var(--dl-color-gray-black);
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-sixunits);
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.register-post-plan-select-text {
  color: #5800ff;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  font-family: Open Sans;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-text01 {
  align-self: flex-start;
  margin-top: 0px;
  font-family: Open Sans;
  margin-left: 0px;
  padding-top: 0px;
  margin-right: 0px;
  padding-left: 26px;
  margin-bottom: 0px;
  padding-right: 26px;
  padding-bottom: 0px;
}
.register-post-plan-select-container05 {
  flex: 0 0 auto;
  width: 90%;
  height: auto;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-right: var(--dl-space-space-oneandhalfunits);
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: center;
}
.register-post-plan-select-text02 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-textinput {
  flex: 1;
  width: 100%;
  height: 200px;
  text-align: left;
  border-color: #b5b5b5;
}
.register-post-plan-select-text05 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-textinput1 {
  flex: 1;
  width: 100%;
  height: 200px;
  text-align: left;
  border-color: #b5b5b5;
}
.register-post-plan-select-text08 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-textinput2 {
  flex: 1;
  width: 100%;
  height: 200px;
  text-align: left;
  border-color: #b5b5b5;
}
.register-post-plan-select-text11 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-textinput3 {
  flex: 1;
  width: 100%;
  height: 200px;
  text-align: left;
  border-color: #b5b5b5;
}
.register-post-plan-select-text14 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-textinput4 {
  flex: 1;
  width: 100%;
  height: 200px;
  text-align: left;
  border-color: #b5b5b5;
}
.register-post-plan-select-container06 {
  flex: 0 0 auto;
  width: 90%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  margin-left: var(--dl-space-space-oneandhalfunits);
  padding-top: var(--dl-space-space-unit);
  border-color: rgba(120, 120, 120, 0.4);
  border-style: solid;
  border-width: 1px;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
  border-top-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
.register-post-plan-select-text17 {
  color: #5800ff;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  font-family: Open Sans;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 0px;
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-text18 {
  color: #393939;
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-textinput5 {
  flex: 1;
  width: 100%;
  height: 200px;
  text-align: left;
  border-color: #b5b5b5;
}
.register-post-plan-select-text21 {
  color: var(--dl-color-gray-700);
  align-self: flex-start;
  font-style: normal;
  font-weight: 500;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-post-plan-select-container07 {
  flex: 0 0 auto;
  width: 92%;
  height: 80px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
.register-post-plan-select-checkbox {
  width: 25px;
  height: 25px;
  border-radius: var(--dl-radius-radius-radius8);
}
.register-post-plan-select-text24 {
  color: #393939;
  align-self: center;
  font-style: normal;
  font-weight: 500;
  padding-left: var(--dl-space-space-halfunit);
  padding-bottom: 0px;
}
.register-post-plan-select-button {
  color: var(--dl-color-gray-white);
  width: 92%;
  height: 50px;
  font-size: 16px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  font-family: Open Sans;
  font-weight: 400;
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: #5800ff;
}
.register-post-plan-select-container08 {
  flex: 0 0 auto;
  width: 34%;
  height: 100px;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.register-post-plan-select-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: 950px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: 0px;
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: 0px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}
.register-post-plan-select-container10 {
  flex: 0 0 auto;
  width: 250px;
  height: 50px;
  display: flex;
  margin-top: -25px;
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: solid;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: center;
  background-color: #000000;
}
.register-post-plan-select-text27 {
  color: var(--dl-color-gray-white);
  font-family: Open Sans;
  text-transform: uppercase;
}
.register-post-plan-select-text28 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-twounits);
  font-family: Open Sans;
}
.register-post-plan-select-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-post-plan-select-text29 {
  color: #5800ff;
  font-size: 44px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
}
.register-post-plan-select-text30 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-unit);
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 1.5;
}
.register-post-plan-select-text31 {
  line-height: 1.5;
}
.register-post-plan-select-text32 {
  line-height: 1.5;
}
.register-post-plan-select-text33 {
  line-height: 1.5;
}
.register-post-plan-select-container12 {
  flex: 0 0 auto;
  width: 80%;
  height: 130px;
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-900);
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
  border-left-width: 0px;
  border-right-width: 0px;
}
.register-post-plan-select-text35 {
  color: var(--dl-color-gray-500);
  font-size: 24px;
  align-self: center;
  text-align: center;
  font-family: Open Sans;
}
.register-post-plan-select-text36 {
  color: var(--dl-color-gray-500);
  width: 90%;
  height: 100%;
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: justify;
  font-weight: 300;
}
.register-post-plan-select-button1 {
  color: #5800ff;
  width: 90%;
  height: 100px;
  font-size: 16px;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  font-family: Open Sans;
  font-weight: 400;
  border-color: #5800ff;
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: var(--dl-color-gray-white);
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
}
@media(max-width: 767px) {
  .register-post-plan-select-container09 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .register-post-plan-select-container03 {
    flex-direction: column;
  }
  .register-post-plan-select-container04 {
    width: 100%;
  }
  .register-post-plan-select-container08 {
    width: 100%;
    margin-top: var(--dl-space-space-threeunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
  .register-post-plan-select-container09 {
    width: 100%;
    align-self: center;
  }
}
</style>
