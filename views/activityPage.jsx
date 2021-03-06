var React = require("react")
var DefaultLayout = require("./layouts/defaultlayout");
var NavBar_Container = require('./components/navbar_container')
var NavBar_Options = require('./components/navbar_options')

import { FaMapMarkerAlt } from "react-icons/fa"
import { FaLink } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdTimelapse } from "react-icons/md";


class ActivityPage extends React.Component {
    render() {
        let outlets = this.props.activity.map( (outlet, index) => {
        let href = '/activities/'+outlet.activity_id+'/'+outlet.place_id
        console.log(href);
        return <a className="dropdown-item" href={href}>{outlet.outletname}</a>
        });
        return (
            <DefaultLayout loggedIn={this.props.loggedin} user={this.props.user}>
                <NavBar_Container>
                    <NavBar_Options />
                </NavBar_Container>

                <div id="magicCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={this.props.activity[0].activitypicture1} className="carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={this.props.activity[0].activitypicture2} className="carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={this.props.activity[0].activitypicture3} className="carouselImage" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#magicCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#magicCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div id="details">
                    <h6 className="card-text">{this.props.activity[0].category}</h6>
                    <h3>{this.props.activity[0].title} @

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Playnation | Select Outlet
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {outlets}
                            </div>
                        </div>
                    </h3>
                    <p><FaMapMarkerAlt className="react-icons"/>{this.props.activity.length} Outlets </p>
                    <a href={this.props.activity[0].website}><FaLink className="react-icons"/>{this.props.activity[0].urltext}</a>
                    <p><IoIosPricetags className="react-icons"/>${this.props.activity[0].price} per person</p>
                    <p><MdTimelapse className="react-icons" />Opening hours</p>
                        <ul id='openinghours'>
                            <div className='timingDiv OneA'>
                                <li>Monday: </li>
                                <li>Tuesday: </li>
                                <li>Wednesday: </li>
                                <li>Thursday: </li>
                            </div>
                            <div className='timingDiv TwoC'>
                                <li>Friday: </li>
                                <li>Saturday: </li>
                                <li>Sunday: </li>
                            </div>
                        </ul>
                    <div id="description">
                        <p>{this.props.activity[0].description}</p>
                    </div>
                </div>

            </DefaultLayout>

            )
    }
}

module.exports = ActivityPage

            // <div className="card m-3 p-0" id="activitiesCard">
            //     <img className="card-img-top" src={this.props.activities.imageurl} alt="Card image cap" />
            //     <div className="card-body">
            //       <h6 className="card-text">{this.props.activities.category}</h6>
            //       <h5 className="card-title">{this.props.activities.title}</h5>
            //       <p className="card-text">${this.props.activities.price} per person</p>
            //     </div>
            // </div>


// <div className="dropdown">
//   <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Dropdown link
//   </a>

//   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     <a className="dropdown-item" href="#">Action</a>
//     <a className="dropdown-item" href="#">Another action</a>
//     <a className="dropdown-item" href="#">Something else here</a>
//   </div>
// </div>


//0004
        // render() {
        // let outlets = this.props.activity.map( (outlet, index) => {
        //     let href = '/'+outlet.place_id+'/'+outlet.activity_id+'/';
        //     return <a className="dropdown-item" href={href}>{outlet.outletname}</a>

        // let outlets = this.props.activity.map( (outlet, index) => {
        //     let href = '/'+outlet.place_id+'/'+outlet.activity_id+'/';
        //     return <button className="dropdown-item" type="button">{outlet.outletname}</button>