<template>
  <mv-content-layout>
    <template v-slot:actions>
      <mv-button primary icon="plus">Ajouter un enregistrement</mv-button>
    </template>
    <mv-panel>
      <mv-form>
        <mv-form-group title="Action rapide">
          <template v-slot:description>
            <p>
              Utilisez ce formulaire pour insérer rapidement un élément dans la
              liste.
            </p>
            <hr />
            <mv-button success>Enregistrer</mv-button>
            <mv-button ghost>Annuler</mv-button>
          </template>
          <mv-form-row>
            <mv-form-column>
              <mv-form-item label="Champ obligatoire" required>
                <mv-form-input placeholder="Texte" />
              </mv-form-item>
            </mv-form-column>
            <mv-form-column>
              <mv-form-item label="Champ facultatif">
                <mv-form-input placeholder="Texte" />
              </mv-form-item>
            </mv-form-column>
          </mv-form-row>
          <mv-form-item label="Champ facultatif">
            <mv-form-input placeholder="Texte" />
          </mv-form-item>
        </mv-form-group>
      </mv-form>
    </mv-panel>

    <mv-form :model="filters" inline>
      <mv-panel title="Mon tableau">
        <template v-slot:actions>
          <mv-form-item label="Filtres :" class="no-margin-bottom">
            <mv-form-select
              v-model="filters.select"
              placeholder="Filtre général..."
            ></mv-form-select>
          </mv-form-item>
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
            <div class="margin-top">
              Vous avez sélectionné :
              <el-tag
                v-for="(item, index) in selected"
                :key="index"
                v-text="item.title"
              ></el-tag>
            </div>
          </template>
          <template v-slot:header>
            <mv-form-item>
              <mv-form-input
                v-model="filters.search"
                icon="search"
                placeholder="Rechercher..."
              />
            </mv-form-item>
            <mv-form-item>
              <mv-form-select
                v-model="filters.select"
                placeholder="Filtre spécifique..."
              ></mv-form-select>
            </mv-form-item>
          </template>
          <template v-slot:expand="{ row }">
            <p class="no-margin text-bold">
              <a v-text="row.title"></a>
            </p>
            <p
              class="no-margin text-small text-secondary"
              v-text="row.subtitle"
            ></p>
          </template>
          <mv-table-column
            prop="date"
            date
            label="Date"
            width="120"
            align="left"
            sortable
          ></mv-table-column>
          <mv-table-column prop="title" label="Titre">
            <template v-slot:header="{ column }">
              <mv-form-input
                v-model="filters.search"
                icon="search"
                :placeholder="column.title"
              />
            </template>
          </mv-table-column>
          <mv-table-column
            prop="date"
            datetime="YYYY-MM-DD / HH:mm:ss"
            label="Date et heure"
            width="180"
          ></mv-table-column>
          <mv-table-column
            prop="date"
            ago
            label="Depuis"
            width="140"
          ></mv-table-column>
          <mv-table-column label="Actions" align="right" width="240">
            <template v-slot:default="{ row }">
              <mv-table-action icon="eye" @click="alert('view ' + row.title)"
                >Détails</mv-table-action
              >
              <mv-table-action
                icon="pencil"
                @click="alert('edit ' + row.title)"
              ></mv-table-action>
              <mv-table-action @click="alert('edit ' + row.title)">
                <template v-slot:menu>
                  <mv-drop-down-action
                    icon="eye"
                    @click="alert('view ' + row.title)"
                    >Détails de l'élément</mv-drop-down-action
                  >
                  <mv-drop-down-action
                    icon="pencil"
                    @click="alert('edit ' + row.title)"
                    >Modifier cet élément</mv-drop-down-action
                  >
                  <mv-drop-down-action
                    divided
                    danger
                    icon="trash"
                    @click="alert('delete ' + row.title)"
                    >Supprimer cet élément</mv-drop-down-action
                  >
                </template>
              </mv-table-action>
            </template>
          </mv-table-column>
        </mv-table>
      </mv-panel>
    </mv-form>
  </mv-content-layout>
</template>

<script>
export default {
  name: "TableComplex",
  data() {
    return {
      checked: [[], []],
      filters: {
        page: 1,
        limit: 10,
      },
      table: [
        [
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre",
          },
          {
            date: new Date(2019, 1, 15, 3, 4, 5),
            title: "Title 2",
            subtitle: "Test sous-titre 2",
          },
          {
            date: new Date(2019, 2, 4, 5, 6, 7),
            title: "Title 3",
            subtitle: "Test sous-titre 3",
          },
          { date: new Date(2019, 1, 24, 10, 11, 12), title: "Title 5" },
          { date: new Date(2019, 1, 17, 22, 23, 25), title: "Title 4" },
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre",
          },
          {
            date: new Date(2019, 1, 15, 3, 4, 5),
            title: "Title 2",
            subtitle: "Test sous-titre 2",
          },
          {
            date: new Date(2019, 2, 4, 5, 6, 7),
            title: "Title 3",
            subtitle: "Test sous-titre 3",
          },
          { date: new Date(2019, 1, 24, 10, 11, 12), title: "Title 5" },
          { date: new Date(2019, 1, 17, 22, 23, 25), title: "Title 4" },
        ],
        [
          {
            date: new Date(2019, 1, 15, 3, 4, 5),
            title: "Title 2",
            subtitle: "Test sous-titre 2",
          },
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre",
          },
          {
            date: new Date(2019, 1, 3, 1, 2, 3),
            title: "Title",
            subtitle: "Test sous-titre",
          },
          { date: new Date(2019, 1, 17, 22, 23, 25), title: "Title 4" },
        ],
      ],
    };
  },
  computed: {
    selected() {
      return this.checked.reduce(
        (total, selection) => [...total, ...selection],
        []
      );
    },
  },
  methods: {
    alert(txt) {
      window.alert(txt);
    },
  },
};
</script>
