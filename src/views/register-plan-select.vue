<template>
  <div class="register-plan-select-container">
    <div class="register-plan-select-container01">
      <div class="register-plan-select-container02">
        <img
          alt="image"
          src="https://media.discordapp.net/attachments/1087358158458073110/1131623691604742324/Cloudarts.png?width=691&amp;height=628"
          class="register-plan-select-image"
        />
      </div>
    </div>
    <div class="register-plan-select-container03">
      <div class="register-plan-select-container04">
        <h1 class="register-plan-select-text">
          Você está muito próximo de mudar a forma de
        </h1>
        <h1 class="register-plan-select-text01">Hospedar seu site</h1>
      </div>
      <span class="register-plan-select-text02">
        <span>Escolha o seu plano</span>
        <br />
      </span>
    </div>
    <div class="register-plan-select-container05">
      <div class="register-plan-select-container06">
        <h1 class="register-plan-select-text05">Adventure</h1>
        <div class="register-plan-select-container07">
          <h1 class="register-plan-select-text06">Grátis</h1>
        </div>
        <span class="register-plan-select-text07">
          <span class="register-plan-select-text08">
            Você não paga nada para usar
          </span>
          <br class="register-plan-select-text09" />
          <span class="register-plan-select-text10">sem taxa de setup</span>
          <br />
        </span>
        <div class="register-plan-select-container08">
          <span class="register-plan-select-text12">
            Ideal para quem está começando.
          </span>
        </div>
        <router-link
          to="/register-post-plan-select"
          class="register-plan-select-button button"
        >
          ESCOLHER ESSE PLANO
        </router-link>
        <span class="register-plan-select-text13">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum
          non ante in eleifend. Quisque rutrum, metus eget pretium accumsan,
          libero arcu dignissim nisl, id sagittis lectus mauris eu libero.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer luctus sem lacus, quis ullamcorper sem
          molestie id. Nunc justo felis, vestibulum at fringilla sit amet, iaculis
          nec enim. Morbi eu pulvinar sem.
        </span>
      </div>
      <div class="register-plan-select-container09">
        <h1 class="register-plan-select-text14">Adventure</h1>
        <div class="register-plan-select-container10">
          <h1 class="register-plan-select-text15">R$</h1>
          <h1 class="register-plan-select-text16">500</h1>
          <h1 class="register-plan-select-text17">/mês</h1>
        </div>
        <span class="register-plan-select-text18">
          <span>Cobrado mensalmente</span>
          <br />
          <span>sem taxa de setup</span>
          <br />
        </span>
        <div class="register-plan-select-container11">
          <span class="register-plan-select-text23">
            Ideal para sites com mais de 50 Bilhões.
          </span>
        </div>
        <router-link
          to="/register-post-plan-select"
          class="register-plan-select-button1 button"
        >
          ESCOLHER ESSE PLANO
        </router-link>
        <span class="register-plan-select-text24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum
          non ante in eleifend. Quisque rutrum, metus eget pretium accumsan,
          libero arcu dignissim nisl, id sagittis lectus mauris eu libero.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer luctus sem lacus, quis ullamcorper sem
          molestie id. Nunc justo felis, vestibulum at fringilla sit amet, iaculis
          nec enim. Morbi eu pulvinar sem.
        </span>
      </div>
      <div class="register-plan-select-container12">
        <h1 class="register-plan-select-text25">Adventure</h1>
        <div class="register-plan-select-container13">
          <h1 class="register-plan-select-text26">R$</h1>
          <h1 class="register-plan-select-text27">999</h1>
          <h1 class="register-plan-select-text28">/mês</h1>
        </div>
        <span class="register-plan-select-text29">
          <span>Cobrado trimestralmente</span>
          <br />
          <span>sem taxa de setup</span>
          <br />
        </span>
        <div class="register-plan-select-container14">
          <span class="register-plan-select-text34">
            Ideal para sites com mais de 700 anos.
          </span>
        </div>
        <router-link
          to="/register-post-plan-select"
          class="register-plan-select-button2 button"
        >
          ESCOLHER ESSE PLANO
        </router-link>
        <span class="register-plan-select-text35">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum
          non ante in eleifend. Quisque rutrum, metus eget pretium accumsan,
          libero arcu dignissim nisl, id sagittis lectus mauris eu libero.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer luctus sem lacus, quis ullamcorper sem
          molestie id. Nunc justo felis, vestibulum at fringilla sit amet, iaculis
          nec enim. Morbi eu pulvinar sem.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPlanSelect',
  metaInfo: {
    title: 'Register-PlanSelect - TestFrontEnd',
    meta: [
      {
        property: 'og:title',
        content: 'Register-PlanSelect - TestFrontEnd',
      },
    ],
  },
}
</script>

<style scoped>
.register-plan-select-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
}
.register-plan-select-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.register-plan-select-container02 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.register-plan-select-image {
  width: 200px;
  padding: var(--dl-space-space-unit);
  margin-top: var(--dl-space-space-fourunits);
  object-fit: cover;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.register-plan-select-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.register-plan-select-container04 {
  flex: 0 0 auto;
  width: 100%;
  margin: var(--dl-space-space-twounits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.register-plan-select-text {
  color: #333333;
  align-self: center;
  font-family: Open Sans;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.register-plan-select-text01 {
  color: #5800ff;
  margin: var(--dl-space-space-halfunit);
  align-self: center;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 800;
  padding-top: 0px;
  border-color: #360496;
  border-style: solid;
  border-width: 1px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 2px;
}
.register-plan-select-text02 {
  font-size: 22px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 500;
}
.register-plan-select-container05 {
  flex: 0 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.register-plan-select-container06 {
  flex: 0 0 auto;
  width: 32%;
  height: 900px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}
.register-plan-select-text05 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-twounits);
  font-family: Open Sans;
}
.register-plan-select-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-plan-select-text06 {
  color: #5800ff;
  font-size: 44px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
}
.register-plan-select-text07 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-unit);
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 1.5;
}
.register-plan-select-text08 {
  line-height: 1.5;
}
.register-plan-select-text09 {
  line-height: 1.5;
}
.register-plan-select-text10 {
  line-height: 1.5;
}
.register-plan-select-container08 {
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
.register-plan-select-text12 {
  color: var(--dl-color-gray-500);
  font-size: 24px;
  align-self: center;
  text-align: center;
  font-family: Open Sans;
}
.register-plan-select-button {
  color: var(--dl-color-gray-white);
  width: 90%;
  height: 100px;
  font-size: 16px;
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
.register-plan-select-text13 {
  color: var(--dl-color-gray-500);
  width: 90%;
  height: 100%;
  font-size: 18px;
  font-style: normal;
  text-align: justify;
  font-weight: 300;
}
.register-plan-select-container09 {
  flex: 0 0 auto;
  width: 32%;
  height: 900px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}
.register-plan-select-text14 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-twounits);
  font-family: Open Sans;
}
.register-plan-select-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-plan-select-text15 {
  color: #5800ff;
  font-size: 22px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 400;
}
.register-plan-select-text16 {
  color: #5800ff;
  font-size: 44px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
}
.register-plan-select-text17 {
  color: #5800ff;
  font-size: 22px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 400;
}
.register-plan-select-text18 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-unit);
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 1.5;
}
.register-plan-select-container11 {
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
.register-plan-select-text23 {
  color: var(--dl-color-gray-500);
  font-size: 24px;
  align-self: center;
  text-align: center;
  font-family: Open Sans;
}
.register-plan-select-button1 {
  color: var(--dl-color-gray-white);
  width: 90%;
  height: 100px;
  font-size: 16px;
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
.register-plan-select-text24 {
  color: var(--dl-color-gray-700);
  width: 90%;
  height: 100%;
  font-size: 18px;
  font-style: normal;
  text-align: justify;
  font-weight: 400;
  text-transform: capitalize;
}
.register-plan-select-container12 {
  flex: 0 0 auto;
  width: 32%;
  height: 900px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}
.register-plan-select-text25 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-twounits);
  font-family: Open Sans;
}
.register-plan-select-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-plan-select-text26 {
  color: #5800ff;
  font-size: 22px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 400;
}
.register-plan-select-text27 {
  color: #5800ff;
  font-size: 44px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
}
.register-plan-select-text28 {
  color: #5800ff;
  font-size: 22px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 400;
}
.register-plan-select-text29 {
  color: var(--dl-color-gray-500);
  margin: var(--dl-space-space-unit);
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 1.5;
}
.register-plan-select-container14 {
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
.register-plan-select-text34 {
  color: var(--dl-color-gray-500);
  font-size: 24px;
  align-self: center;
  text-align: center;
  font-family: Open Sans;
}
.register-plan-select-button2 {
  color: var(--dl-color-gray-white);
  width: 90%;
  height: 100px;
  margin: var(--dl-space-space-unit);
  font-size: 16px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 400;
  border-style: inset;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  text-decoration: none;
  background-color: #5800ff;
}
.register-plan-select-text35 {
  color: var(--dl-color-gray-700);
  width: 90%;
  height: 100%;
  font-size: 18px;
  font-style: normal;
  text-align: justify;
  font-weight: 400;
}
@media(max-width: 767px) {
  .register-plan-select-container05 {
    flex-direction: column;
  }
  .register-plan-select-container06 {
    width: 100%;
  }
  .register-plan-select-container09 {
    width: 100%;
  }
  .register-plan-select-container12 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .register-plan-select-container05 {
    flex-direction: column;
  }
  .register-plan-select-container06 {
    width: 100%;
  }
  .register-plan-select-container09 {
    width: 100%;
  }
  .register-plan-select-container12 {
    width: 100%;
  }
}
</style>
