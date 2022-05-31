<template>
  <v-row id="faq" justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(question, i) in questions" :key="i">
        <v-expansion-panel-header>{{
          question.title
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ question.description }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import Questions from "@/data/Questions.data";

export default {
  data() {
    return {
      questions: Questions,
    };
  },
};
</script>

<style scoped lang="scss">
.row {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  padding: 50px;
  .v-expansion-panels {
    .v-expansion-panel {
      background: #f5f7fa;
      box-shadow: none;
      margin-top: 10px;
      &::before {
        box-shadow: none;
      }
      &::after {
        position: static;
      }
      .v-expansion-panel-header {
        font-weight: bold;
      }
      .v-expansion-panel-content {
        font-size: 12px;
      }
    }
  }
}
</style>
