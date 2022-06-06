<template>
  <div class="container">
    <div class="card">
      <h1>Realize seu login</h1>
      <div class="label-float">
        <input type="text" id="usuario" placeholder="" v-model="ra" />
        <label for="usuario">RA:</label>
      </div>
      <div class="label-float">
        <input type="password" id="senha" v-model="password" />
        <label for="senha">Senha:</label>
      </div>
      <section>
        <button @click="login()">LOGIN</button>
      </section>
      <div class="justify-center">
        <hr />
      </div>
      <p>Não possui uma conta?</p>
      <p>
        <a href="cadastro.html"> Cadastre-se gratuitamente </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ra: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // await .... api aqui
      this.$toast.open({
        message: "Login Realizado!",
        type: "success",
      });
      this.$router.push({ path: "/about" });
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");

body {
  background-image: url(https://wallpaperboat.com/wp-content/uploads/2020/12/14/63634/presentation-business-style-23-640x360.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: #d9d9d9;
}

.card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5%;
  box-shadow: 3px 3px 1px 0px #00000070;
  width: 380px;
  height: 450px;
}

h1 {
  text-align: center;
  margin-bottom: 5px;
  color: #000000;
}

.label-float input {
  width: 100%;
  padding: 5px 5px;
  display: inline-block;
  border: 0;
  border-bottom: 2px solid #000000;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all 0.3s ease-out;
  border-radius: 0;
}

.label-float {
  position: relative;
  padding-top: 13px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.label-float input:focus {
  border-bottom: 2px solid #043bff;
}

.label-float label {
  color: #000000;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 3px;
  transition: all 0.3s ease-out;
}

.label-float input:focus + label,
.label-float input:valid + label {
  font-size: 13px;
  margin-top: 0;
  color: #000000;
}

button {
  width: 385px;
  height: 58.61px;
  left: calc(50% - 405px / 2 + 360.5px);
  bottom: 423.39px;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  margin-top: 20px;
  background: #043bff;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease-out;
}

button:hover {
  background-color: #000000;
  color: #fff;
}

.justify-center {
  display: flex;
  justify-content: center;
}

hr {
  margin-top: 10%;
  margin-bottom: 3%;
  width: 60%;
}

p {
  color: #000000;
  font-size: 14pt;
  text-align: center;
}

a {
  color: #000000;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-out;
}

a:hover {
  color: #043bff;
}
.botao {
  position: absolute;
  width: 405px;
  height: 58.61px;
  left: calc(50% - 405px / 2 + 360.5px);
  bottom: 423.39px;

  background: #043bff;
  mix-blend-mode: hard-light;
  border-radius: 8px;
}
</style>
