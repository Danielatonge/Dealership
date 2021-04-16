<template>
  <div>
    <ModelInfo :machine="getMachine"/>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Основные данные</th>
            <th class=""></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in getData" :key="index">
            <td>{{row.name}}</td>
            <td>{{row.value}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import ModelInfo from "@/components/ModelInfo";
import { mapGetters } from "vuex";

export default {
  name: "Characteristic",
  
  components: {
    ModelInfo,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getMachine", "getData"]),
  },
};
</script>

<style>
</style>