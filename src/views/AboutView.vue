<template>
  <div class="about flex">
    <div class="content flex flex-column justify-center">
      <h2 class="text-center">Cadastro de equipes</h2>
      <label> Membros: </label>
      <input type="text" v-model="members" />

      <label> Membros: </label>
      <input type="text" v-model="team" />

      <label for="1"> Membros:</label>
      <textarea name="" id="1" cols="30" rows="10"></textarea>

      <label for="2"> Membros:</label>
      <textarea name="" id="2" cols="30" rows="10"></textarea>
      <div class="flex m-5">
        <button class="button-success" @click="post()">Salvar</button>
        <button class="button-cancel">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observations: "",
      team: "",
      members: "",
    };
  },
  methods: {
    async post() {
      // await .... api aqui
      this.$toast.open({
        message: "Login Realizado!",
        type: "success",
      });
      console.log(this.team);
    },
  },
};
</script>
<style scoped lang="scss">
.about {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.content {
  border-radius: 8px;
  padding: 25px;
  height: 100%;
  min-width: 50%;
  background: linear-gradient(180deg, #bfbfbf 0%, rgba(217, 217, 217, 0) 100%);
}
</style>
