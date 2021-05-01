//Symptom登録ページ
import styled from "styled-components";
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class AddSymptom extends Component {
constructor(props){
  super(props);
  this.state = {
    lists:[],
    symptom:"",
    start:"",
    progress:"",
    done:"",
    comment: "",
    condition:"",
    uname:""
}

}
  render() {
    return (
      <SForm>
        <Sh1>症状の登録</Sh1>
          <Ptext>症状を選ぶ</Ptext>
          <select name="symptom" name="symptom" onChange={this.handleChange}　value={this.state.symptom}>
               {/* option valueの値＝Symptom.Nameからmap関数で回して取得予定 */}
               <option value=""></option>
               <option value="A">症状A</option>
               <option value="B">症状B</option>
               <option value="C">症状C</option>
           </select>
           <Ptext>いつから感じたか</Ptext>
          <input type="date" name="start" onChange={this.handleChange} value={this.state.start}/>
          <Ptext>いつ治ったか</Ptext>
          <input type="date" name="done" onChange={this.handleChange} value={this.state.done}/>
          <Ptext>治療中</Ptext>
          {/* not 必須事項 */}
          <input type="checkbox" name="progress" id="progress" value="1"  checked={this.state.progress === "1"} onChange={this.handleChange}/>
          <Ptext>今の状態</Ptext>
          <input type="range" name="condition" min="0" max="10" onChange={this.handleChange} value={this.state.condition}/>
          <Ptext>コメント</Ptext>
          <input type="text" name="comment" onChange={this.handleChange} value={this.state.comment}/>
          <Ptext>ユーザー名</Ptext>
          <input type="text" name="uname" onChange={this.handleChange} value={this.state.uname}/>
          <SButton onClick={this.handleSubmit}>
            登録
          </SButton>

          {this.state.lists.map((l)=>(
          <div key={l.uname}>
            <p>症状名:{l.symptom}</p>
            <p>いつから感じたか:{l.start}</p>  
            <p>いつ治ったか：{l.done}</p>  
            <p>治療中:{l.progress}</p>  
            <p>評価:{l.condition}</p>  
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      lists: [
          ...this.state.lists,
          { 
            symptom:this.state.symptom,
            start:this.state.start,
            done:this.state.done,
            progress: this.state.progress,
            condition:this.state.condition,
            comment: this.state.comment,
            uname:this.state.uname
          }],
          symptom:"",
          start:"",
          done:"",
          progress: "",
          condition:"",
          comment:"",
          uname:""
  });
}}

export default AddSymptom;

const SForm = styled.form`
    display:flex;
    flex-direction:column;
    width:300px;
    height:100%;
    margin:auto;
    padding-top:15px;
`

const Ptext = styled.p`
    background-color:skyblue;
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