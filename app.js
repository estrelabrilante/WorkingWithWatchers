//example for listening to key stroke
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // name property with every key stroke.
      name: "",
      lastName: "",
      //   fullName: "",
    };
  },
  //Alternative to computed properties
  //Two watch method since there is two changes
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    //whenever name changes
    // name() {
    //   this.fullName = this.name + "" + "Varghese";
    // },
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + "" + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     // this.fullName = value + " " + this.name;
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
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
