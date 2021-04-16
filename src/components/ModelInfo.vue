<template>
  <v-form>
    <v-container fill-height>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="mark"
            label="Марка"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="model"
            label="Модель"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="number" label="Инв. N" required></v-text-field>
        </v-col>
        <v-col cols="12" md="1" class="my-auto">
          <v-icon>mdi-cog</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="type" label="Тип" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="location"
            label="Расположение"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ModelInfo",
  data() {
      return {
          location: "",
          number: "",
          type: "",
          model: "",
          mark: ""
      }
  }
};
</script>

<style>
</style>