<template>
  <mv-content-layout>
    <template v-slot:actions>
      <mv-button primary icon="plus">Ajouter un enregistrement</mv-button>
    </template>
    <mv-table :data="table">
      <mv-table-column prop="date" date label="Date" width="180" align="left" sortable></mv-table-column>
      <mv-table-column prop="title" label="Titre" sortable></mv-table-column>
      <mv-table-column label="Autre titre">
        <template v-slot:default="{ row }">
          <p class="no-margin text-bold">
            <a v-text="row.title"></a>
          </p>
          <p class="no-margin text-small text-secondary" v-text="row.subtitle"></p>
        </template>
      </mv-table-column>
      <mv-table-column
        prop="date"
        datetime="YYYY-MM-DD / HH:mm:ss"
        label="Date et heure"
        width="240"
      ></mv-table-column>
      <mv-table-column prop="date" ago label="Depuis" width="240"></mv-table-column>
    </mv-table>
  </mv-content-layout>
</template>

<script>
export default {
  data() {
    return {
      table: [
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
      ]
    };
  }
};
</script>
