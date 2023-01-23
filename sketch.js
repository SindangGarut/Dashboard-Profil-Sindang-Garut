
//Data Jenis Kelamin//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Q1WDV08r94ztxjQrD29SuiuO3Br1XCFEj7VjMxuQPR0yz5veNj6fh71NeeogaiOG0V9QW0dqKOvp/pub?gid=0&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  jeniskelaminChartline(object);
  
  
});
function jeniskelaminChartline(dataJenisKelamin) {
  const label = dataJenisKelamin.map((value) => value["JenisKelamin"]);

  const data = {
    labels: ["Laki-laki","Perempuan"],
    datasets: [
      {
      label: 'Data Jenis min',            
      data: dataJenisKelamin.map((value) => value["Jumlah"]),
        fill: false,
        backgroundColor : [
          "rgb(0,128,128)",
          "rgb(0,0,128)"
        ],
        borderColor: [
          "rgb(0,128,128)",
          "rgb(0,0,128)"
        ]
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const jeniskelaminChartline = new Chart(document.getElementById("jk").getContext('2d'),
    config
  );
}
//Akhir Data Jenis Kelamin//

//Data Usia Penduduk//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Q1WDV08r94ztxjQrD29SuiuO3Br1XCFEj7VjMxuQPR0yz5veNj6fh71NeeogaiOG0V9QW0dqKOvp/pub?gid=855079973&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  usiapendudukChartline(object);
  
  
});
function usiapendudukChartline(dataUsiaPenduduk) {
  const label = dataUsiaPenduduk.map((value) => value["Usia"]);

  const data = {
    labels: label,
    datasets: [
      {
        label:'Usia Penduduk',
        data: dataUsiaPenduduk.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgb(0,100,0)",
          "rgba(0,128,0, 1)",
          "rgba(34,139,34, 1)",
          "rgba(0,255,0, 1)",
          "rgba(50,205,50, 1)",
          "rgba(144,238,144, 1)",
          "rgba(152,251,152, 1)",
          "rgba(143,188,143, 1)",
          "rgba(0,250,154, 1)",
          "rgba(0,255,127, 1)",
        ],
        borderColor: [

          "rgb(0,100,0)",
          "rgba(0,128,0, 1)",
          "rgba(34,139,34, 1)",
          "rgba(0,255,0, 1)",
          "rgba(50,205,50, 1)",
          "rgba(144,238,144, 1)",
          "rgba(152,251,152, 1)",
          "rgba(143,188,143, 1)",
          "rgba(0,250,154, 1)",
          "rgba(0,255,127, 1)",        ],
        hoverOffset: 3,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
    
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("UsiaPenduduk").getContext('2d'),
    config
  );
}
//Akhir Data Usia Penduduk//

//Data E-KTP//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Q1WDV08r94ztxjQrD29SuiuO3Br1XCFEj7VjMxuQPR0yz5veNj6fh71NeeogaiOG0V9QW0dqKOvp/pub?gid=556288000&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  ektpChartline(object);
  
  
});
function ektpChartline(dataEKTP) {
  const label = dataEKTP.map((value) => value["EKTP"]);

  const data = {
    labels: ["Punya","Tidak Punya"],
    datasets: [
      {
      label: 'Data E-KTP',            
      data: dataEKTP.map((value) => value["Jumlah"]),
        fill: false,
        backgroundColor : [
          "rgb(255,69,0)",
          "rgba(255,140,0)"
        ],
        borderColor: [
          "rgb(255,69,0)",
          "rgba(255,140,0)"
        ]
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const ektpChartline = new Chart(document.getElementById("ektp").getContext('2d'),
    config
  );
}
//Akhir Data E-KTP//

//Data Status Perkawinan//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Q1WDV08r94ztxjQrD29SuiuO3Br1XCFEj7VjMxuQPR0yz5veNj6fh71NeeogaiOG0V9QW0dqKOvp/pub?gid=1135310475&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
      [data[0].split(",")[2]]: materi[2],
      [data[0].split(",")[3]]: materi[3],
    });
  }
  statusperkawinanChartline(object);
  
  
});
function statusperkawinanChartline(dataStatusPerkawinan) {
  const label = dataStatusPerkawinan.map((value) => value["StatusPerkawinan"]);

  const data = {
    labels: ["Belum Nikah","Kawin/Nikah","Cerai Hidup","Cerai Mati"],
    datasets: [
      {
      label: 'Data Status Perkawinan',            
      data: dataStatusPerkawinan.map((value) => value["Jumlah"]),
        fill: false,
        backgroundColor : [
          "rgb(65,105,225)",
          "rgb(30,144,255)",
          "rgb(0,0,139)",
          "rgb(0,0,205)"
        ],
        borderColor: [
          "rgb(65,105,225)",
          "rgb(30,144,255)",
          "rgb(0,0,139)",
          "rgb(0,0,205)"
        ]
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
     
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const statusperkawinanChartline = new Chart(document.getElementById("sp").getContext('2d'),
    config
  );
}
//Akhir Data Status Perkawinan//

//Data Penghasilan//
$.ajax(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Q1WDV08r94ztxjQrD29SuiuO3Br1XCFEj7VjMxuQPR0yz5veNj6fh71NeeogaiOG0V9QW0dqKOvp/pub?gid=923993873&single=true&output=csv"
).done(function (result) {
  const data = result.split("\r\n");
  let object = [];
  for (let i = 1; i < data.length; i++) {
    const materi = data[i].split(",");
    object.push({
      [data[0].split(",")[0]]: materi[0],
      [data[0].split(",")[1]]: materi[1],
    });
  }
  penghasilanChartline(object);
  
  
});
function penghasilanChartline(dataPenghasilan) {
  const label = dataPenghasilan.map((value) => value["Penghasilan"]);

  const data = {
    labels: label,
    datasets: [
      {
        label:'Penghasilan',
        data: dataPenghasilan.map((value) => value["Jumlah"]),
        backgroundColor: [
          "rgba(221,160,221, 1)",
          "rgba(238,130,238, 1)",
          "rgba(255,0,255, 1)",
          "rgba(218,112,214, 1)",
          "rgba(199,21,133, 1)",
          "rgba(219,112,147, 1)",
        ],
        borderColor: [
          "rgba(221,160,221, 1)",
          "rgba(238,130,238, 1)",
          "rgba(255,0,255, 1)",
          "rgba(218,112,214, 1)",
          "rgba(199,21,133, 1)",
          "rgba(219,112,147, 1)",
        ],
        hoverOffset: 3,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
    
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("p").getContext('2d'),
    config
  );
}
//Akhir Data Penghasilan//
