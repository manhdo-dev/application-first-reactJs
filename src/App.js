import React from 'react';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import TopMenu from './Component/TopMenu/TopMenu';

// //Cach dinh nghia component thong thuong
// function One() {
//   return (
//     <div>
//       <h2>
//         Lesson 1
//       </h2>
//       <h3>
//         Lesson 2
//       </h3>
//     </div>
//   )
// }

// //canh dinh nghia component bang anonymous function
// const Two = function() {
//   return (
//     <div>
//       <h4>
//         Lesson 3
//       </h4>
//       <h5>
//         Lesson 4
//       </h5>
//     </div>
//   )
// }

// //cach dinh nghia component bang arrow function
// const Three = () => {
//   return (
//     <div>
//       <h5>
//         Lesson 5
//       </h5>
//     </div>
//   )
// }

// //canh dinh nghia component bang class bang cach go rcjc (cach hay duoc su dung nhat)
// class Four extends React.Component {
//   render() {
//     return (
//       <div>
//         <h6>
//           Lesson 6
//         </h6>
//       </div>
//     );
//   }
// }
// class Five extends React.Component {
//   render() {
//     return (
//       <div>
//         <h6>
//           Lesson 7
//         </h6>
//       </div>
//     );
//   }
// }

//----------------------------------------------------------------
//cach thao tac voi props bang function
// function NumberOne(props) {
//   return (
//     <div className="col-sm-6">
//       <div className="card">
//         <img src={props.url} className="card-img-top" alt="" />
//         <div className="card-body">
//           <h5 className="card-title">{props.title}</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="/" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>
//   )
// }

//cach thao tac voi props bang class name
// class NumberTwo extends React.Component {
//   render() {
//     return (
//       <div className="col-sm-4">
//         <div className="card">
//           <img src={this.props.url} className="card-img-top" alt="" />
//           <div className="card-body">
//             <h5 className="card-title">{this.props.title}</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="/" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class NumberThree extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3>Application from ReactJs</h3>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <Content order2="col-lg-6 order-lg-2" order1="col-lg-6 order-lg-1" img="img/01.jpg" title="For those about to rock..." content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content order2="col-lg-6" order1="col-lg-6" img="img/02.jpg" title="We salute you!" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content order2="col-lg-6 order-lg-2" order1="col-lg-6 order-lg-1" img="img/03.jpg" title="Let there be rock!" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Footer/>
      </div>
    );
  }
}

export default App;
