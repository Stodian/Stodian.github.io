// Function to generate random data for the graph
function generateRandomData() {
    const data = [];
    for (let i = 0; i < 365; i++) { // 365 days in a year
        data.push(Math.floor(Math.random() * 5)); // Random value between 0 and 4
    }
    return data;
}

// Function to render the graph with randomly generated data
function renderGraph() {
    const graphs = document.querySelectorAll('.contribution-graph');

    graphs.forEach(graph => {
        const graphCells = graph.querySelector('.graph');
        const data = generateRandomData();

        // Clear existing cells
        graphCells.innerHTML = '';

        // Populate cells with data
        data.forEach(value => {
            const cell = document.createElement('div');
            cell.classList.add('graph-cell');
            cell.classList.add(`color-${value}`);
            graphCells.appendChild(cell);
        });

        // Generate legend
        renderLegend(graph);
    });
}

// Function to generate legend
function renderLegend(graph) {
    const legend = graph.querySelector('.legend');
    legend.innerHTML = '';

    const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
    const texts = ['Less', '', '', '', 'More'];

    colors.forEach((color, index) => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = color;

        const legendText = document.createElement('div');
        legendText.textContent = texts[index];

        legendItem.appendChild(colorBox);
        legendItem.appendChild(legendText);
        legend.appendChild(legendItem);
    });
}

// Call renderGraph function to initially render the graphs
renderGraph();
