// @ts-nocheck
/* eslint-disable */

class MyTestClass {
  log() {
    console.log(1);
  }
};
async function reg(...args) {
  await 1;
  for (let i = 0; i < 10; i++) await 2;
  await 3;
  console.log(new MyTestClass())
}
const spread = [...[1,2,3], 3, 2, 1];
reg(...spread);
new MyTestClass().log();
