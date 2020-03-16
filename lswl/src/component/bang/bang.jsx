import React,{Component} from 'react'
import './bang.css'
import {NavLink} from 'react-router-dom'
export default class Bang extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
             <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/about">返回</NavLink></p>
                <p className="bangmang">帮助</p>
            </div>
            <ul className="ruhe">
               <li>通过礼尚往来记账记事的好处</li>
               <li>如何记账</li>
               <li>如何记事</li>
               <li>如何发请帖</li>
               <li>如何看盈亏</li>
               <li>如何计算婚宴预订桌数</li>
            </ul>
        </div>
    )
}
}