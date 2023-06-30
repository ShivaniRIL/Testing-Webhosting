const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});


var slideIndex = 0;

    showSlides();

   

    function showSlides() {

      var slides = document.getElementsByClassName("slide");

      for (var i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

      }

      slideIndex++;

      if (slideIndex > slides.length) {

        slideIndex = 1;

      }

      slides[slideIndex - 1].style.display = "block";

      setTimeout(showSlides, 2000); // Change slide every 2 seconds

    }



    // Sample data
    const trendsData = [
      { date: '2023-06-01', value: 10 },
      { date: '2023-06-02', value: 20 },
      { date: '2023-06-03', value: 30 },
      { date: '2023-06-04', value: 25 },
      { date: '2023-06-05', value: 15 },
      { date: '2023-06-06', value: 35 },
      { date: '2023-06-07', value: 45 },
      { date: '2023-06-08', value: 50 },
      { date: '2023-06-09', value: 40 },
      { date: '2023-06-10', value: 30 },
      { date: '2023-06-11', value: 20 },
      { date: '2023-06-12', value: 35 },
      { date: '2023-06-13', value: 42 },
      { date: '2023-06-14', value: 38 },
      { date: '2023-06-15', value: 52 },
      { date: '2023-06-16', value: 47 },
    ];

 

    let selectedInterval = '7';

 

    // Chart configuration
    const config = {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Trends',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {}
    };

 

    const trendsChart = new Chart(document.getElementById('trendsChart'), config);

 

    // Function to update the chart based on the selected interval
    function updateChart() {
      const filteredData = trendsData.slice(-selectedInterval);
      const labels = filteredData.map(data => data.date);
      const values = filteredData.map(data => data.value);

 

      trendsChart.data.labels = labels;
      trendsChart.data.datasets[0].data = values;
      trendsChart.update();
    }

 

    // Event listener for interval selection
    const intervalRadios = document.getElementsByName('interval');
    intervalRadios.forEach(radio => {
      radio.addEventListener('change', (event) => {
        selectedInterval = event.target.value;
      });
    });