const btn = document.querySelector('.btn');
const numsP = document.querySelector('.nums');
let nums = [];

btn.addEventListener('click', () => {
  if(nums.length !== 0) {
    nums = []
  }
  while(nums.length < 6) {
    let randNum = Math.floor(Math.random() * 53 ) + 1
    if(nums.indexOf(randNum) === -1) nums.push(randNum);
  }
  numsP.textContent = nums.join(' ');
});