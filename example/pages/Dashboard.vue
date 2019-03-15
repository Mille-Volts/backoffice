<template>
  <mv-content-layout :with-header="false">
    <h1>Tableau de bord</h1>

    <!-- Stats 1 -->
    <row :gutter="20" class="block">
      <column :sm="8">
        <mv-panel>
          <mv-stat vertical badge="+14%" badge-type="success" icon="desktop">
            <strong>
              64
              <small>/ 81</small>
            </strong>
            éléments en cours
          </mv-stat>
        </mv-panel>
      </column>
      <column :sm="8">
        <mv-panel>
          <mv-stat vertical icon="cup" badge="-12%" badge-type="danger">
            <strong>
              45%
              <small>- 14 unités</small>
            </strong>
            description de la statistique
          </mv-stat>
        </mv-panel>
      </column>
      <column :sm="8">
        <mv-panel>
          <mv-stat vertical icon="flag-alt-2" primary>
            <strong>1 423,00 €</strong>
            sur le dernier mois
          </mv-stat>
        </mv-panel>
      </column>
    </row>

    <!-- Quick actions -->
    <row :gutter="20" class="block">
      <column :sm="8">
        <mv-panel>
          <mv-stat icon="flag"></mv-stat>
          <hr>
          <mv-stat icon="cup" badge="-12%" badge-type="danger"></mv-stat>
          <hr>
          <mv-stat primary>
            <strong>1 423,00 €</strong>
          </mv-stat>
        </mv-panel>
      </column>
      <column :sm="8">
        <mv-panel>
          <mv-quick-action icon="desktop" success>
            <h4>Élément de menu</h4>
            <p>Description de l'élément de menu qui permet d'accéder rapidement à une section</p>
            <mv-button primary>Lien vers un élément</mv-button>
          </mv-quick-action>
        </mv-panel>
      </column>
      <column :sm="8">
        <mv-panel>
          <mv-quick-action icon="exchange-vertical" primary>
            <h4>Changement de mode</h4>
            <p>
              Basculer
              <strong>en un clic</strong> l'affichage du menu de gauche à haut et inversement, effet wow garanti !
            </p>
            <mv-button
              secondary
              @click="application.layout = application.layout === 'vertical'? 'horizontal': 'vertical'"
            >Basculer !</mv-button>
          </mv-quick-action>
        </mv-panel>
      </column>
    </row>

    <!-- Panels -->
    <row :gutter="20" class="block">
      <column :sm="12">
        <mv-panel title="Titre du panel">
          <template v-slot:actions>
            <el-radio v-model="application.layout" label="vertical">Vertical</el-radio>
            <el-radio v-model="application.layout" label="horizontal">Horizontal</el-radio>
          </template>
          <mv-stat icon="cup" badge="-12%" badge-type="danger">
            <strong>
              45%
              <small>- 14 unités</small>
            </strong>
            description de la statistique
          </mv-stat>
          <hr>
          <mv-stat icon="flag-alt-2" primary>
            <strong>1 423,00 €</strong>
            sur le dernier mois
          </mv-stat>
        </mv-panel>
      </column>
      <column :sm="12">
        <mv-panel title="Titre du panel">
          <template v-slot:actions>
            <el-select v-model="application.layout">
              <el-option value="vertical" label="Vertical"></el-option>
              <el-option value="horizontal" label="Horizontal"></el-option>
            </el-select>
          </template>
          <mv-stat :badge="29" badge-type="success" :badge-max="10">
            <strong>1 423,00 €</strong>
            sur le dernier mois
          </mv-stat>
          <hr>
          <p>Test paragraphe</p>
        </mv-panel>
      </column>
    </row>
  </mv-content-layout>
</template>

<script>
export default {
  inject: ["application"]
};
</script>
