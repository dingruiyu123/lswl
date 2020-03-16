import React,{Component} from 'react'
import './fan.css'
import {NavLink} from 'react-router-dom'
export default class Fan extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
           <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/about">返回</NavLink></p>
                <p className="fankui">建议反馈</p>
            </div>
            <input type="text" className="inpt" placeholder="感谢您对礼尚往来的支持,点击输入反馈信息...">
               
            </input>
            <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="you">邮箱:</p>
                <input type="text" className="input"></input>
            </div>
        </div>
    )
}
}