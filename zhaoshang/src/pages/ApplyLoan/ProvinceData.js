// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import React from 'react';
// // import DatePicker from 'antd/es/date-picker'; // 加载 JS
// import 'antd/es/date-picker/style/css'; // 加载 CSS
// import {Link,withRouter} from 'react-router-dom';

// // const { Select } = antd;

// // const { Option } = Select;
// const provinceData = ['Zhejiang', 'Jiangsu'];
// const cityData = {
//   Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
//   Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// };

// class App extends React.Component {
//   state = {
//     cities: cityData[provinceData[0]],
//     secondCity: cityData[provinceData[0]][0],
//   };

//   handleProvinceChange = value => {
//     this.setState({
//       cities: cityData[value],
//       secondCity: cityData[value][0],
//     });
//   };

//   onSecondCityChange = value => {
//     this.setState({
//       secondCity: value,
//     });
//   };

//   render() {
//     const { cities } = this.state;
//     return (
//       <div>
//         <Select
//           defaultValue={provinceData[0]}
//           style={{ width: 120 }}
//           onChange={this.handleProvinceChange}
//         >
//           {provinceData.map(province => (
//             <Option key={province}>{province}</Option>
//           ))}
//         </Select>
//         <Select
//           style={{ width: 120 }}
//           value={this.state.secondCity}
//           onChange={this.onSecondCityChange}
//         >
//           {cities.map(city => (
//             <Option key={city}>{city}</Option>
//           ))}
//         </Select>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);