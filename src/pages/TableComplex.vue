<template>
  <content-layout>
    <template v-slot:actions>
      <mv-button primary icon="plus">Ajouter un enregistrement</mv-button>
    </template>
    <mv-form :model="filters" inline>
      <panel title="Mon tableau">
        <template v-slot:actions>
          <form-item label="Filtres :">
            <el-select v-model="filters.select" placeholder="Filtre général..."></el-select>
          </form-item>
          <mv-button secondary icon="plus">Une autre action</mv-button>
        </template>
        <mv-table
          :data="table[filters.page - 1]"
          :total="54"
          :results="14"
          :selected="selected.length"
          :selection.sync="checked[filters.page - 1]"
          :page.sync="filters.page"
          :limit.sync="filters.limit"
        >
          <template v-slot:selection>
            <div class="margin-top">Vous avez sélectionné :
              <el-tag v-for="(item, index) in selected" :key="index" v-text="item.title"></el-tag>
            </div>
          </template>
          <template v-slot:header>
            <form-item>
              <form-input v-model="filters.search" icon="search" placeholder="Rechercher..."/>
            </form-item>
            <form-item>
              <el-select v-model="filters.select" placeholder="Filtre spécifique..."></el-select>
            </form-item>
          </template>
          <!-- <template v-slot:expand>
            <p class="no-margin text-bold">
              <a v-text="row.title"></a>
            </p>
            <p class="no-margin text-small text-secondary" v-text="row.subtitle"></p>
          </template>-->
          <table-column prop="date" date label="Date" width="120" align="left" sortable></table-column>
          <table-column prop="title" label="Titre">
            <template v-slot:header="{ column }">
              <form-input v-model="filters.search" icon="search" :placeholder="column.title"/>
            </template>
          </table-column>
          <table-column
            prop="date"
            datetime="YYYY-MM-DD / HH:mm:ss"
            label="Date et heure"
            width="180"
          ></table-column>
          <table-column prop="date" ago label="Depuis" width="140"></table-column>
        </mv-table>
      </panel>
    </mv-form>
  </content-layout>
</template>

<script>
export default {
  name: "TableComplex",
  data() {
    return {
      checked: [[], []],
      filters: {
        page: 1,
        limit: 10
      },
      table: [
        [
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre"
          },
          {
            date: new Date(2019, 1, 15, 3, 4, 5),
            title: "Title 2",
            subtitle: "Test sous-titre 2"
          },
          {
            date: new Date(2019, 2, 4, 5, 6, 7),
            title: "Title 3",
            subtitle: "Test sous-titre 3"
          },
          { date: new Date(2019, 1, 24, 10, 11, 12), title: "Title 5" },
          { date: new Date(2019, 1, 17, 22, 23, 25), title: "Title 4" },
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre"
          },
          {
            date: new Date(2019, 1, 15, 3, 4, 5),
            title: "Title 2",
            subtitle: "Test sous-titre 2"
          },
          {
            date: new Date(2019, 2, 4, 5, 6, 7),
            title: "Title 3",
            subtitle: "Test sous-titre 3"
          },
          { date: new Date(2019, 1, 24, 10, 11, 12), title: "Title 5" },
          { date: new Date(2019, 1, 17, 22, 23, 25), title: "Title 4" }
        ],
        [
          {
            date: new Date(2019, 1, 15, 3, 4, 5),
            title: "Title 2",
            subtitle: "Test sous-titre 2"
          },
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre"
          },
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre"
          },
          { date: new Date(2019, 1, 17, 22, 23, 25), title: "Title 4" }
        ]
      ]
    };
  },
  computed: {
    selected() {
      return this.checked.reduce(
        (total, selection) => [...total, ...selection],
        []
      );
    }
  }
};
</script>
