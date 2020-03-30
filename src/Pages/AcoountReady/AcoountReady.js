import React from 'react';
import './AcoountReady.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import High5 from '../../Images/High5.png';
import calculator from "../../Images/calculator.png";
import confetti from "../../Images/confetti.png";


class AcoountReady extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }




  render() {

    return (
      <div className="AcoountReady ">
        <div className="d-flex flex-column align-items-center col-12 x-auto">
          
          <div className=" p-2 mx-auto d-block pt-5 mt-3">
            <img src={confetti} alt="icon1" className="savingMony " />
          </div>

          <p className="m-0 fcm fz34 fw600 m-0 pt-4">حسابك جاهز</p>
          <p className="m-0 fcm fz28  m-0 pm-0 ">تقدر دلوقتي تحسب </p>
          <p className="m-0 fcm fz28  m-0 pb-4">بالضبط  هتوفر قد إيه</p>

          
          <Link to="/Calculate" className="btn p-2 bgcm2  my-3  w-100  d-flex justify-content-between" onClick={this.handleCalc}>
                  <p className="icon20 m-0 " ></p>
                  <p className="m-0 fcm2 fz20 fw600 m-0 mt-1">إحسب هتوفر كام</p>
                  <img src={calculator} alt="calculator" className="icon25  " style={{ marginTop: 2 }} />
          </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(AcoountReady);
