document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to each box
    document.getElementById("box1").addEventListener("click", function () {
        selectBox("box1", "chart1.html");
        displayChart1();
    });

    document.getElementById("box2").addEventListener("click", function () {
        selectBox("box2", "chart2.html");
        displayChart2();
    });

    document.getElementById("box3").addEventListener("click", function () {
        selectBox("box3", "chart3.html");
        displayChart3();
    });
});

function selectBox(boxId, chartUrl) {
    const allBoxes = document.getElementsByClassName("box");
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].classList.remove("selected-box");
    }
    document.getElementById(boxId).classList.add("selected-box");
    loadChartContent(chartUrl);
}

function loadChartContent(url) {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    document.getElementById("displayArea").innerHTML = "";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    document.getElementById("displayArea").appendChild(iframe);
}

// Add tooltips
tooltip = d3.select("#tooltipArea")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

function chart2MouseOver(d) {
    console.log(d)
    tooltip.transition().duration(200).style("opacity", 0.9);
    tooltip.html(`<strong>${d.target.__data__.league}</strong><br>Revenue per Player: ${d.target.__data__.revenuePerPlayer.toLocaleString()}<br>League Avg. Salary: $${d.target.__data__.avgPlayerSalary.toLocaleString()}`);
}

function chart3MouseOver(d) {
    console.log(d)
    tooltip.transition().duration(200).style("opacity", 0.9);
    tooltip.html(`<strong>${d.target.__data__.league}</strong><br>Viewership: ${d.target.__data__.annualCableViewership.toLocaleString()}<br>League Avg. Salary: $${d.target.__data__.avgPlayerSalary.toLocaleString()}`);
}

function handleMouseOut(d) {
    tooltip.transition().duration(500).style("opacity", 0);
}

function displayChart1() {
    chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = ""; 
    wnbaData = [
        {name: "Breanna Stewart",reboundsPerGame: 7.6,assistsPerGame: 2.9,pointsPerGame: 21.8, salary: 228094},
        {name: "Kelsey Plum",reboundsPerGame: 2.7,assistsPerGame: 5.1,pointsPerGame: 20.2, salary: 180250},
        {name: "Skylar Diggins-Smith",reboundsPerGame: 4,assistsPerGame: 5.5,pointsPerGame: 19.7, salary: 227900},
        {name: "Arike Ogunbowale",reboundsPerGame: 3.3,assistsPerGame: 3.6,pointsPerGame: 19.7, salary: 72141},
        {name: "Kelsey Mitchell",reboundsPerGame: 1.9,assistsPerGame: 4.2,pointsPerGame: 18.4, salary: 200000},
        {name: "Nneka Ogwumike",reboundsPerGame: 6.6,assistsPerGame: 2,pointsPerGame: 18.1, salary: 196267},
        {name: "Elena Delle Donne",reboundsPerGame: 6.3,assistsPerGame: 2.3,pointsPerGame: 17.2, salary: 227900},
        {name: "Diana Taurasi",reboundsPerGame: 3.4,assistsPerGame: 3.8,pointsPerGame: 16.7, salary: 228094},
        {name: "Natasha Cloud",reboundsPerGame: 3.6,assistsPerGame: 7,pointsPerGame: 10.7,salary: 185000},
        {name: "Courtney Vandersloot",reboundsPerGame: 3.9,assistsPerGame: 6.5,pointsPerGame: 11.8,salary: 195000},
        {name: "Sabrina Ionescu",reboundsPerGame: 7.1,assistsPerGame: 6.3,pointsPerGame: 17.4,salary: 76297},
        {name: "Chelsea Gray",reboundsPerGame: 3.2,assistsPerGame: 6.1,pointsPerGame: 13.7,salary: 206267},
        {name: "Sue Bird",reboundsPerGame: 1.9,assistsPerGame: 6,pointsPerGame: 7.8,salary: 72141},
        {name: "Jordin Canada",reboundsPerGame: 2.3,assistsPerGame: 5.5,pointsPerGame: 9.2,salary: 98000},
        {name: "Moriah Jefferson",reboundsPerGame: 2.4,assistsPerGame: 4.7,pointsPerGame: 10.4,salary: 67141},
        {name: "Sylvia Fowles",reboundsPerGame: 9.8,assistsPerGame: 1.2,pointsPerGame: 14.4,salary: 200000},
        {name: "A'ja Wilson",reboundsPerGame: 9.4,assistsPerGame: 2.1,pointsPerGame: 19.5,salary: 196267},
        {name: "Candace Parker",reboundsPerGame: 8.6,assistsPerGame: 4.5,pointsPerGame: 13.2,salary: 195000},
        {name: "Jonquel Jones",reboundsPerGame: 8.6,assistsPerGame: 1.8,pointsPerGame: 14.6,salary: 205000},
        {name: "Alyssa Thomas",reboundsPerGame: 8.2,assistsPerGame: 6.1,pointsPerGame: 13.4,salary: 206000},
        {name: "NaLyssa Smith",reboundsPerGame: 7.9,assistsPerGame: 1.4,pointsPerGame: 13.5,salary: 72141},
        {name: "Jessica Shepard",reboundsPerGame: 7.4,assistsPerGame: 3,pointsPerGame: 8.1,salary: 60471},
        {name: "Natasha Howard",reboundsPerGame: 7.3,assistsPerGame: 2.3,pointsPerGame: 15.1,salary: 221450},
        {name: "Tina Charles",reboundsPerGame: 7.3,assistsPerGame: 2,pointsPerGame: 14.8,salary: 34285},
    ];
    
    nbaData = [
        {name: "Shai Gilgeous-Alexander",reboundsPerGame: 4.8,assistsPerGame: 5.5,pointsPerGame: 31.4,salary: 33386850},
        {name: "Jayson Tatum",reboundsPerGame: 8.8,assistsPerGame: 4.6,pointsPerGame: 30.1,salary: 32600060},
        {name: "Donovan Mitchell",reboundsPerGame: 4.3,assistsPerGame: 4.4,pointsPerGame: 28.3,salary: 33162030},
        {name: "Kyrie Irving",reboundsPerGame: 5.1,assistsPerGame: 5.5,pointsPerGame: 27.1,salary: 37037037},
        {name: "Jaylen Brown",reboundsPerGame: 6.9,assistsPerGame: 3.5,pointsPerGame: 26.6,salary: 31830357},
        {name: "James Harden",reboundsPerGame: 6.1,assistsPerGame: 10.7,pointsPerGame: 21,salary: 35640000},
        {name: "Trae Young",reboundsPerGame: 3,assistsPerGame: 10.2,pointsPerGame: 26.2,salary: 40064220},
        {name: "Chris Paul",reboundsPerGame: 4.3,assistsPerGame: 8.9,pointsPerGame: 13.9,salary: 30800000},
        {name: "Ja Morant",reboundsPerGame: 5.9,assistsPerGame: 8.1,pointsPerGame: 26.2,salary: 34005250},
        {name: "Luka Doncic",reboundsPerGame: 8.6,assistsPerGame: 8,pointsPerGame: 32.4,salary: 40064220},
        {name: "Darius Garland",reboundsPerGame: 2.7,assistsPerGame: 7.8,pointsPerGame: 21.6,salary: 34005250},
        {name: "Russell Westbrook",reboundsPerGame: 5.8,assistsPerGame: 7.5,pointsPerGame: 15.9,salary: 3835738},
        {name: "Jrue Holiday",reboundsPerGame: 5.1,assistsPerGame: 7.4,pointsPerGame: 19.3,salary: 36861707},
        {name: "Damian Lillard",reboundsPerGame: 4.8,assistsPerGame: 7.3,pointsPerGame: 32.2,salary: 45640084},
        {name: "Domantas Sabonis",reboundsPerGame: 12.3,assistsPerGame: 7.3,pointsPerGame: 19.1,salary: 30600000},
        {name: "Nikola Jokic",reboundsPerGame: 11.8,assistsPerGame: 9.8,pointsPerGame: 24.5,salary: 47607350},
        {name: "Giannis Antetokounmpo",reboundsPerGame: 11.8,assistsPerGame: 5.7,pointsPerGame: 31.1,salary: 45640084},
        {name: "Rudy Gobert",reboundsPerGame: 11.6,assistsPerGame: 1.2,pointsPerGame: 13.4,salary: 41000000},
        {name: "Nikola Vucevic",reboundsPerGame: 11,assistsPerGame: 3.2,pointsPerGame: 17.6,salary: 18518519},
        {name: "Clint Capela",reboundsPerGame: 11,assistsPerGame: 0.9,pointsPerGame: 12,salary: 20616000},
        {name: "Joel Embiid",reboundsPerGame: 10.2,assistsPerGame: 4.2,pointsPerGame: 33.1,salary: 47607350},
        {name: "Jonas Valanciunas",reboundsPerGame: 10.2,assistsPerGame: 1.8,pointsPerGame: 14.1,salary: 15435000},
        {name: "Julius Randle",reboundsPerGame: 10,assistsPerGame: 4.1,pointsPerGame: 25.1,salary: 28226880},
        {name: "Deandre Ayton",reboundsPerGame: 10,assistsPerGame: 1.7,pointsPerGame: 18,salary: 32459438},
    ];

    const svgWidth = 800;
    const svgHeight = 1000;
    const margin = { top: 10, right: 30, bottom: 90, left: 50 };
    const chartWidth = svgWidth - margin.left - margin.right;
    const chartHeight = svgHeight - margin.top - margin.bottom;
    const salaryTextSize = "10px";    

    const dropdownOptions = [
        { value: "pointsPerGame", text: "Points per Game" },
        { value: "reboundsPerGame", text: "Rebounds per Game" },
        { value: "assistsPerGame", text: "Assists per Game" }
    ];
    selectedValue = "pointsPerGame";
    const dropdownMenu = d3.select("#displayArea")
        .append("select")
        .attr("id", "dropdownMenu");
    
    dropdownMenu.selectAll("option")
        .data(dropdownOptions)
        .enter()
        .append("option")
        .attr("value", d => d.value)
        .text(d => d.text);
    
    dropdownMenu.on("change", function () {
        selectedValue = this.value;
        updateChart(selectedValue);
    });

    const wnbaSvg = d3.select("#chartContainer")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);
    
    const nbaSvg = d3.select("#chartContainer")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    const updateChart = (selectedValue) => {
        // Clear WNBA chart before updating
        wnbaSvg.selectAll("*").remove();
        // Clear NBA chart before updating
        nbaSvg.selectAll("*").remove();
        wnbaData = wnbaData.sort((a, b) => b[selectedValue] - a[selectedValue]).slice(0, 10);

        const wnbaBars = wnbaSvg.selectAll(".bar")
            .data(wnbaData);

        // Y-scale for both charts
        const yScale = d3.scaleLinear()
            .domain([0, d3.max([...wnbaData, ...nbaData], d => d[selectedValue])])
            .range([chartHeight, 0]);

        // X-scale for WNBA chart
        const wnbaXScale = d3.scaleBand()
            .domain(wnbaData.map(d => d.name))
            .range([margin.left, chartWidth + margin.left])
            .padding(0.1);

        wnbaBars.exit().remove();
        
        wnbaBars.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => wnbaXScale(d.name)) 
            .attr("y", chartHeight)
            .attr("width", wnbaXScale.bandwidth()) 
            .attr("height", 0)
            .merge(wnbaBars)
            .transition()
            .duration(1000)
            .attr("x", d => wnbaXScale(d.name)) 
            .attr("y", d => yScale(d[selectedValue]))
            .attr("width", wnbaXScale.bandwidth()) 
            .attr("height", d => chartHeight - yScale(d[selectedValue]))
            .attr("fill", "#e86127");

        const wnbaSalaryText = wnbaSvg.selectAll(".salary")
            .data(wnbaData);

        wnbaSalaryText.enter()
            .append("text")
            .attr("class", "salary")
            .attr("x", d => wnbaXScale(d.name) + wnbaXScale.bandwidth() / 2) 
            .attr("y", d => yScale(d[selectedValue]) + 30)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .style("font-size", salaryTextSize) 
            .text(d => `$${d.salary.toLocaleString()}`);

        nbaData = nbaData.sort((a, b) => b[selectedValue] - a[selectedValue]).slice(0, 10);
        
        const nbaBars = nbaSvg.selectAll(".bar")
            .data(nbaData);
        
        // X-scale for NBA chart
        const nbaXScale = d3.scaleBand()
            .domain(nbaData.map(d => d.name))
            .range([margin.left, chartWidth + margin.left])
            .padding(0.1);
        
        nbaBars.exit().remove();

        nbaBars.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => nbaXScale(d.name)) 
            .attr("y", chartHeight)
            .attr("width", nbaXScale.bandwidth()) 
            .attr("height", 0)
            .merge(nbaBars)
            .transition()
            .duration(1000)
            .attr("x", d => nbaXScale(d.name)) 
            .attr("y", d => yScale(d[selectedValue]))
            .attr("width", nbaXScale.bandwidth()) 
            .attr("height", d => chartHeight - yScale(d[selectedValue]))
            .attr("fill", "#113468");

        // Add salary text inside the NBA bars
        const nbaSalaryText = nbaSvg.selectAll(".salary")
            .data(nbaData);

        nbaSalaryText.enter()
            .append("text")
            .attr("class", "salary")
            .attr("x", d => nbaXScale(d.name) + nbaXScale.bandwidth() / 2) 
            .attr("y", d => yScale(d[selectedValue]) + 30)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .style("font-size", salaryTextSize) 
            .text(d => `$${d.salary.toLocaleString()}`);


        wnbaSvg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(wnbaXScale))
            .selectAll("text")  
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", "rotate(-45)" );
     
        wnbaSvg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(yScale));
    
        nbaSvg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(d3.axisBottom(nbaXScale))
            .selectAll("text")  
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", "rotate(-45)" );
     
        nbaSvg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(yScale));
    };
    // Call the function initially with the default selected value
    updateChart("pointsPerGame");
}

function displayChart2() {
    chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = ""; 
    
    const svgWidth = 1600;
    const svgHeight = 1000;
    const margin = { top: 30, right: 110, bottom: 50, left: 110 };

    const svg = d3.select("#chartContainer")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    const data = [
        { league: "WNBA", revenuePerPlayer: 1388000, avgPlayerSalary: 113295 },
        { league: "NBA", revenuePerPlayer: 22000000, avgPlayerSalary: 8500000 },
        { league: "NFL", revenuePerPlayer: 7063679, avgPlayerSalary: 860000 },
        { league: "NHL", revenuePerPlayer: 5758000, avgPlayerSalary: 3500000 },
        { league: "MLS", revenuePerPlayer: 1379000, avgPlayerSalary: 438728 },
        { league: "MLB", revenuePerPlayer: 14400000, avgPlayerSalary: 4900000 },
    ];

    const checkboxContainer = d3.select("#displayArea")
        .append("div")
        .attr("class", "checkbox-container");


    data.forEach((d) => {
        const checkbox = checkboxContainer.append("label")
            .text(d.league)
            .append("input")
            .attr("type", "checkbox")
            .attr("class", "league-checkbox")
            .attr("value", d.league);
    
        if (d.league === "WNBA") {
            checkbox.property("checked", true); // Set the WNBA checkbox to checked by default
        }
        checkboxContainer.selectAll("label")
            .attr("class", "checkbox-label");
    });

    function handleCheckboxChange() {
        const selectedLeagues = [];

        d3.selectAll(".league-checkbox").each(function () {
            const checkbox = d3.select(this);
            if (checkbox.property("checked")) {
                selectedLeagues.push(checkbox.attr("value"));
            }
        });

        // Update the visibility of the dots based on selected leagues
        svg.selectAll("circle")
            .style("display", (d) => (selectedLeagues.includes(d.league) ? "block" : "none"));
        svg.selectAll(".label")
            .style("display", (d) => (selectedLeagues.includes(d.league) ? "block" : "none"));
    }

    d3.selectAll(".league-checkbox").on("change", handleCheckboxChange);

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.avgPlayerSalary)])
        .range([margin.left, svgWidth - margin.right]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.revenuePerPlayer)])
        .range([svgHeight - margin.bottom, margin.top]);

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.avgPlayerSalary))
        .attr("cy", d => yScale(d.revenuePerPlayer))
        .attr("r", 5)
        .attr("fill", d => (d.league === "WNBA" ? "#e86127" : "#113468"))
        .on("mouseover", chart2MouseOver)
        .on("mouseout", handleMouseOut);

    svg.selectAll(".label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", d => xScale(d.avgPlayerSalary) + 5) 
        .attr("y", d => yScale(d.revenuePerPlayer) - 5)
        .text(d => d.league)
        .attr("font-size", "10px")
        .attr("fill", "black")
        .attr("text-anchor", "start");


    const xAxis = d3.axisBottom(xScale).ticks(20);
    const yAxis = d3.axisLeft(yScale).ticks(20);

    svg.append("g")
        .attr("transform", `translate(0, ${svgHeight - margin.bottom})`)
        .call(xAxis);

    svg.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(yAxis);

    svg.append("text")
        .attr("x", svgWidth / 2)
        .attr("y", svgHeight - 10)
        .attr("text-anchor", "middle")
        .text("Average Player Salary");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -svgHeight / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .text("Revenue per Player");
    
    function calculateLinearRegression(data) {
        const xMean = d3.mean(data, d => d.avgPlayerSalary);
        const yMean = d3.mean(data, d => d.revenuePerPlayer);
    
        const numerator = data.reduce((acc, d) => acc + (d.avgPlayerSalary - xMean) * (d.revenuePerPlayer - yMean), 0);
        const denominator = data.reduce((acc, d) => acc + (d.avgPlayerSalary - xMean) ** 2, 0);
    
        const slope = numerator / denominator;
        const intercept = yMean - slope * xMean;
    
        return { slope, intercept };
    }
        
    // Calculate the linear regression coefficients
    const { slope, intercept } = calculateLinearRegression(data);
    
    // Define x and y coordinates of start and end points for the trend line
    const x1 = xScale(d3.min(data, d => d.avgPlayerSalary));
    const y1 = yScale(slope * d3.min(data, d => d.avgPlayerSalary) + intercept);
    const x2 = xScale(d3.max(data, d => d.avgPlayerSalary));
    const y2 = yScale(slope * d3.max(data, d => d.avgPlayerSalary) + intercept);
    
    svg.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", "grey")
        .style("stroke-dasharray", ("3, 3"))   
        .attr("stroke-width", 1);
    
    handleCheckboxChange()
}

function displayChart3() {
    chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = ""; 
    
    const svgWidth = 1600;
    const svgHeight = 1000;
    const margin = { top: 30, right: 110, bottom: 50, left: 110 };

    const svg = d3.select("#chartContainer")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    const data = [
        { league: "WNBA", annualCableViewership: 556184, avgPlayerSalary: 113295 },
        { league: "NBA", annualCableViewership: 1600000, avgPlayerSalary: 8500000 },
        { league: "NFL", annualCableViewership: 16700000, avgPlayerSalary: 860000 },
        { league: "NHL", annualCableViewership: 478000, avgPlayerSalary: 3500000 },
        { league: "MLS", annualCableViewership: 343000, avgPlayerSalary: 438728 },
        { league: "MLB", annualCableViewership:  1419000, avgPlayerSalary: 4900000 },
    ];

    const checkboxContainer = d3.select("#displayArea")
        .append("div")
        .attr("class", "checkbox-container");


    data.forEach((d) => {
        const checkbox = checkboxContainer.append("label")
            .text(d.league)
            .append("input")
            .attr("type", "checkbox")
            .attr("class", "league-checkbox")
            .attr("value", d.league);
    
        if (d.league === "WNBA") {
            checkbox.property("checked", true); // Set the WNBA checkbox to checked by default
        }
        checkboxContainer.selectAll("label")
            .attr("class", "checkbox-label");
    });

    function handleCheckboxChange() {
        const selectedLeagues = [];

        d3.selectAll(".league-checkbox").each(function () {
            const checkbox = d3.select(this);
            if (checkbox.property("checked")) {
                selectedLeagues.push(checkbox.attr("value"));
            }
        });

        // Update the visibility of the dots based on selected leagues
        svg.selectAll("circle")
            .style("display", (d) => (selectedLeagues.includes(d.league) ? "block" : "none"));
        svg.selectAll(".label")
            .style("display", (d) => (selectedLeagues.includes(d.league) ? "block" : "none"));
    }

    d3.selectAll(".league-checkbox").on("change", handleCheckboxChange);

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.avgPlayerSalary)])
        .range([margin.left, svgWidth - margin.right]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.annualCableViewership)])
        .range([svgHeight - margin.bottom, margin.top]);

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.avgPlayerSalary))
        .attr("cy", d => yScale(d.annualCableViewership))
        .attr("r", 5)
        .attr("fill", d => (d.league === "WNBA" ? "#e86127" : "#113468"))
        .on("mouseover", chart3MouseOver)
        .on("mouseout", handleMouseOut);

    svg.selectAll(".label")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", d => xScale(d.avgPlayerSalary) + 5) 
        .attr("y", d => yScale(d.annualCableViewership) - 5)
        .text(d => d.league)
        .attr("font-size", "10px")
        .attr("fill", "black")
        .attr("text-anchor", "start");


    const xAxis = d3.axisBottom(xScale).ticks(20);
    const yAxis = d3.axisLeft(yScale).ticks(20);

    svg.append("g")
        .attr("transform", `translate(0, ${svgHeight - margin.bottom})`)
        .call(xAxis);

    svg.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(yAxis);

    svg.append("text")
        .attr("x", svgWidth / 2)
        .attr("y", svgHeight - 10)
        .attr("text-anchor", "middle")
        .text("Average Player Salary");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -svgHeight / 2)
        .attr("y", 20)
        .attr("text-anchor", "middle")
        .text("Average Viewership per Game");
    
    function calculateLinearRegression(data) {
        const xMean = d3.mean(data, d => d.avgPlayerSalary);
        const yMean = d3.mean(data, d => d.annualCableViewership);
    
        const numerator = data.reduce((acc, d) => acc + (d.avgPlayerSalary - xMean) * (d.annualCableViewership - yMean), 0);
        const denominator = data.reduce((acc, d) => acc + (d.avgPlayerSalary - xMean) ** 2, 0);
    
        const slope = numerator / denominator;
        const intercept = yMean - slope * xMean;
    
        return { slope, intercept };
    }
        
    // Calculate the linear regression coefficients
    const { slope, intercept } = calculateLinearRegression(data);
    
    // Define x and y coordinates of start and end points for the trend line
    const x1 = xScale(d3.min(data, d => d.avgPlayerSalary));
    const y1 = yScale(slope * d3.min(data, d => d.avgPlayerSalary) + intercept);
    const x2 = xScale(d3.max(data, d => d.avgPlayerSalary));
    const y2 = yScale(slope * d3.max(data, d => d.avgPlayerSalary) + intercept);
    
    svg.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", "grey")
        .style("stroke-dasharray", ("3, 3"))   
        .attr("stroke-width", 1);
    
    handleCheckboxChange()
}

