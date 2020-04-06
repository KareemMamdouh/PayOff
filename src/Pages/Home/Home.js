import React from 'react';
import './Home.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import icon1 from '../../Images/icon1.png';
import calculator from "../../Images/calculator.png";
import { Calculate } from '../../redux/actions/index';
import credit from '../../Images/credit.png';
import SAVE from '../../Images/SAVE.png';
import Monthly from '../../Images/Monthly.png';
import iScore from '../../Images/iScore.png';


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
        <header>
              <div className="row m-0 py-3 "> 
                <div className="col-5 p-3 text-center">
                    <img src={credit} alt="icon1" className=" img-fluid" />
                </div>
                <div className="col-7  d-flex align-items-center p-0">
                        <div>
                          <p className="fcm  fz28 m-0 fw600">كريديت فينز</p>
                          <p className="fcm  fz16  m-0">الحل المثالي لديون كروت الائتمان</p>
                          <p className="fcm  fz14 fw600 m-0  ">أسرع! أبسط! أوفر! وبدون فوائد!</p>
                        </div>
                </div>
              </div>
        </header>
        <div className="bg-white p-4  mx-auto">
              <p  className="fcm  fz16 fw600  ">تغلب على مشاكل دين كروت الائتمان بسهولة، وسيطر على أمورك من جديد</p>       
              <p  className="fcm  fz12  m-0 ">كريديت فينز هو أول تطبيق ذكي لإدارة ديون كروت الائتمان، بيساعدك توفر فلوسك عن طريق إدارة دين كرت الائتمان وبيسدده أسرع وأوفر من البنك. وسواء كان الi-Score بتاعك عالي أو لأ، احنا بنغطيك بخطط بسيطة، وأقساط شهرية ثابتة وبدون فوائد مركبة.</p>       
        </div>
        <div className=" p-4 mx-auto bgcm">
              <p  className="fcm  fz28 fw600  ">مصلحتك تهمنا</p>       
              <div className="row m-0  text-right">
                <div className="col-9 py-3">
                  <p  className="fcm  fz16 fw600 m-0 ">معانا أكيد هتوفر فلوسك </p>       
                  <p  className="fcm  fz16  m-0 ">مع كريديت فينز، هتدفع ديون الكريديت بدون فوائد مركبة أو أي رسوم خفية.</p>       
                </div>
                <div className="col-3 py-3">
                  <img src={SAVE} alt="icon1" className=" img-fluid" />
                </div>   
                <div className="line-copy-2 col-10 px-5 mx-auto "></div>

                <div className="col-3 py-3">
                  <img src={Monthly} alt="icon1" className=" img-fluid" />
                </div>  
                <div className="col-9 py-3">
                  <p  className="fcm  fz16 fw600 m-0 ">أقل قسط شهري </p>       
                  <p  className="fcm  fz16  m-0 ">أقل أقساط سداد ثابتة ومجدولة وتنبيهات ذكية بمواعيد السداد</p>       
                </div>
                <div className="line-copy-2 col-10 px-5 mx-auto "></div>

                <div className="col-9 py-3">
                  <p  className="fcm  fz16 fw600 m-0 ">علّي الآي سكور بتاعك  </p>       
                  <p  className="fcm  fz16  m-0 ">بعد تسديد دين كروت الائتمان عن طريق تطبيق كريديت فينز الذكي، نقاط ائتمانك  هتزيد والi-Score هيتحسن!</p>       
                </div>
                <div className="col-3 py-3">
                  <img src={iScore} alt="icon1" className=" img-fluid" />
                </div> 
              </div>

        </div>

        <div className="bg-white py-4 px-2 mx-auto">
              <p  className="fcm  fz28 fw600 mb-1 ">إعرف الفرق</p>       
                <div className="row m-0">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" style={{width:140}}></th>
                        <th scope="col" className="fcm fz14 fw600 ">كريديت فينز</th>
                        <th scope="col" className="fcm fz14 fw600">البنك</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="fcm fz14 fw500">معدل الفائدة الشهرية</th>
                        <td className="b_t_T text-white fw600  fz12">رسوم ثابتة بس</td>
                        <td className="fcm fz12 fw600">2.5٪ – 2.99٪</td>
                      </tr>
                      <tr>
                        <th scope="row" className="fcm fz14 fw500">فترة السداد</th>
                        <td className=" text-white fw600  fz12">من سنة ل٣ سنين</td>
                        <td className="fcm fz12 fw600">دايرة مبتخلصش</td>
                      </tr>
                      <tr>
                        <th scope="row" className="fcm fz14 fw500">رسوم خفية</th>
                        <td className=" text-white fw600  fz12">مفيش</td>
                        <td className="fcm fz12 fw600">متنوعة</td>
                      </tr>
                      <tr>
                        <th scope="row" className="fcm fz14 fw500">رسوم التأخر في السداد</th>
                        <td className=" text-white fw600  fz12">مفيش</td>
                        <td className="fcm fz12 fw600">موجودة</td>
                      </tr><tr>
                        <th scope="row" className="fcm fz14 fw500">شروط الi-score</th>
                        <td className=" text-white fw600  fz12">مفيش شروط </td>
                        <td className="fcm fz12 fw600">لازم يكون عالي</td>
                      </tr><tr>
                        <th scope="row" className="fcm fz14 fw500">معرفة العرض الخاص بك</th>
                        <td className=" text-white fw600  fz12">بسيطة وفي دقائق</td>
                        <td className="fcm fz12 fw600">معقدة وبتاخد أيام</td>
                      </tr>
                      <tr>
                        <th scope="row" className="fcm fz14 fw500 ">التواجد والاتصال</th>
                        <td className="text-white fw600 fz12 b_t_B">24 ساعة ⨉ 7 أيام</td>
                        <td className="fcm fz12 fw600">أيام العمل فقط</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

        </div>
        <div className="d-flex flex-column align-items-center col-12 x-auto">
          <div className="contenthvh33 p-2 pt-4 ">
            <p className="fz34 fcm d-block m-0">إنضم لعملائنا الأن!
          </p>
            <p className="fz22 d-block fw600 fcm">
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
          <div className=" p-2  mx-auto  d-block  p">
            <img src={icon1} alt="icon1" className="savingMony" />
          </div>
          <div className=" p-2 text-center d-flex align-items-center col-12 mx-auto pt-4">
            <div className="  col-12 mx-auto">

              <p className="fz16 fcm  m-0 mb-1">
                شوف إنت كمان ممكن توفر قد إيه!
            </p>
              <div class=" px-2  mx-auto ">

                <div className="px-2 relative">
                  <input type="number" className="user-field form-control fz22 fw600 fcm " onChange={this.handleChange} value={this.state.amount} placeholder="مديونية الكرديت كارد؟ " />
                  <span className="Pound fz16 text-muted">جنيه</span>
                  <hr className="PoundInputhr" />
                </div>
                {this.state.erroramount ? <div style={{ fontSize: 12, color: "red" }} className="py-1 m-0">
                  {this.state.erroramount}
                </div> : ''}

                <div className="btn p-2 bgcm2  my-4  w-100  d-flex justify-content-between" onClick={this.handleCalc}>
                  <p className="icon20 m-0 " ></p>
                  <p className="m-0 fcm2 fz20 fw600 m-0 mt-1">إحسب هتوفر كام
                    </p>
                  <img src={calculator} alt="calculator" className="icon20  " style={{ marginTop: 2 }} />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className=" p-4 mx-auto bgcm2">
          <p  className="text-white  fz20 fw600  ">احنا مين؟</p>       
          <p  className="text-white  fz12 m-0  ">احنا زيك، بنستخدم كروت الائتمان، بعضنا كمان كان ضحية لديون الائتمان المتراكمة لسنوات طويلة.احنا فريق محترف في تقديم الخدمات المالية، مكون من باحثين، مبرمجين ومحللي بيانات. 
          مهمتنا هي حل مشاكل ديون كروت الائتمان بشكل نهائي. حللنا وفهمنا الدورة المعقدة لطريقة عمل كروت الائتمان وطلعنا بحل عملي مبتكر علشان توفر فلوسك، وتخلص من ديونك ببساطة في أسرع وقت ممكن.</p>       

        </div>
        <div className=" p-4 mx-auto bgcm">
          <p  className="fcm  fz20 fw600  mb-1">آراء عملائنا</p> 
          <p className="fcm  fz12  fw600  m-0">تاخدوا "10/10"</p>      
          <p  className="fcm  fz12   mb-1 ">كان معايا كرتين ائتمان بفوايد عالية، Credit Fins سددهم الاتنين بالكامل للبنك، ودلوقت أنا بسدد لهم بقسط أقل بكتير من القسط الشهري اللي كنت بدفعه للبنك وكمان بفايدة أقل وبدون أي رسوم مستخبية.</p>       
          <p className="fcm  fz12  fw600  m-0">@M.Labib</p>      
          <div className="line-copy-2 col-5 my-2 mb-3 mx-auto "></div>
          <p className="fcm  fz12  fw600  m-0">"قرار سهل ومش محتاج تفكير"</p>      
          <p  className="fcm  fz12  mb-1  ">التعامل مع فريق Credit Fins سهل وسريع جدا,  دلوقت أنا عندي قسط واحد ثابت  أسدده وكمان لو نسيت بيبعتولي notifications يفكروني من غير أي غرامات.شكراً ليكم! ناس محترمة بجد</p>       
          <p className="fcm  fz12  fw600  m-0">@G.Mostafa</p> 
        </div>
        <footer className=" px-4 py-3 mx-auto bgcm2 d-flex align-items-center justify-content-between">
            <p  className="fcm2  fz12  m-0  ">Copyrights reserved, 2020

</p>
            <p  className="fcm2  fz12  m-0 ">CreditFins.com

</p>

        </footer>
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
