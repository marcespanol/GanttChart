
window.addEventListener('load', createChart);
window.addEventListener('resize', createChart);

function createChart(e) {
    const days = document.querySelectorAll('.chart-values li');
    const tasks = document.querySelectorAll('.chart-bars li');

    const daysArray = [...days];

    tasks.forEach(task => {
        const duration = task.dataset.duration.split('-');

        const startDay = duration[0];
        const endDay = duration[1];
        let left= 0,
            width = 0;

        if (startDay.endsWith("½")) {
            const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
            left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
        } else {
            const filteredArray = daysArray.filter(day => day.textContent == startDay);
            left = filteredArray[0].offsetLeft;
        }

        if (endDay.endsWith("½")) {
            const filteredArray= daysArray.filter(day => day.textContent == endDay.slice(0, -1));
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
        } else {
            const filteredArray= daysArray.filter(day => day.textContent == endDay);
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
        }

        task.style.left = `${left}px`;
        task.style.width = `${width}px`;

        if (e.type == 'load') {
            task.style.backgroundColor = task.dataset.color;
            task.style.opacity = 1;
        }
        
    });
}

