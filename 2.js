const m = () => Math.random() >=0.5;
console.log(m())

//=================

// const isDay = (date)=> date.getDay()%6!==0;

// console.log(isDay(new Date(2022,0,0)))

const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 0, 11)));
console.log(isWeekday(new Date(2021, 0, 10)));