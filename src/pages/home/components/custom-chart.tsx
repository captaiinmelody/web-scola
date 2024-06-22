// import Chart from "react-apexcharts";
// import { useMediaQuery } from "react-responsive";

// const CustomChart = () => {
//   const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" }); // Adjust max-width as needed
//   const chartWidth = isSmallScreen ? "250px" : "500px"; // Adjust chart width for small screens

//   const chartStyles = {
//     option: {
//       colors: ["#E73A37", "#2E3A71"],
//       labels: ["Tidak Sesuai Jurusan", "Sesuai Jurusan"],
//       legend: {
//         position: "bottom",
//         fontSize: isSmallScreen ? "10px" : "18px",
//         fontFamily: "Helvetica, Arial",
//         fontWeight: 400,
//       },
//     },
//     series: [870, 130],
//   };

//   return (
//     <div className="bg-slate-200 rounded-t-[100px] w-full h-screen p-4">
//       <h1 className="section-title py-12">Kamu sudah menentukan karirmu?</h1>
//       <div className="wrapper w-full flexCol md:flex-row items-center gap-10">
//         <p className="md:text-2xl font-semibold">
//           Survey yang dilakukan oleh Indonesia Career Center Network (ICCN)
//           kepada kurang lebih 1.000 orang responden didapatkan hasil bahwa{" "}
//           <span className="text-tertiary">87%</span> mahasiswa di Indonesia
//           merasa salah jurusan
//         </p>
//         <Chart
//           options={chartStyles.option}
//           series={chartStyles.series}
//           type="pie"
//           width={chartWidth} // Dynamic width based on screen size
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomChart;
