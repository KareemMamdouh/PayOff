import React from 'react';
import './SavedAmount.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import High5 from '../../Images/High5.png';
import calculator from "../../Images/calculator.png";
import Path from "../../Images/Path.png";


class SavedAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }




  render() {

    return (
      <div className="SavedAmount ">
        <div className="d-flex flex-column align-items-center col-12 x-auto">
          <div className="nav col-12 ">
            <Link to="/"><img src={Path} alt="" className="icon10  " /></Link>
          </div>
          <div className=" p-2 mx-auto d-block p">
            <img src={High5} alt="icon1" className="savingMony " />
          </div>

          <div className="contenthvh33 p-2 pt-4 ">
            <p className="fz28 fcm  m-0 lh26">ممكن </p>
            <p className="fz34 d-block fw600 fcm mb-2">
              توفر حتى
            </p>
            <div>
              <p className="result   m-0 mt-3" style={{ textShadow: "0 2px 4px 0" }}>{" "}
                {this.props.calcRedult ? this.props.calcRedult : '0'}
              </p>{" "}
              <p className="fz22 fcm fw600 m-0 poundtoresult">{" "}
              جنيه
            </p>{" "}
            </div>
          </div>

          <div className=" p-2 text-center d-flex align-items-center col-12 mx-auto pt-2">
            <div className="  col-12 mx-auto">
              <div className="btn p-2 bgcm2  my-2  w-100  d-flex justify-content-center">
                <p className="m-0 fcm2 fz20 fw600 m-0 mt-1">فعّل حسابك</p>
              </div>
              <p className="fz16 fcm  m-0 mb-1">
                مش هناخد منك غير كام دقيقة
            </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calcRedult: state.User.calcRedult
  };
}
const mapDispatchToProps = ({

})
export default connect(mapStateToProps, mapDispatchToProps)(SavedAmount);
