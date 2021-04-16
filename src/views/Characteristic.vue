<template>
<div>
  <ModelInfo />
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Основные данные</th>
          <th class=""></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Год выпуска</td>
          <td>2013</td>
        </tr>
        <tr>
          <td>Заводской (серийный номер)</td>
          <td>VN 123456789</td>
        </tr>
        <tr>
          <td>Производитель (поставщик)</td>
          <td>DECKEL MAHO</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import ModelInfo from "@/components/ModelInfo";

export default {
  name: "Characteristic",
  components: {
    ModelInfo,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
</style>