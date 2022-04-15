let min = document.getElementById("min").innerText; //* '0 GB';
let max = document.getElementById("max").innerText; //* '1000 GB';

let storage = {};

const checkUsage = () => {
  let usage = document.getElementById("usage").innerText; //* '815 GB'
  storage.usage = usage;
};

const checkRest = () => {
  let rest = document.getElementById("rest").innerText; //* 185;
  storage.rest = rest;
};

const usageWarning = (() => {
  checkUsage();
  checkRest();
  if (storage.rest < 200) {
    console.info("almost full space");
  }
})();
