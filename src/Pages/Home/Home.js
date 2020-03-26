import React from 'react';
import './Home.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import icon1 from '../../Images/icon1.png';
import calculator from "../../Images/calculator.png";
import { Calculate } from '../../redux/actions/index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // axios.post(`http://172.16.1.146/PayOff_V2/api/General/Calculate?amount=222`)
    //   .then(res => console.log(res))
    //   .catch(err => (err))
  }
  validate = () => {
    let erroramount = "";
    if (isNaN(this.state.amount)) {
      erroramount = "أدخل القيمه بالجنيه ";
    }
    if (this.state.amount < 5000) {
      erroramount = "اقل قيمه هي 5000 جنيه";
    }
    if (this.state.amount > 40000) {
      erroramount = "اكبر قيمه هي 40000 جنيه";
    }
    if (erroramount) {
      this.setState({
        erroramount
      });
      return false;
    }
    return true;
  };

  handleChange = (e) => {
    this.setState({ amount: e.target.value })
  }
  handleCalc = () => {
    const isValid = this.validate();

    if (isValid) {
      this.props.Calculate(this.state.amount)
      this.setState({ erroramount: false })

    }
  }
  render() {


    return (
      <div className="Home ">
        <div className="d-flex flex-column align-items-center col-12 x-auto">
          <div className="contenthvh33 p-2 pt-4 ">
            <p className="fz34 fcm d-block m-0">إنضم لعملائنا الأن!
          </p>
            <p className="fz22 d-block fw600 fcm m-0">
              متوسط توفير الواحد فيهم

          </p>
            <div>

              <span className="fz65 fcm fw600 m-0">{" "}
            ٢،٩٦٨
            </span>{" "}
              <span className="fz24 fcm fw500 m-0">{" "}
              جنيه
            </span>{" "}
            </div>
          </div>
          <div className="hvh33 p-2  mx-auto  d-block  p">
            <img src={icon1} alt="icon1" className="savingMony" />
          </div>
          <div className=" p-2 text-center d-flex align-items-center col-12 mx-auto pt-4">
            <div className="  col-12 mx-auto">

              <p className="fz16 fcm  m-0 mb-1">
                شوف إنت كمان ممكن توفر قد إيه!
            </p>
              <div class="hvh33 px-2  mx-auto ">

                <div className="px-2 relative">
                  <input type="text" className="user-field form-control fz22 fw600 fcm " onChange={this.handleChange} value={this.state.amount} placeholder="مديونية الكرديت كارد؟ " />
                  <span className="Pound fz16 text-muted">جنيه</span>
                  <hr className="PoundInputhr" />
                </div>
                {this.state.erroramount ? <div style={{ fontSize: 12, color: "red" }} className="py-1 m-0">
                  {this.state.erroramount}
                </div> : ''}

                <div className="btn p-2 bgcm2  my-3  w-100  d-flex justify-content-between" onClick={this.handleCalc}>
                  <p className="icon20 m-0 " ></p>
                  <p className="m-0 fcm2 fz20 fw600 m-0 mt-1">إحسب هتوفر كام
                    </p>
                  <img src={calculator} alt="calculator" className="icon20  " style={{ marginTop: 2 }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
}
const mapDispatchToProps = ({
  Calculate,
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
