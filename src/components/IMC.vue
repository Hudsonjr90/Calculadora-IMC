<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="left_collumn">
        <v-row justify="center">
          <v-card-title> Calculadora IMC </v-card-title>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="name" label="Nome" outlined></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model.number="weight"
              label="Peso (kg)"
              type="number"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model.number="height"
              label="Altura (cm)"
              type="number"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn @click="calculateBMI" color="primary">Calcular IMC</v-btn>
          </v-col>
          <v-col cols="12" v-if="bmiMessage">
            <v-alert :type="bmiAlertType" dismissible>
              {{ name }}: {{ bmiMessage }}
            </v-alert>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <img
          src="/fundo.png"
          alt="background"
          class="backgroundImg"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

type AlertType = "success" | "info" | "warning" | "error" | undefined;

export default defineComponent({
  data() {
    return {
      name: "",
      weight: ref<number | null>(null),
      height: ref<number | null>(null),
      bmiMessage: ref<string>(""),
      bmiAlertType: undefined as AlertType,
    };
  },
  methods: {
    calculateBMI() {
      if (this.weight && this.height) {
        const heightInMeters = this.height;
        const bmi = this.weight / (heightInMeters * heightInMeters);
        const bmiRounded = Math.round(bmi * 100) / 100;
        const bmiString = bmiRounded.toFixed(2).replace(".", ",");

        if (bmi < 18.5) {
          this.bmiMessage = `seu IMC é ${bmiString}. Você está abaixo do peso.`;
          this.bmiAlertType = "warning";
        } else if (bmi >= 18.5 && bmi < 24.9) {
          this.bmiMessage = `seu IMC é ${bmiString}. Você está com peso normal.`;
          this.bmiAlertType = "success";
        } else if (bmi >= 25 && bmi < 29.9) {
          this.bmiMessage = `seu IMC é ${bmiString}. Você está com sobrepeso.`;
          this.bmiAlertType = "warning";
        } else {
          this.bmiMessage = `seu IMC é ${bmiString}. Você está com obesidade.`;
          this.bmiAlertType = "error";
        }
      } else {
        this.bmiMessage = "Por favor, insira um peso e uma altura válidos.";
        this.bmiAlertType = "error";
      }
    },
  },
});
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&family=Josefin+Sans:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap");
.v-container {
  max-width: 600px;
  margin: auto;
  padding-top: 20px;
}

.left_collumn{
  border: 1px solid ;
  border-radius: 20px;
}
.v-card-title{
  font-family: Baloo 2, sans-serif;
  font-size: 2.5rem !important;
  font-weight: 700;

}

.backgroundImg {
  max-width: 100%;
  height: auto;
}

</style>
