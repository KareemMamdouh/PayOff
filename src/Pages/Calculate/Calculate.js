import React from 'react';
import './Calculate.scss';
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
import AddCreditCard from "../../Images/AddCreditCard.png";
import Done from "../../Images/Done.png";
import {GetAllBanks,GetBankCreditCards,GetDurationByAmmout,GeneralCalculate} from '../../redux/actions/index'



class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:0,
      children:0,
      Data:[]
    };
    this.handleSaveImage=this.handleSaveImage.bind(this)
  }
  componentDidMount() {
    
    this.setState({Data:JSON.parse(localStorage.getItem("Data"))})
    this.props.GetAllBanks()
  }
  handleChangeSelect = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    if(this.state.ActiveData){
      this.props.GeneralCalculate(this.state.handleAmountCredit,e.target.value,this.state.ActiveData.BankCards)

    }
  }
  handleAmountCredit=(e)=>{
    this.props.GetDurationByAmmout(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSaveImage(e)  {
    console.log(e.target)
    this.setState({ [e.target.name]: e.target.files[0] })
  }
  handleStatus=(N)=>{
    this.setState({status:N})
  }
  handleselect=()=>{
    let i;
    let items;
    if(this.props.Duration&&this.props.Duration.customer_time_boundaries_from){
      for(i=this.props.Duration.customer_time_boundaries_from;i<=this.props.Duration.customer_time_boundaries_to;i=+3){
      items =+ "<option> cscsc<option>"
      }
    }
  } 
  render() {
    let i;
    let items=[];
    if(this.props.Duration&&this.props.Duration.customer_time_boundaries_from){
      for(i=this.props.Duration.customer_time_boundaries_from;i<=this.props.Duration.customer_time_boundaries_to;i+=3){
      items.push(<option> {i}</option>) 
      }
    }
    return (
      <div className="Calculate ">
         <>
         <div className="nav  d-flex align-items-center justify-content-center">
              <div className=" col-2 ">
              </div>
                <div className=" col-8 m-0 p-0">
                      <p className="m-0 text-white fz18 fw600">إحسب هتوفر كام</p>
                </div>
                <div className=" col-2 ">
                <Link to="/AcoountReady"><img src={Path2} alt="" className="icon15  mt-1 " /></Link>
                </div>
            </div>

              <div className=" row m-0 col-12 pt-4 ">
                <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> إختار 
                   {" "}
                   <span className="fw600">
                     الكرديت كارد
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20  mt-1 " /></div>
                </div>
              <div className="row m-0 col-11 mx-auto ">
                    


                    {this.state.Data&&this.props.AllBanks&&this.state.Data.map((x,i)=>{
                      return (
                        <div className="col-4 text-center p-2 px-3" onClick={()=>this.setState({ActiveData:this.state.Data[i]})}>
                      <div className={this.state.ActiveData===this.state.Data[i]?" mx-auto p-0 p-0 borderimg text-center bg-white ActiveBorder":" mx-auto p-0 p-0 borderimg text-center bg-white"} data-toggle="modal" data-target="#exampleModalScrollable">
                        <img src={this.props.AllBanks[this.state.Data[i].BankName].logo} alt="" className=" mx-auto text-center   bgwhite"style={{height:"100%",width:"100%",objectFit:"contain"}} />
                        {/* <img src={AddCreditCard} alt="" className=" mx-auto text-center  imagestyle bgwhite" /> */}
                      </div>
                    </div>
                      )
                    })}
                    
                  <div className="col-4 text-center p-2 px-3">
                      <div className="  mx-auto p-0 p-2 borderimg text-center" data-toggle="modal" data-target="#exampleModalScrollable">
                        <img src={AddCreditCard} alt="" className=" mx-auto text-center  imagestyle bgwhite" />
                        {/* <img src={AddCreditCard} alt="" className=" mx-auto text-center  imagestyle bgwhite" /> */}
                      </div>
                    </div>
              </div>

              <div className=" row m-0 col-12 pt-4 d-flex align-items-center">
                <div className="col-2 p-0"></div>
                  <div className="col-8 px-1 py-2">
                    <input type="text" className=" form-control fcm fz24 fw600 user-field     " name="handleAmountCredit" value={this.state.handleAmountCredit} onChange={this.handleAmountCredit} placeholder="مديونية الكرديت كارد؟ " />
                    <span className="Pound fz16 text-muted">جنيه</span>

                </div>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>

                <div className="col-8 mx-auto py-2">
                      <select className="user-field form-control text-muted fz14   fh40 " name="duration" value={this.state.duration} onChange={this.handleChangeSelect}disabled={this.state.handleAmountCredit&&this.props.Duration?"":"disabled"} > 
                        <option id="style">مدة تقسيط المديونية</option>
                        {items}
                      </select> 
                 </div>
              {this.props.GeneralResult&&<>
                 <div className=" row m-0 col-12 pt-5 ">
                <div className="col-2 p-0"></div>
                  <div className="fz20 fcm col-8 m-0 p-0 resultsec b_r p-0  "> 
                            <span className="fz12 fcm fw600 ">هتدفع شهرياً </span>
                            <span className="fz30 fw600 fcm ">{this.props.GeneralResult.monthlypaid} </span>
                            <span className="fz12 fcm fw600">جنيه </span>
                            <div className="fz20 fcm col-152 m-0 p-0 resultsec2 b_r p-0 pt-2 m-0"> 
                                  <span className="fz12 fcm fw600 ">هتوفر  </span>
                                  <span className="fz49 fh35 fw600 fcm "> {this.props.GeneralResult.discount} </span>
                                  <span className="fz12 fcm fw600">جنيه </span>
                            </div>

                   </div>
                   <div className="col-2 p-0 text-center d-flex align-content-around flex-wrap"><div className="d-block w-100 text-center px-3"><img src={help} alt="" className="icon20 d-block  " /></div><div className="d-block w-100 text-center px-3"> <img src={help} alt="" className="icon20 d-block  " /></div></div>
                </div>
              
                <div className=" col-12 px-4">
                  <div  className="btn p-2 bgcm2  my-3   w-100  d-flex justify-content-between" onClick={this.handleCalc}>
                            <p className="icon20 m-0 " ></p>
                            <p className="m-0 fcm2 fz20 fw600 m-0 mt-1">إحسب هتوفر كام</p>
                            <img src={Done} alt="calculator" className=" p-0 " style={{ marginTop: 2 }} style={{width:30,height:30 ,objectFit:"cover"}}/>
                    </div>
                </div></>}
            

          </>
         
         
         
      

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calcRedult: state.User.calcRedult,
    AllBanks:state.Bank.AllBanks,
    BankCreditsCards:state.Bank.BankCreditsCards,
    Duration:state.Bank.Duration,
    GeneralResult:state.User.GeneralResult
  };
}
const mapDispatchToProps = ({
  GetAllBanks,
  GetBankCreditCards,
  GetDurationByAmmout,
  GeneralCalculate
})
export default connect(mapStateToProps, mapDispatchToProps)(Calculate);
