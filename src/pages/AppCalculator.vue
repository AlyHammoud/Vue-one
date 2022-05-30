<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>

      <p
        class="text-1xl text-right my-10 mt-4 w-40 h-10 overflow-y-hidden overflow-x-scroll"
        style="direction: rtl"
      >
        {{ currentNumber }}
      </p>
      <div class="h-5">
        <small v-if="selectedOperation"
          >{{ prevNumber }} {{ selectedOperation }} {{ currentNumber }}</small
        >
      </div>

      <div class="grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          *
        </button>
        <button @click="pressed('0')" class="h-10 p-2 border rounded shadow">
          0
        </button>
        <button @click="pressed('C')" class="h-10 p-2 border rounded shadow">
          C
        </button>
        <button
          @click="pressed('=')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="w-10 h-10 p-2 border rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";

export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const currentNumber = ref("");
    const prevNumber = ref("");
    const selectedOperation = ref("");
    const numbers = ["1", "3", "2", "4", "5", "6", "7", "8", "9", "0"];

    const pressed = (value) => {
      if (value === "=") calculate();
      else if (value === "C") clear();
      else if (operations.includes(value)) applyOpertion(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    const appendNumber = (value) => {
      currentNumber.value = currentNumber.value + value;
    }

    const applyOpertion = (value) => {
      calculate();

      prevNumber.value = currentNumber.value;
      currentNumber.value = "";

      selectedOperation.value = value;
    }

    const calculate = () => {
      if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "-") sub();
      else if (selectedOperation.value === "+") add();
      else if (selectedOperation.value === "/") divide();

      prevNumber.value = "";
      selectedOperation.value = "";
    }

    const multiply = () => currentNumber.value = prevNumber.value * currentNumber.value;

    const divide = () => currentNumber.value = prevNumber.value / currentNumber.value;
    

    const sub = () => currentNumber.value = prevNumber.value - currentNumber.value;

    const add = () => currentNumber.value = +prevNumber.value + +currentNumber.value;
      //currentNumber.value = Number(prevNumber.value) + Number(currentNumber.value);
      //or

    const clear = () => {
      currentNumber.value = "";
      prevNumber.value = "";
      selectedOperation.value = "";
    };

    function handleKeyDown(e) {
      //console.log(e.key);
      pressed(e.key);
      if (e.key === "Enter") calculate();
    }

    useWindowEvent(handleKeyDown)

    // onMounted(() => window.addEventListener("keydown", handleKeyDown));

    // onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));

    return {
      currentNumber,
      prevNumber,
      selectedOperation,
      pressed,
    };
  },
};
</script>

<style></style>
