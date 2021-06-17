<template>
  <div class="test-print">
    <b-card class="flex" @click="startTimer()">
      <b-row>
        <b-col md="10">
          <b-card-text class="test-print__content">
            <span v-for="(e, i) in textParse" :key="i" :class="addActiveClass(i)">{{ e }}</span>
          </b-card-text>
        </b-col>
        <b-col md="2" class="test-print__stat">
          <div>
            <h4>Скорость</h4>
            <span>{{ calculatSpeed() }} зн./мин</span>
          </div>
          <div>
            <h4>Точность</h4>
            <span>{{ calculatAccuracy() }} %</span>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "TrainerPrint",
  created() {
    this.$store.dispatch("fetchText");
  },
  data() {
    return {
      print: false, // Работает ли тренажера
      counter: 0, // Кол-во правильно введённых символов
      errorCountr: 0, // Кол-во не правильно введённых символов
      totalLetter: 0, // Всего символов в тексте
      timer: 0, // Время на тренажере
      letterRight: "" // Символ который нужно ввести
    };
  },
  mounted() {
    this.$swal({
      title: "Вы готовы начать ?",
      icon: "question",
      confirmButtonColor: "#28a745",
      confirmButtonText: "Старт",
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(() => this.startPrint());

    // Прослушка событий клавиатуры для тренажера.
    window.addEventListener("keydown", e => {
      if (e.key.length === 1 && this.print) {
        if (e.key === this.letterRight) {
          this.counter++;

          if (this.counter === this.totalLetter) {
            let resultTest = {
              accuracy: this.calculatAccuracy(),
              speed: this.calculatSpeed()
            };
            this.$router.push({ name: "TestResult", params: { resultTest } });
          }

          this.letterRight = this.textParse[this.counter];
        } else {
          this.errorCountr++;
        }
      }
    });
  },
  computed: {
    textParse() {
      if (this.$store.state.trainer.testText.length) {
        return this.$store.state.trainer.testText[0].split("");
      }
      return [];
    }
  },
  methods: {
    addActiveClass(i) {
      if (i === this.counter) {
        return "test-print__content_active";
      }
    },
    startTimer() {
      if (this.print) {
        this.timer++;
        setTimeout(this.startTimer, 1000);
      }
    },
    startPrint() {
      this.letterRight = this.textParse[0];
      this.totalLetter = this.textParse.length;
      this.print = true;
      this.startTimer();
    },
    endPrint() {
      this.print = false;
      this.counter = 0;
      this.errorCountr = 0;
    },
    calculatAccuracy() {
      let accuracy = 100 - this.errorCountr / this.totalLetter;
      accuracy === 100 ? Math.round(accuracy) : accuracy.toFixed(1);

      return accuracy ? accuracy.toFixed(2) : 100;
    },
    calculatSpeed() {
      let speed = Math.round(this.counter / (this.timer / 60));
      return speed ? speed : 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.test-print {
  padding-top: 30px;
  &__content {
    float: left;
    font-size: 21px;
    line-height: 32px;
    font-size: 21px;
    color: #5c5c5c;
    &_active {
      color: #fff;
      background-color: #5bc538;
    }
  }

  &__stat {
    h4 {
      color: #b5bbc2;
    }
    span {
      color: #67defd;
      font-size: 20px;
      font-weight: 700px !important;
    }
  }
}
</style>
