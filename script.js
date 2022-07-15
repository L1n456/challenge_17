// Fetch Json from data.json
const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    }
    )
    .catch(error => console.log(error));

let chartContainer = document.querySelector('.chart-container');

//map through data and populate chart
data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        const height = item.amount/7;
        const mb = height + 1;
        let value = "";
        if (item.day === "wed") {
            value =`<div class="chart-value higher" style="--height:${height}em"></div>`;
        }else{
            value= `<div class="chart-value" style="--height:${height}em"></div>`;
        }
        chart.innerHTML = `<div class="chart-wrapper">
                            ${value}
                            <div class="chart-active" style="--mb:${mb}em">${item.amount}</div>
                           </div>
                           <div class="chart-title">${item.day}</div>`;
        chartContainer.appendChild(chart);                  
    })
})
