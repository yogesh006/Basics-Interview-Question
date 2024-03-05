

/***
 * 
 * HTML
 * <input type = "range" id="inputHandler" value="10" />
<div class ="piechart" style="--percentage:10%"></div>


 * CSS
 * input{
  font-size:20px;
  margin:20px;
  width:400px;
}

.piechart{
  width:200px;
  height:200px;
  margin:20px 110px;
  background-image:conic-gradient(green var(--percentage),lightgreen 0);
  border-radius:50%;
}


JS
const pieChart = document.querySelector('.piechart');
document.querySelector('#inputHandler').addEventListener("input",(e)=>{
  pieChart.style=`--percentage: ${e.target.value}%`  
})
 */