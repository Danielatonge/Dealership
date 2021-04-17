<template>
  <v-form>
    <v-container fill-height>
      <v-row>
        <v-col cols="6" md="4">
          <v-text-field
            v-model="machine.brand"
            label="Марка"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="6" md="4">
          <v-text-field
            v-model="machine.model"
            label="Модель"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="6" md="3">
          <v-text-field v-model="machine.inv" label="Инв. N" required></v-text-field>
        </v-col>
        <v-col cols="6" md="1" class="my-auto">
          <v-icon>mdi-cog</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="machine.type" label="Тип" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="machine.location"
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
  props: ['machine'],
};
</script>

<style>
</style>