import React,{Component} from 'react'
import './fen.css'
import {NavLink} from 'react-router-dom'
export default class Fen extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
             <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/about">返回</NavLink></p>
                <p className="fenxiang">分享给好友</p>
            </div>
            <div className="tong">通过推荐让您的其他朋友知道礼尚往来</div>
            <ul className="wxhy">
               <li>微信好友</li>
               <li>QQ好友</li>
               <li>微信朋友圈</li>
               <li>通讯录好友</li>
            </ul>
        </div>
    )
}
}