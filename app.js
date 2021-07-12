const btn = document.querySelector('.btn');
const numsP = document.querySelector('.nums');
let nums = [];

btn.addEventListener('click', () => {
  if(nums.length !== 0) {
    nums = []
  }
  for(i = 0; i < 6; i++) {
    let randNum = Math.floor(Math.random() * 53 ) + 1
    nums.push(randNum);
  }
  numsP.textContent = nums.join(' ');
});