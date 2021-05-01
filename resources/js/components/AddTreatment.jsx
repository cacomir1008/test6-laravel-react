//Treatment登録ページ
import styled from "styled-components";
import React, { Component } from 'react';

class AddTreatment extends Component {
constructor(props){
  super(props);
  this.state = {
    lists:[],
    treatment:"",
    start:"",
    end:"",
    done:"",
    comment: "",
    evaluate:"",
    uname:""
}

}
  render() {
    return (
      <SForm>
        <Sh1>対処法の登録</Sh1>
          <Ptext>対処法を選ぶ</Ptext>
          <select name="treatment" name="treatment" onChange={this.handleChange}　value={this.state.treatment}>
               {/* option valueの値＝Symptom.Nameからmap関数で回して取得予定 */}
               <option value="A">対処法A</option>
               <option value="B">対処法B</option>
               <option value="C">対処法C</option>
           </select>
           <Ptext>いつから始めたか</Ptext>
          <input type="date" name="start" onChange={this.handleChange} value={this.state.start}/>
          <Ptext>いつまで続けたか</Ptext>
          <input type="date" name="end" onChange={this.handleChange} value={this.state.end}/>
          <Ptext>終了</Ptext>
           {/* セレクトボックスに変更 */}
          <input type="text" name="done" onChange={this.handleChange} value={this.state.done}/>
          <Ptext>評価</Ptext>
          {/* 数値バーに変更 */}
          <input type="range" name="evaluate" onChange={this.handleChange} value={this.state.evaluate}/>
          <Ptext>コメント</Ptext>
          <input type="text" name="comment" onChange={this.handleChange} value={this.state.comment}/>
          <Ptext>ユーザー名</Ptext>
          <input type="text" name="uname" onChange={this.handleChange} value={this.state.uname}/>
          <SButton onClick={this.handleSubmit}>
            登録
          </SButton>

          {this.state.lists.map((l)=>(
          <div key={l.uname}>
            <p>対処法:{l.treatment}</p>
            <p>いつから始めた:{l.start}</p>  
            <p>いつまで続けたか：{l.end}</p>  
            <p>終了:{l.done}</p>  
            <p>評価:{l.evaluate}</p>  
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
            treatment:this.state.treatment,
            start:this.state.start,
            end:this.state.end,
            done: this.state.done,
            evaluate:this.state.evaluate,
            comment: this.state.comment,
            uname:this.state.uname
          }],
          treatment:"",
          start:"",
          end:"",
          done: "",
          evaluate:"",
          comment:"",
          uname:""
  });
}}

export default AddTreatment;

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