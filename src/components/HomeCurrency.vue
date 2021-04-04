<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cur of currencies" :key="cur">
              <td>{{ cur }}</td>
              <td>{{ getCurrency(cur) }}</td>
              <td>{{ date | date("date") }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rates: Object,
    date: Date,
  },
  data() {
    return {
      currencies: ["USD", "UAH", "EUR", "PLN", "RUB"],
    };
  },
  computed: {
    base() {
      return 1 / this.rates["USD"] / this.rates["EUR"];
    },
  },
  methods: {
    getCurrency(currency) {
      return (this.base * this.rates[currency]).toFixed(2);
    },
  },
};
</script>
