// import React from 'react'
// // import "./css/rating.scss"
// // import { useState } from 'react'
// // import axios from "axios"

// // const Rating = (props) => {
// //     // const [rating, setRating] = useState(0)
// //     // const [selectedRate, setSelectedRate] = useState(null)


// //     const handleChangeRate = e => {
// //         console.log("here", e)
// //         axios
// //             .post(process.env.REACT_APP_BACKEND_URL + "/tour" + e)
// //             .then(res => {
// //                 console.log(res)
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             });
// //     };

// //     // const handleSubmitRate = e => {
// //     //     e.preventDefault();
// //     //     console.log(rating)
// //     //     // axios
// //     //     //     .post(process.env.REACT_APP_BACKEND_URL + "/tour" + rating)
// //     //     //     .then(res => {
// //     //     //         console.log(res)
// //     //     //     })
// //     //     //     .catch(err => {
// //     //     //         console.log(err);
// //     //     //     });
// //     // };


// //     return (
// //         <div className="rating rating2" >
// //             <a href="#5" title="5" onClick={() => handleChangeRate(5)}>★</a>
// //             <a href="#4" title="4" onClick={() => handleChangeRate(4)}>★</a>
// //             <a href="#3" title="3" onClick={() => handleChangeRate(3)}>★</a>
// //             <a href="#2" title="2" onClick={() => handleChangeRate(2)}>★</a>
// //             <a href="#1" title="1" onClick={() => handleChangeRate(1)}>★</a>
// //         </div>
// //     )
// // }


// var Rating = React.createClass({
//     propTypes: {
//         disabled: React.PropTypes.bool
//     },
//     getInitialState() {
//         return {
//             rating: this.props.rating || null,
//             temp_rating: null
//         };
//     },
//     rate(rating) {
//         this.setState({
//             rating: rating,
//             temp_rating: rating
//         });
//     },
//     star_over(rating) {
//         this.state.temp_rating = this.state.rating;
//         this.state.rating = rating;

//         this.setState({
//             rating: this.state.rating,
//             temp_rating: this.state.temp_rating
//         });
//     },
//     star_out() {
//         this.state.rating = this.state.temp_rating;

//         this.setState({ rating: this.state.rating });
//     },
//     render() {
//         var stars = [];

//         for (var i = 0; i < 5; i++) {
//             var klass = 'star-rating__star';

//             if (this.state.rating >= i && this.state.rating != null) {
//                 klass += ' is-selected';
//             }

//             stars.push(
//                 <label
//                     className={klass}
//                     onClick={this.rate.bind(this, i)}
//                     onMouseOver={this.star_over.bind(this, i)}
//                     onMouseOut={this.star_out}>
//                     ★
//           </label>
//             );
//         }

//         return (
//             <div className="star-rating">
//                 {stars}
//             </div>
//         );
//     }
// });


// export default Rating
