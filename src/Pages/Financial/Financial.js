import React from 'react';
import './Financial.scss';
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
import AddCreditCard from "../../Images/AddCreditCard.png";
import update from 'react-addons-update'; // ES6
import NextActive from "../../Images/NextActive.png";

import {GetAllBanks,GetBankCreditCards} from '../../redux/actions/index'
class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:0,
      cards:0,
      accounts:0,
      bank:0,
      tshelat:0,
      cars:0,
      data:[{}],
      Alldata:[{}],
      dwelling:0,
      Relationship:0
    };
    this.handleSaveImage=this.handleSaveImage.bind(this)
  }
  componentDidMount() {
    this.props.GetAllBanks()
  //   this.setState({Alldata:JSON.parse(localStorage.getItem("Data")),
  //   cards:1
  // })


  }
  handleChangeNormal=(e)=>{
    this.setState({ [e.target.name]: e.target.value })

  }
  handleChange = (e,i) => {
    // this.setState({ [e.target.name]: e.target.value })
    let Alldata = [...this.state.Alldata];
    let data = {...Alldata[i]};
    data[e.target.name] = e.target.value;
    Alldata[i] = data;
    this.setState({
      Alldata
    })
  }

  handleSaveImage(e)  {
    console.log(e.target)
    this.setState({ [e.target.name]: e.target.files[0] })
  }
  handleStatus=(N)=>{
    this.setState({status:N})
  }
  GetBankCreditCards=(e,i)=>{
    let Alldata = [...this.state.Alldata];
    let data = {...Alldata[i]};
    data[e.target.name] = e.target.value;
    Alldata[i] = data;
    this.setState({
      Alldata
    })
      this.props.GetBankCreditCards( this.props.AllBanks[e.target.value].ID,i)
  }
  handleSubmit=(i)=>{
    localStorage.removeItem("Data")
    localStorage.setItem('Data', JSON.stringify(this.state.Alldata));
    document.getElementById(`closeModel${i}`).click()
  }
  render() {
    
    return (
      <div className="Financial ">
        {this.state.status===0?
        <>
            <div className="nav     d-flex align-items-center justify-content-center">
            <div className=" col-2 ">
              </div>
                <div className=" col-8 m-0 p-0">
                      <div className="bar mx-auto text-center d-flex  justify-content-between align-items-center p-1">
                      <p className="fcm2 fz12 m-0 d-flex align-items-center justify-content-center px-2 fw600 mt-1 ">1/3</p>
                      <div class="col-9 bg-white barwhite p-0">
                        <div className="barPersonal col-8  fw600 p-0 d-flex align-items-center justify-content-center">
                          <p className="m-0 mt-1  fz12 fw600 ">
                          معلومات مالية
                          </p>
                        </div>
                      </div>
                </div>
              </div>
              <div className=" col-2 ">
                <Link to="/PersonalInformation"><img src={Path2} alt="" className="icon15  mt-1 " /></Link>
              </div>
            </div>
            <div className="row m-0 p-0 pt-4">
                  <p className="fz20 fcm col-8 m-0 p-0 fw600 text-center mx-auto"> 
                    <span className="fw500">
                    عدد {" "}
                    </span>
                   حساباتك البنكية
                   </p>
            </div>
          <div className=" row m-0 px-3 pb-3">
          
              <div className=" mx-auto  row m-0   py-2 d-flex justify-content-center align-items-center">
                    <img  src={plus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ accounts:  (this.state.accounts+1) })}/>
                      <input type="number" className={this.state.accounts?"InputCounter mx-2":"InputCounter mx-2 text-muted"} name="accounts" value={this.state.accounts} onChange={this.handleChange}/>
                    <img  src={minus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ accounts:  this.state.accounts-1 })}/>
                </div>
                <div className="line-copy-2 col-8 mx-auto my-3"></div>
                <div className="row m-0 p-0 col-12">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> عدد 
                   {" "}
                   <span className="fw600">
                    الكروت الإئتمانية
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>
                <div className=" col-12 mx-auto  row m-0   py-2 d-flex justify-content-center align-items-center">
                    <img  src={plus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ cards:  (this.state.cards+1) })}/>
                      <input type="number" className={this.state.cards?"InputCounter mx-2":"InputCounter mx-2 text-muted"} name="cards" value={this.state.cards} onChange={this.handleChange}/>
                    <img  src={minus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ cards:  this.state.cards-1 })}/>
                </div>
                <div className="row m-0 px-3 py-3 col-11 mx-auto">
                  
                      
                  {[...Array(this.state.cards)].map((x, i) =>
                      <div className="col-6 text-center p-2 px-3">
                        {this.state.Alldata&&this.state.Alldata[i]?this.state.Alldata[i].BankName?
                      <div className=" bg-white  mx-auto p-0 p-0 borderimg text-center" data-toggle="modal" data-target={`#exampleModalScrollable${i}`}>
                        <img src={this.props.AllBanks[this.state.Alldata[i].BankName].logo} alt="" className=" mx-auto text-center   bgwhite"style={{height:"80%",width:"100%",objectFit:"contain"}} />
                        <p className="fz14 fw600 m-0 fcm">{this.state.Alldata&&this.state.Alldata[i].BankCards&&JSON.parse(this.state.Alldata[i].BankCards).Name}</p>
                        </div>
                        :      
                        <div className="  mx-auto p-0 p-2 borderimg text-center" data-toggle="modal" data-target={`#exampleModalScrollable${i}`}>
                        <img src={AddCreditCard} alt="" className=" mx-auto text-center  imagestyle bgwhite" style={{height:"80%",width:"100%",objectFit:"contain"}}/>
                        <p className="mmt15 fcm fz14  fw600">كرديت كارد {i+1}</p>
                        </div>
                        :      
                        <div className="  mx-auto p-0 p-2 borderimg text-center" data-toggle="modal" data-target={`#exampleModalScrollable${i}`}>
                        <img src={AddCreditCard} alt="" className=" mx-auto text-center  imagestyle bgwhite" style={{height:"80%",width:"100%",objectFit:"contain"}}/>
                        <p className="mmt15 fcm fz14  fw600">كرديت كارد {i+1}</p>
                        </div>
                      }
                        {/* <img src={AddCreditCard} alt="" className=" mx-auto text-center  imagestyle bgwhite" /> */}
                      <div class="modal fade" id={`exampleModalScrollable${i}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                          
                          <div class="modal-body pt-5">
                              <p class="fz28 linetext fcm m-0">تفاصيل الكرديت كارد:</p>
                              <div className="col-12 mx-auto pt-3">
                                    <select className={this.state.Alldata[i]?!this.state.Alldata[i].BankName?"user-field form-control text-muted fz14   ":"user-field form-control fw600 fz20 fcm4 ":"user-field form-control text-muted fz14 "}name="BankName"  onChange={(e)=>this.GetBankCreditCards(e,i)} value={this.state.Alldata[i]&&this.state.Alldata[i].BankName}> 
                                      <option >اسم البنك</option>
                                      {this.props.AllBanks&&this.props.AllBanks.map((x,i)=>{
                                       return <option value={i}  key={i}>{x.Name}</option>

                                      })}
                                    </select> 
                              </div>
                              <div className="col-12 mx-auto py-3 ">
                                    <select className={this.state.Alldata[i]?!this.state.Alldata[i].BankCards?"user-field form-control text-muted fz14   ":"user-field form-control fw600 fz20 fcm4 ":"user-field form-control text-muted fz14 "}name="BankCards"  onChange={(e)=>this.handleChange(e,i)} disabled={this.props.BankCreditsCards?"":"disabled"}> 
                                      <option value="false">نوع الكرديت كارد</option>
                                      {this.props.BankCreditsCards&&this.props.BankCreditsCards[i]&&this.props.BankCreditsCards[i].map((x,i)=>{
                                       return <option value={JSON.stringify(x)} key={i}>{x.Name}</option>
                                      })}
                                    </select> 

                              </div>
                              
                              <div className="col-12   relative">
                                <input type="number" className="user-field form-control fz22 fw600 fcm4 " onChange={(e)=>this.handleChange(e,i)} id={i} name="amount" value={this.state.Alldata[i]&&this.state.Alldata[i].amount} placeholder="الحد الائتماني " />
                                <span className="Pound fz16 text-muted">جنيه</span>
                                <hr className="PoundInputhr" />
                              </div>
                              {this.state.Alldata[i]&&Object.keys(this.state.Alldata[i]).length===3?
                              <p class="fz28 text-muted text-right px-3 py-2  fcm fw600 m-0"  onClick={()=>this.handleSubmit(i)}   >أضف</p>
                              :
                              <p class="fz28 text-muted text-right px-3 py-2  fw600 m-0" >أضف</p>
                              }
                              <p id={`closeModel${i}`} style={{}}  data-target=".modal"  data-dismiss="modal"></p>
                          </div>
                          
                        </div>
                      </div>
                  </div>
                  </div>
                      )}
                  
            </div>
                
          </div>
          
                {this.state.Alldata[0].BankCards&&this.state.Alldata[0].BankCards.length>1?
                <div className="  d-flex align-items-center nextstep" onClick={()=>this.handleStatus("1")}>
                <img src={NextActive} alt="Next" className="mx-2 icon25"/>
                      <p className=" fz24  mt-2 fw600 fcm m-1">التالي</p>
                </div>
                :
                <div className="  d-flex align-items-center nextstep" >
                      <img src={Next} alt="Next" className="mx-2 icon25"/>
                      <p className=" fz24 text-muted mt-2 fw600 m-1">التالي</p>
                </div>
}



          </>
         :
         <>
         {this.state.status==1?
          <>
           <div className="nav     d-flex align-items-center justify-content-center">
            <div className=" col-2 ">
              </div>
                <div className=" col-8 m-0 p-0">
                      <div className="bar mx-auto text-center d-flex  justify-content-between align-items-center p-1">
                      <p className="fcm2 fz12 m-0 d-flex align-items-center justify-content-center px-2 fw600 mt-1 ">2/3</p>
                      <div class="col-9 bg-white barwhite p-0">
                        <div className="barPersonal col-8  fw600 p-0 d-flex align-items-center justify-content-center">
                          <p className="m-0 mt-1  fz12 fw600 ">
                          معلومات مالية
                          </p>
                        </div>
                      </div>
                </div>
              </div>

              
              <div className=" col-2 ">
                <a onClick={()=>this.setState({status:0})}><img src={Path2} alt="" className="icon15  mt-1 " /></a>
              </div>
            </div>

            <div class="row m-0 px-3" >
            <div className="row m-0 p-0 col-12 pt-4">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> عدد 
                  {" "}
                  <span className="fw600">
                   القروض البنكية 
                  </span>
                  <span className=" fw500 fz12">{" "}
                   (إن وجد) 
                   </span>
                  </p>
                  <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>
                <div className=" col-12 mx-auto  row m-0   py-2 d-flex justify-content-center align-items-center">
                    <img  src={plus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ bank:  (this.state.bank+1) })}/>
                      <input type="text" className={this.state.bank?"InputCounter mx-2":"InputCounter mx-2 text-muted"} name="bank" value={this.state.bank} onChange={this.handleChange}/>
                    <img  src={minus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ bank:  this.state.bank-1 })}/>
                </div>
                <div className="line-copy-2 col-8 mx-auto my-3"></div>

                <div className="row m-0 p-0 col-12 ">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> عدد 
                  {" "}
                  <span className="fw600">
                   التسهيلات التمويلية
                  </span>
                  <span className=" fw500 fz12">{" "}
                   (إن وجد) 
                   </span>
                  </p>
                  <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>
                <div className=" col-12 mx-auto  row m-0   py-2 d-flex justify-content-center align-items-center">
                    <img  src={plus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ tshelat:  (this.state.tshelat+1) })}/>
                      <input type="text" className={this.state.tshelat?"InputCounter mx-2":"InputCounter mx-2 text-muted"} name="tshelat" value={this.state.tshelat} onChange={this.handleChange}/>
                    <img  src={minus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ tshelat:  this.state.tshelat-1 })}/>
                </div>
                <div className="line-copy-2 col-8 mx-auto my-3"></div>
                <div className="row m-0 p-0 col-12 ">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> عدد 
                  {" "}
                  <span className="fw600">
                   السيارات المملوكة
                  </span>
                  </p>
                  <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>
                <div className=" col-12 mx-auto  row m-0  pb-5 mb-2 py-2 d-flex justify-content-center align-items-center">
                    <img  src={plus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ cars:  (this.state.cars+1) })}/>
                      <input type="text" className={this.state.cars?"InputCounter mx-2":"InputCounter mx-2 text-muted"} name="cars" value={this.state.cars} onChange={this.handleChange}/>
                    <img  src={minus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ cars:  this.state.cars-1 })}/>
                </div>
                </div>
                

                <div className="  d-flex align-items-center nextstep" onClick={()=>this.handleStatus("2")}>
                <img src={NextActive} alt="Next" className="mx-2 icon25"/>
                      <p className=" fz24  mt-2 fw600 fcm m-1">التالي</p>
                </div>
          </>
          :
          <>
           <div className="nav     d-flex align-items-center justify-content-center">
            <div className=" col-2 ">
              </div>
                <div className=" col-8 m-0 p-0">
                      <div className="bar mx-auto text-center d-flex  justify-content-between align-items-center p-1">
                      <p className="fcm2 fz12 m-0 d-flex align-items-center justify-content-center px-2 fw600 mt-1 ">3/3</p>
                      <div class="col-9 bg-white barwhite p-0">
                        <div className="barPersonal col-8  fw600 p-0 d-flex align-items-center justify-content-center">
                          <p className="m-0 mt-1  fz12 fw600 ">
                          معلومات مالية
                          </p>
                        </div>
                      </div>
                </div>
              </div>

              
              <div className=" col-2 ">
                <a onClick={()=>this.setState({status:0})}><img src={Path2} alt="" className="icon15  mt-1 " /></a>
              </div>
            </div>
          <div className="row m-0 col-12">


            <div className="row m-0 p-0 col-12 pt-4">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> إختار 
                   {" "}
                   <span className="fw600">
                    نوع المسكن
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>

                <div className="col-12 mx-auto px-0 py-3">
                      <select className={this.state.dwelling==0?"user-field form-control text-muted fz14   ":"user-field form-control text-muted fz20 fw600 fcm4  "}  name="dwelling" value={this.state.dwelling} onChange={this.handleChangeNormal} > 
                        <option value="0">إختار</option>
                        <option>شقة - إيجار</option>
                        <option>شقة - تمليك</option>
                        <option>ڤيلا - إيجار</option>
                        <option>ڤيلا - تمليك</option>
                        <option>أخري</option>
                        

                      </select> 
                 </div>
                 <div className="line-copy-2 col-8 mx-auto my-3"></div>
                 <div className="row m-0 p-0 col-12 ">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> رقم 
                   {" "}
                   <span className="fw600">
                    تليفون البيت
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>

                <div className="col-12 px-1 py-2">
                  <input type="number" className=" form-control  user-field  fz22 fw600  fcm4 " placeholder="رقم التليفون"  name="phone1" value={this.state.phone1} onChange={this.handleChangeNormal}/>
               </div>
               <div className="line-copy-2 col-8 mx-auto my-3"></div>
               <div className="row m-0 p-0 col-12 ">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> تفاصيل 
                   {" "}
                   <span className="fw600">
                    شخص الطوارئ
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
                </div>
                <div className="col-12 px-1 py-2">
                  <input type="text" className=" form-control  user-field  fz22 fw600  fcm4 " placeholder="إسم الشخص" name="name" value={this.state.name} onChange={this.handleChangeNormal}/>
               </div>
               <div className="col-12 px-1 py-2">
                  <input type="number" className=" form-control  user-field  fz22 fw600  fcm4 " placeholder="رقم تليفون الشخص "  name="phone" value={this.state.phone} onChange={this.handleChangeNormal}/>
               </div>
               <div className="col-12 px-1 py-2 ">
                      <select className={this.state.Relationship==0?"user-field form-control text-muted fz14   ":"user-field form-control text-muted fz20 fw600 fcm4   "}  name="Relationship" value={this.state.Relationship} onChange={this.handleChangeNormal} > 
                        <option value="0">علاقته بك</option>
                        <option>صديق</option>
                        <option>أب/أم</option>
                        <option>أخ/أخت</option>
                        <option>زوج/زوجة</option>
                        <option>قريب</option>
                        <option>أخري</option>
                      </select> 
                 </div>

            </div>
            {this.state.Relationship&&this.state.name&&this.state.phone&&this.state.phone1&&this.state.dwelling?
                
                 <Link to="/Work" className="  d-flex align-items-center py-2" >
                 <img src={NextActive} alt="Next" className="mx-2 icon25"/>
                       <p className=" fz24  mt-2 fw600 fcm m-1">التالي</p>
                 </Link>
:           <div  className="  d-flex align-items-center py-2" >
                      <img src={Next} alt="Next" className="mx-2 icon25"/>
                      <p className=" fz24 text-muted mt-2 fw600 m-1">التالي</p>
                </div>
               
  }
            {/* <div className="col-12 mx-auto py-3">
                      <select className="user-field form-control text-muted fz14   " > 
                        <option>شقة - إيجار</option>
                      </select> 
                 </div>
                 <div className="line-copy-2 col-8 mx-auto my-3"></div>

                 <p className="fz20 fcm col-8 m-0 p-0"> رقم 
                  {" "}
                  <span className="fw600">
                   تليفون البيت
                  </span>
                </p>

                 */}
          </>





         }
         </>
         
         
         
         }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calcRedult: state.User.calcRedult,
    AllBanks:state.Bank.AllBanks,
    BankCreditsCards:state.Bank.BankCreditsCards
  };
}
const mapDispatchToProps = ({
  GetAllBanks,
  GetBankCreditCards
})
export default connect(mapStateToProps, mapDispatchToProps)(Personal);
