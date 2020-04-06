import React from 'react';
import './Appointment.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import High5 from '../../Images/High5.png';
import calculator from "../../Images/calculator.png";
import Path2 from "../../Images/Path2.png";
import help from "../../Images/help.png";
import AddCard from "../../Images/AddCard.png";
import AddCard2 from "../../Images/AddCard2.png";
import Next from "../../Images/Next.png";
import minus from "../../Images/minus.png";
import plus from "../../Images/plus.png";
import happiness from "../../Images/happiness.png";
import facebook from "../../Images/facebook.png";
import google from "../../Images/google.png";
import CallMe from "../../Images/CallMe.png";
import MeetMe from "../../Images/MeetMe.png";
import Shape from "../../Images/Shape.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleSaveImage=this.handleSaveImage.bind(this)
  }
  componentDidMount() {
  }
  onChange = date => this.setState({ date })

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
 
  handleSaveImage(e)  {
    console.log(e.target)
    this.setState({ [e.target.name]: e.target.files[0] })
  }
  handleStatus=(N)=>{
    this.setState({status:N})
  }
  render() {
    const { date } = this.state;

    return (
      <div className="Appointment ">
            <div className="nav     d-flex align-items-center justify-content-center">
              <div className=" col-2 ">
                  <Link to="/"><img src={Shape} alt="" className="icon20  mt-1 " /></Link>
                </div>
                <div className=" col-8 m-0 p-0">
                      <p className="m-0 text-white fz210 fw600">حدد ميعاد المقابلة</p>
                </div>
                <div className=" col-2 ">
                  <Link to="/Calculate"><img src={Path2} alt="" className="icon15  mt-1 " /></Link>
                </div>
            </div>
          <div className="pt-4 pb-2 ">
            <div className="row m-0 p-0 col-12 ">
                  <p className="fz22 fcm col-8 m-0 p-0 fw600 mx-auto">أخر خطوة!</p>
                  <p className="fz18 fcm col-10 m-0 p-0 mx-auto m-0">محتاجين نتقابل معاك عشان نراجع مع بعض أوراقك ونمضي العقود  </p>
            </div>
          </div>
          <img src={MeetMe} alt="" className="col-5 p-3 mb-3"/>

          <p className="fz18 fcm fw600 col-8 m-0 p-0 mx-auto col-12 pb-1">عشان المقابلة تبقى سهلة، سريعة وناجحة </p>
          <div className="col-11 mx-auto p-0 m-0 divInfo b_r text-right ">
            <div className="col-12 mx-auto p-0 m-0 FirstInfo p-0 m-0 py-2 px-3">
                <p className="m-0 fz14 fw600 mb-1">برجاء إحضار أصول الأوراق الأتية معاك:</p>
                <p className="m-0 fz14">١- أصل بطاقة الرقم القومي.</p>
                <p className="m-0  fz14">٢- كشف حساب أخر ٦ أشهر لكروتك الإئتمانية
                  <span className="fz12 mx-1">
                   (مختوم من البنك)  
                  </span>
                 </p>
                <p className="m-0 ">٣- جواب HR من مكان عملك 
                  <span className="fz12 mx-1 ">
                     (إن وجد) 
                  </span>
                </p>
            </div>
            <div className="col-12 mx-auto p-0 m-0 py-3 px-3 fw600">
                <p className="m-0 mb-1">برجاء قراءة المستندات المطلوب توقيعه</p>
                <p className="m-0 fz14">١- وثيقة ضمان التمويل 
                  <a href="https://drive.google.com/file/d/1hHqAEDlCs8F3fjHDzNHGvf5CCQbc62Sw/view?usp=sharing" className="fz12 mx-1 fcm3">
                   [من هنا]
                  </a>
                 </p>
                 <p className="m-0 fz14">2- عقد كريديت فينز القانوني
                  <a href="https://drive.google.com/file/d/1c5_gXlCuTs1xjIEazNDe36QPIsIYruLp/view?usp=sharing" className="fz12 mx-1 fcm3">
                   [من هنا]
                  </a>
                 </p>
            </div>
          </div>

          <p className="fz18 fcm fw600 col-8 m-0 p-0 mx-auto col-12 pt-4 pb-1">حدد الميعاد المناسب ليك وإحنا هنجيلك</p>
          <div className=" row m-0 col-11 px-3 pt-0 pb-3 text-center mx-auto pt-1">
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                  className="mx-auto"
                />
          </div>
          <p className="m-0 fz16 m-0 col-11 fcm mx-auto">عارفين إنك مشغول وعايزين نسهلها عليك،
                حدد الأيام المناسبة ليك وإحنا هنكلمك نظبت معاك الميعاد ونجيلك لحد عندك.</p>
                <div className="px-3 mb-5">
                <div  className="btn p-2 bgcm2  my-3   w-100  d-flex justify-content-between" >
                            <p className="icon20 m-0 " ></p>
                            <p className="m-0 fcm4 fz20 fw600 m-0 mt-1">إحسب هتوفر كام</p>
                            <img src={CallMe} alt="calculator" className=" p-0 " style={{ marginTop: 2 }} style={{width:30,height:30 ,objectFit:"cover"}}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
