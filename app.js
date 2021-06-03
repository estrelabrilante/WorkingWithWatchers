//example for listening to key stroke
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // name property with every key stroke.
      name: "",
      fullName: "",
    };
  },
  //Alternative to computed properties
  watch: {
    //whenever name changes
    // name() {
    //   this.fullName = this.name + "" + "Varghese";
    // },
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + "" + "Varghese";
      }
    },
  },
  computed: {
    // fullName() {
    //   console.log("Running again...");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Varghese";
    // },
  },
  methods: {
    outputFullName() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Varghese";
    },
    setName(event) {
      this.name = event.target.value;
    },
    increment(input) {
      this.counter = this.counter + input;
    },
    decrement(number) {
      this.counter = this.counter - number;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
