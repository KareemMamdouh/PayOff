import React from 'react';
import './Personal.scss';
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


class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:0,
      children:0
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
      <div className="Personal ">
        {this.state.status===0?
        <>
            <div className="nav     d-flex align-items-center justify-content-center">
            <div className=" col-2 ">
              </div>
                <div className=" col-8 m-0 p-0">
                      <div className="bar mx-auto text-center d-flex  justify-content-between align-items-center p-1">
                      <p className="fcm2 fz12 m-0 d-flex align-items-center justify-content-center px-2 fw600 mt-1 ">1/2</p>
                      <div className="barPersonal col-6  fw600 p-0 d-flex align-items-center justify-content-center">
                        <p className="m-0 mt-1  fz12 fw600 ">
                          معلومات شخصية
                        </p>
                    </div>
                </div>
              </div>
              <div className=" col-2 ">
                <Link to="/"><img src={Path2} alt="" className="icon15  mt-1 " /></Link>
              </div>
            </div>
          <div className="py-4 ">
            <div className="row m-0 p-0 ">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0"> تفاصيل 
                   {" "}
                   <span className="fw600">
                    بطاقتك الشخصية 
                   </span>
                   </p>
                   <div className="col-2 p-0"><img src={help} alt="" className="icon20   " /></div>
            </div>
            <div className="row m-0 px-3 py-3">
                  <div className="col-6 p-0 px-2 borderimg">
                  <img src={this.state.img1?URL.createObjectURL(this.state.img1):AddCard} alt="" className=" h-100  w-100  borderimg" onClick={()=>document.getElementById("img1").click()} />
                    <input type="file" name="img1" id="img1" onChange={this.handleSaveImage} style={{display:"none"}}/>
                  </div>
                  <div className="col-6 p-0 px-2 borderimg">
                  <img src={this.state.img2?URL.createObjectURL(this.state.img2):AddCard2} alt="" className=" h-100  w-100  borderimg" onClick={()=>document.getElementById("img2").click()} />
                    <input type="file" name="img2" id="img2" onChange={this.handleSaveImage} style={{display:"none"}}/>

                  </div>
            </div>
          </div>
          <div className=" row m-0 px-3 pt-0 pb-3">
                <div className="col-12 px-1 pb-2">
                    <input type="text" className="user-field form-control fz22 fw600 fcm " placeholder="الإسم بالكامل" />
                </div>
                <div className="col-6 px-1 py-2">
                  <select className="user-field form-control text-muted fz14 fh40  " > 
                    <option>النوع</option>
                    <option>ذكر</option>
                    <option>أنثى</option>

                  </select>                
               </div>
               <div className="col-6 px-1 py-2">
                  <select className="user-field form-control text-muted fz14  fh40 " > 
                    <option>الحالة الاجتماعية</option>
                    <option>أعزب</option>
                    <option>متزوج</option>
                    <option>مطلق</option>
                    <option>أرمل</option>

                  </select>                
               </div>
               <div className="col-12 px-1 pb-2">
                    <input type="text" className="user-field form-control fz22 fw600 fcm " placeholder="العنوان الأساسي" />
                </div>
                <div className="col-6 px-1 py-2">
                  <select className=" form-control user-field text-muted fz14 fh40  " > 
                    <option>المحافظة</option>
                    <option>أسوان</option>
                    <option>أسيوط</option>
                    <option>الأقصر</option>
                    <option>الإسكندرية</option>
                    <option>الإسماعيلية</option>
                    <option>البحر الأحمر</option>
                    <option>البحيرة</option>
                    <option>الجيزة</option>
                    <option>الدقهلية</option>
                    <option>الإسماعيلية</option>
                    <option>السويس</option>
                    <option>الشرقية</option>
                    <option>الغربية</option>
                    <option>الفيوم</option>
                    <option>القاهرة</option>
                    <option>القليوبية</option>
                    <option>المنوفية</option>
                    <option>المنيا</option>
                    <option>الوادي الجديد</option>
                    <option>بني سويف</option>
                    <option>بورسعيد</option>
                    <option>جنوب سيناء</option>
                    <option>دمياط</option>
                    <option>سوهاج</option>
                    <option>شمال سيناء</option>
                    <option>قنا</option>
                    <option>كفر الشيخ</option>
                    <option>مطروح</option>

                  </select>                
               </div>
               <div className="col-6 px-1 py-2">
                  <select className=" form-control user-field text-muted fz14 fh40  " > 
                    <option>المنطقة</option>
                    <option>٦ أكتوبر / الشيخ زايد</option>
                    <option>الجيزة / المنيل</option>
                    <option>قصر النيل / الزمالك</option>
                    <option>مدينتى / الشروق / بدر</option>
                    <option>لعجوزة / الدقي</option>
                    <option>القاهرة الجديدة / التجمع / القطامية / الرحاب</option>
                    <option>المعادي / جاردن سيتي</option>
                    <option>المقطم</option>
                    <option>المهندسين / ميدان لينان</option>
                    <option>المقطم</option>
                    <option>الهرم / فيصل</option>
                    <option>حلوان / المعصرة / طرة</option>
                    <option>مدينة نصر</option>
                    <option>مصر الجديدة / هليوبوليس / المطار</option>
                    <option>مصر القديمة / القصر العيني / السيدة زينب / الخليفة</option>
                    <option>وسط البلد</option>
                    <option>النزهة / الماظة</option>
                    <option>الحلمية / الدرب الأحمر</option>
                    <option>عابدين / العتبة / باب الشعرية</option>
                    <option>عين شمس / الزيتون / المرج</option>
                    <option>العباسية / حدائق القبة</option>
                    <option>مالية / الدراسة / الموسكي</option>
                    <option>الجمالية / الدراسة / الموسكي</option>
                    <option>المنصورية</option>
                    <option>المنيب</option>
                    <option>الحوامدية / العزيزية</option>
                    <option>دهشور / سقارة</option>
                    <option>المريوطية / صفط اللبن</option>
                    <option>امبابة / ميت عقبة</option>
                  </select>                
               </div>
               <p className=" col-12 fcm fz14 m-0 text-right fw600 ">عيد ميلادك</p>
               <div className="col-4 px-1 py-2">
                  <input type="text" className=" form-control user-field fh40 fz20 fw600 fcm " placeholder="السنة" />
               </div>
               <div className="col-4 px-1 py-2">
                  <input type="text" className=" form-control user-field fh40 fz20 fw600 fcm " placeholder="الشهر" />
               </div>
               <div className="col-4 px-1 py-2">
                  <input type="text" className=" form-control  user-field fh40 fz20 fw600 fcm " placeholder="اليوم" />
               </div>
               <p className=" col-12 fcm fz14 m-0 text-right fw600">أخر ٥ أرقام من البطاقة </p>
                <div className=" col-12  text-right ">
                      <input type="text" className=" inputNumber  fh40 fz22 fw600 fcm mx-1" placeholder=" X " maxlength="1" onChange={()=>console.log()}/>
                      <input type="text" className=" inputNumber  fh40 fz22 fw600 fcm mx-1" placeholder=" X "maxlength="1" />
                      <input type="text" className=" inputNumber  fh40 fz22 fw600 fcm mx-1" placeholder=" X " maxlength="1"/>
                      <input type="text" className=" inputNumber  fh40 fz22 fw600 fcm mx-1" placeholder=" X "maxlength="1" />
                      <input type="text" className=" inputNumber  fh40 fz22 fw600 fcm mx-1" placeholder=" X "maxlength="1" />
                </div>
                <div className=" pt-3 d-flex align-items-center " onClick={()=>this.handleStatus("1")}>
                      <img src={Next} alt="Next" className="mx-2 icon25"/>
                      <p className=" fz24 text-muted mt-2 fw600 m-1">التالي</p>
                </div>
          </div>
          </>
         :
         
         <>
            <div className="nav     d-flex align-items-center justify-content-center">
            <div className=" col-2 ">
              </div>
                <div className=" col-8 m-0 p-0">
                      <div className="bar mx-auto text-center d-flex  justify-content-between align-items-center p-1">
                      <p className="fcm2 fz12 m-0 d-flex align-items-center justify-content-center px-2 fw600 mt-1 ">2/2</p>
                      <div className="barPersonal col-6  fw600 p-0 d-flex align-items-center justify-content-center">
                        <p className="m-0 mt-1  fz12 fw600 ">
                          معلومات شخصية
                        </p>
                    </div>
                </div>
              </div>
              <div className=" col-2 ">
                <a onClick={()=>this.setState({status:0})}><img src={Path2} alt="" className="icon15  mt-1 " /></a>
              </div>
            </div>
          <div className="pt-4 ">
            <div className="row m-0 p-0 ">
                  <div className="col-2 p-0"></div>
                  <p className="fz20 fcm col-8 m-0 p-0 fw600"> عدد الأولاد 
                   {" "}
                   <span className=" fw500 fz12">
                   (إن وجد) 
                   </span>
                   </p>
            </div>
            <div className=" mx-auto  row m-0   py-2 d-flex justify-content-center align-items-center">
                <img  src={plus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ children:  (this.state.children+1) })}/>
                  <input type="text" className="InputCounter mx-2" name="children" value={this.state.children} onChange={this.handleChange}/>
                <img  src={minus} alt="" className="icon20  mx-2 " onClick={()=>this.setState({ children:  this.state.children-1 })}/>
            </div>
            <div className="col-8 mx-auto py-3">
                  <select className="user-field form-control text-muted fz14 fh40  " disabled={this.state.children===0?"disabled":''}> 
                    <option>متوسط عمر الأولاد</option>
                    <option>٠ ل ٢ سنة</option>
                    <option>٢ ل ٥ سنين</option>
                    <option>٦ ل ١٢ سنة</option>
                    <option>١٣ ل ١٩ سنة</option>
                    <option>١٩+ سنة</option>

                  </select> 
            </div>
            <div className="line-copy-2 col-8 mx-auto"></div>

            <p className="fz18 fcm col-9 m-0 p-0 fw600 pt-4 mx-auto">
            عندنا عروض خاصة للمؤسسات دي،
            </p>
            <p className=" fw500 fz14 m-0">هل إنت جزء من أي من واحدة فيهم؟  </p>
            <div className="col-10 mx-auto py-3">
                  <select className="user-field form-control text-muted fz14   " > 
                    <option>AUC, GSC, Endeavor</option>
                    <option>AUC</option>
                    <option>GUC</option>
                    <option>Cairo University</option>
                    <option>Ain Shams University</option>
                    <option>Endeavor Network</option>
                    <option>Shooting Club</option>
                    <option>Heliopolis Club</option>
                    <option>Wadi Degla Club</option>

                  </select> 
            </div>
            <img src={happiness} alt="" className="col-5 p-4"/>
            <div className="row m-0 p-0 col-11">
                  <div className="col-2 p-0"></div>
                  <p className="fz14 fcm col-8 m-0 p-0"> كدة خلصنا جزء المعلومات الشخصية 
                   {" "}
                   <span className=" fz20 fw600 d-block">
                   إختار طريقة حفظ معلوماتك 
                   </span>
                   </p>
                   <div className="col-2 p-0 align-items-center d-flex justify-content-center"><img src={help} alt="" className="icon20   " /></div>
            </div>
            <Link to="/FinancialInformation"><img src={facebook} alt="" className="col-9 p-2 mt-2"/></Link>
            <Link to="/FinancialInformation"><img src={google} alt="" className="col-9 p-2 mb-2"/></Link>

          </div>
          
          </>
         
         
         
         
         }

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
export default connect(mapStateToProps, mapDispatchToProps)(Personal);
