import React from 'react';
import './Work.scss';
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
import Linked from "../../Images/Linked.png";
import VERIFY from "../../Images/VERIFY.png";


class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:0,
      children:0,
      typeEmployment:0,
      details:0,
    };
    this.handleSaveImage=this.handleSaveImage.bind(this)
  }
  componentDidMount() {
  }
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

    return (
      <div className="Work ">
         <>
         <div className="nav     d-flex align-items-center justify-content-center">
            <div className=" col-2 ">
              </div>
                <div className=" col-8 m-0 p-0">
                      <div className="bar mx-auto p-0 text-center d-flex  justify-content-between align-items-center p-1">
                      <div class="col-12 bg-white barwhite p-0 m-0">
                        <div className="barPersonal col-6  fw600 p-0 d-flex align-items-center justify-content-center">
                          <p className="m-0 mt-1  fz12 fw600 ">
                          معلومات العمل
                          </p>
                        </div>
                      </div>
                </div>
              </div>
              <div className=" col-2 ">
                <Link to="/FinancialInformation"><img src={Path2} alt="" className="icon15  mt-1 " /></Link>
              </div>
            </div>
                <div className=" row m-0 col-12 pt-4 ">
                <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> إختار 
                   {" "}
                   <span className="fw600">
                    نوع العمل
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>
                <div className="col-12 mx-auto py-3">
                      <select  className={this.state.typeEmployment==0?"user-field form-control text-muted fz14   ":"user-field form-control text-muted fz20 fw600 fcm3 "}  name="typeEmployment" value={this.state.typeEmployment} onChange={this.handleChange}> 
                        <option value="0">غير موظف / دراسة </option>
                        <option>صاحب العمل / مدير نفسك </option>
                        <option>شركة عائلية </option>
                        <option>شركة محلية صغيرة / متوسطة</option>
                        <option>شركة محلية كبيرة</option>
                        <option>قطاع حكومي</option>
                        <option>أخري </option>

                      </select> 
                 </div>
                 <div className="line-copy-2 col-8 mx-auto my-3"></div>

                 <div className=" row m-0 col-12 py-2 ">
                <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> تفاصيل 
                   {" "}
                   <span className="fw600">
                    مكان العمل
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>
                
              <div className="row col-12 m-0 ">
                <div className="col-12 px-1 py-2">
                  <input type="text" className=" form-control  user-field  fz22 fw600  fcm3 " placeholder="إسم شركتك" />
               </div>
               <div className="col-12 px-1 py-2">
                  <input type="text" className=" form-control  user-field  fz22 fw600  fcm3 " placeholder="المسمى الوظيفي" />
               </div>
              <div className="col-6 mx-auto py-3 pr-1">
                  <input type="number" className=" form-control  user-field  fz22 fw600 fh40  fcm3 " placeholder="سنة التعيين" />
 
                 </div>
                 <div className="col-6 mx-auto py-3 pl-1">
                      <select className={this.state.details==0?"user-field form-control text-muted fz14 fh40  ":"user-field form-control text-muted fz22 fw600 fh40  fcm3  "} name="details" value={this.state.details} onChange={this.handleChange}> 
                        <option value="0">المرتب الشهري</option>
                        <option>أقل من ٥٠٠٠ جم</option>
                        <option>من ٥٠٠٠ حتى ٩٠٠٠ جم</option>
                        <option>من ٩,٠٠٠ حتى ١٢,٠٠٠ جم</option>
                        <option>من ١٢,٠٠٠ حتى ٢٠,٠٠٠ جم</option>
                        <option>من ٢٠,٠٠٠ حتى ٣٠,٠٠٠ جم</option>
                        <option>من ٣٠,٠٠٠ حتى ٤٠,٠٠٠ جم</option>
                        <option>من ٤٠,٠٠٠ حتى ٦٠,٠٠٠ جم</option>
                        <option>أكتر من ٦٠,٠٠٠ جم </option>

                      </select> 
                 </div>
              </div>
              <img src={happiness} alt="" className="col-5 p-4"/>
              <div className="row m-0 p-0 col-12">
                  <p className="fz16 fcm col-12 m-0 p-0 fw600 text-center"> 
                   عظيم! إختار طريقة تأكيد صحة معلوماتك 
                   <img src={help} alt="" className="icon20  mx-2 " />
                   </p>
            </div>
            <Link to="/AcoountReady"><img src={Linked} alt="" className="col-9 p-2 mt-2"/></Link>
            <Link to="/AcoountReady"><img src={VERIFY} alt="" className="col-9 p-2 mb-2"/></Link>

          </>
         
         
         
      

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
export default connect(mapStateToProps, mapDispatchToProps)(Work);
