<template>
  <div>
    <ModelInfo :machine="getMachine" />
    <v-row class="mb-3 mt-3">
      <v-col class="text-h6" cols="12">
        Список операций, выполняемых при данном виде работ
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="raw"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.state="{ item }">
        <v-simple-checkbox v-model="item.state" disabled> </v-simple-checkbox>
        {{ item.state ? "Удовл-ое" : "Не удовл-ое" }}
      </template>
    </v-data-table>

    <v-tabs v-model="tab_two" background-color="transparent">
      <v-tab>Материалы</v-tab>
      <v-tab>Трудовые ресурсы</v-tab>
      <v-tab>Инструменты и оснастка</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab_two">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">N п/п</th>
                    <th class="text-center">ТМЦ</th>
                    <th class="text-center">Кол-во</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>Item 2</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>Item 3</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ModelInfo from "@/components/ModelInfo";
import { mapGetters } from "vuex";
export default {
  name: "Maintenance",
  components: {
    ModelInfo,
  },
  computed: {
    ...mapGetters([
      "getMachine"
    ]),
  },
  data() {
    return {
      tab_two: null,
      headers: [
        {
          text: "No п/п",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Узел станка", value: "unit", sortable: false },
        { text: "Операция", value: "operation", sortable: false },
        { text: "Продолжть", value: "continue", sortable: false },
        { text: "Трудоёмкость (ч/ч.)", value: "difficulty", sortable: false },
        { text: "Результат", value: "results", sortable: false },
        { text: "Состояние", value: "state", sortable: false },
      ],
      raw: [
        {
          id: "6.56",
          unit: "Ограничители и концевые выключатели",
          operation:
            "В ручном режиме довести до концевых выключателей, проверить наличие свободного хода до ограничителей",
          continue: "00:15:20",
          difficulty: "0,062",
          results:
            "В ручном режиме довести до концевых выключателей, проверить наличие свободного хода до ограничителей",
          state: false,
        },
        {
          id: "6.6",
          unit: "Ограничители и концевые выключатели",
          operation:
            "В ручном режиме довести до концевых выключателей, проверить наличие свободного хода до ограничителей",
          continue: "00:15:20",
          difficulty: "0,062",
          results:
            "В ручном режиме довести до концевых выключателей, проверить наличие свободного хода до ограничителей",
          state: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>