<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :width="350" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <div>
          <!-- <v-icon class="">mdi-arrow-left</v-icon> -->
          <p class="font-weight-black text-center">Завод</p>
        </div>
      </v-sheet>

      <v-divider></v-divider>
      <v-tabs v-model="tab_one" fixed-tabs>
        <v-tab>Мониторинг</v-tab>
        <v-tab>ТОиР</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab_one">
        <v-tab-item>
          <v-card flat>
            <v-card-text>Мониторинг Here</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-treeview
              :active.sync="active"
              :items="items"
              activatable
              color="warning"
              open-on-click
              transition
              
            >{{selected}}</v-treeview>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      
      
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];
      if(typeof id === 'string' || id instanceof String) {
        this.$router.push({path: id });
      }
    },
  },
  data: () => ({
    tab_one: null,
    drawer: null,
    active: [],
    open: [],
    items: [
      {
        id: 1,
        name: "Цех N3",
        children: [
          {
            id: 2,
            name: "Участок N1",
          },
          {
            id: 3,
            name: "Участок N2",
          },
          {
            id: 4,
            name: "Участок N3",
            children: [
              {
                id: 5,
                name: "ACCUWAY UT-2OOM (TA-315, цех N12)",
                children: [
                  { id: '/characteristic', name: "Характеристики" },
                  { id: '/maintain', name: "Техническое обслуживание" },
                  { id: 8, name: "Дефекты и отказы" },
                  { id: 9, name: "Архив документов" },
                  { id: 10, name: "Наработка" },
                  { id: 11, name: "Контролируемые параметры" },
                ],
              },
              {
                id: 12,
                name: "ACCUWAY UT-2OOM(TA-311)",
              },
              {
                id: 13,
                name: "ACCUWAY UT-2OOXY (TA-101)",
              },
              {
                id: 14,
                name: "ARIX TIMA 42CL (УФ-144)",
              },
            ],
          },
        ],
      },
    ],
  }),
  mounted() {
    this.$store.dispatch('loadItem');
  }
};
</script>
