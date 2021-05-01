//Condition登録ページ
import styled from "styled-components";
import React, { Component } from 'react';

class AddCondition extends Component {
constructor(props){
  super(props);
  this.state = {
    lists:[],
    condition:"",
    start:"",
    done:"",
    diagnosis: "",
    hospital:"",
    comment: "",
    uname:""
}

}
  render() {
    return (
      <SForm>
        <Sh1>Condition登録</Sh1>
  
          <Ptext>病名を選ぶ</Ptext>
          <select name="condition" id="condition" onChange={this.handleChange}　value={this.state.condition}>
               {/* option valueの値＝Condition.Nameからmap関数で回して取得予定 */}
               <option value=""></option>
               <option value="A">病名A</option>
               <option value="B">病名B</option>
               <option value="C">病名C</option>
           </select>
           <Ptext>いつから感じたか</Ptext>
          <input type="date" name="start" onChange={this.handleChange} value={this.state.start}/>
          <Ptext>いつ診断されたか</Ptext>
          <input type="date" name="diagnosis" onChange={this.handleChange} value={this.state.diagnosis}/>
          <Ptext>今病院に通っているか</Ptext>
          {/* セレクトに変更 */}
          <select name="hospital" name="hospital" id="hospital" onChange={this.handleChange}　value={this.state.hospital}>
               {/* option valueの値＝Condition.Nameからmap関数で回して取得予定 */}
               <option value=""></option>
               <option value="A">通っている</option>
               <option value="B">通っていない</option>
               <option value="C">通っていないが病気だと感じている</option>
           </select>
          <Ptext>治療完了</Ptext>
          {/* not 必須事項 */}
          <input type="checkbox" name="done" id="done" value="1"  checked={this.state.done === "1"} onChange={this.handleCheckboxChange}/>
          <Ptext>コメント</Ptext>
          <input type="text" name="comment" onChange={this.handleChange} value={this.state.comment}/>
          <Ptext>ユーザー名</Ptext>
          <input type="text" name="uname" onChange={this.handleChange} value={this.state.uname}/>
          <SButton onClick={this.handleSubmit}>
            登録
          </SButton>

          {this.state.lists.map((l)=>(
          <div key={l.uname}>
            <p>病名:{l.condition}</p>
            <p>いつから感じたか:{l.start}</p>  
            <p>いつ診断されたか:{l.diagnosis}</p>  
            <p>治療完了:{l.done}</p>  
            <p>今病院に通っているか:{l.hospital}</p>  
            <p>コメント:{l.comment}</p>  
            <p>ユーザー名:{l.uname}</p>  
          </div>        
          ))}
      </SForm>
    );
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleCheckboxChange = (event) =>{
    this.setState({[event.target.name]:this.state.confirm==="1"?"0":"1"})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      lists: [
          ...this.state.lists,
          { 
            condition:this.state.condition,
            start:this.state.start,
            done:this.state.done,
            diagnosis: this.state.diagnosis,
            hospital:this.state.hospital,
            comment: this.state.comment,
            uname:this.state.uname
          }],
          condition:"",
          start:"",
          done:"",
          diagnosis: "",
          hospital:"",
          comment:"",
          uname:""
  });
}}

export default AddCondition;

// //-------------
// export class AddCondition extends React.Component{
//     constructor(props) {
//         super(props);
//         // formに初期値を設定したい場合は書いておく
//         this.state = {
//           start:"",
//           done:"",
//           diagonosis: "",
//           hospital:"",
//           comment: "",
//         };
//         this.handleInputChange = this.handleInputChange.bind(this);

        
//     const {onClick} = props;
//     return(
//         <div>
//            <h1>Condition登録</h1>
//            <SForm>
//            <select name="condition" value={this.state.condition} onChange={this.handleInputChange}>
//                {/* option valueの値＝Condition.Nameからmap関数で回して取得予定 */}
//                <option value="A">病名A</option>
//                <option value="B">病名B</option>
//                <option value="C">病名C</option>
//            </select>
//            <input placeholder ="いつから感じたか" 
//                   type="text" 
//                   name="start"
//                   value={this.state.start}
//                   onChange={this.handleInputChange}/>
//            <input placeholder ="いつ診断されたか" 
//                    type="text" 
//                    name="diagonosis"
//                    value={this.state.diagonosis}
//                    onChange={this.handleInputChange}/>
//            <input placeholder ="治療完了" 
//                     type="text" 
//                     name="done" 
//                     value={this.state.done}
//                     onChange={this.handleInputChange}/>
//            <input placeholder ="今病院に通っているか" 
//                   type="text" 
//                   name="hospital" 
//                   value={this.state.hospital}
//                   onChange={this.handleInputChange}/>
//            <input placeholder ="フリーコメント" 
//                   type="text" 
//                   name="comment" 
//                   value={this.state.comment}
//                   onChange={this.handleInputChange}/>
//            <button onClick={onClick}>登録</button>
//            </SForm>
//         </div>  
//     )
// }
// handleInputChange(event) {
//     const target = event.target;
 
//     // name属性の値を取得
//     const name = target.name;
 
//     // name属性の値と同じ名前のstateを、現在入力されている値に更新する
//     this.setState({
//       [name]: target.value
//     });
//   }
// }
const SForm = styled.form`
    display:flex;
    flex-direction:column;
    width:300px;
    height:100%;
    margin:auto;
    padding-top:15px;
`

const Ptext = styled.p`
    background-color:#abedd8;
`
const Sh1 = styled.h1 `
    margin:0;
    font-size:20px;
`
const SButton = styled.button`
    padding:6px 24px:
    border:none;
    border-radius:9999px;
    width:100px;
    background-color:skyblue;
    &:hover{
      cursor:pointer;
      opacity:0.8;
    }
`