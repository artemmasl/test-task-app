<template>
  <div class="test-print">
    <b-card class="flex" @click="startTimer()">
      <b-row>
        <b-col md="10">
          <b-card-text class="mainTxt">
            <span
              v-for="(e, i) in textParse"
              :key="i"
              :class="addActiveClass(i)"
              >{{ e }}</span
            >
          </b-card-text>
        </b-col>
        <b-col md="2" class="mainStat">
          <div>
            <span>Скорость</span><br />
            <span>{{ Math.round(counter/(timer/60)) }} зн./мин</span>
          </div>
          <div>
            <span>Точность</span> <br />
            <span>0</span>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <b-modal id="modal" hide-footer hide-header>
      <h1>Приготовься печатать. Поехали!</h1>
      <b-button class="mt-3" variant="primary" @click="startPrint()">
        Начать печатать!
      </b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Test",
  created() {
    this.$store.dispatch("fetchText");
  },
  data() {
    return {
      print: false,
      counter: 0,
      errorCountr: 0,
      timer: 0,
      letterRight: "",
    };
  },
  mounted() {
    this.$bvModal.show("modal");
    window.addEventListener("keydown", (e) => {
      if (e.key === this.letterRight && this.print) {
        this.counter++;
        this.letterRight = this.textParse[this.counter];
      }
    });
  },
  computed: {
    textParse() {
      if (this.$store.state.testText[0]) {
        return this.$store.state.testText[0].split("");
      }
      return [];
    },
  },
  methods: {
    addActiveClass(i) {
      if (i === this.counter) {
        return "wgreen";
      }
    },
    startTimer() {
      if (this.print) {
        this.timer++;
        setTimeout(this.startTimer, 1000);
      }
    },
    startPrint() {
      this.$bvModal.hide("modal");
      this.letterRight = this.textParse[0]
      this.print = true;
      this.startTimer();
    },
    endPrint() {
      this.print = false;
      this.counter = 0;
      this.errorCountr = 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.test-print {
  padding-top: 30px;
}
.mainTxt {
  float: left;
  font-size: 21px;
  line-height: 32px;
  font-size: 21px;
  color: #5c5c5c;

  .wgreen {
    color: #fff;
    background-color: #5bc538;
  }
}
</style>
