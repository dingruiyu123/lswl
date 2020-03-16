import React,{Component} from 'react'
import './about.css'
import {NavLink} from 'react-router-dom'
export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="wo">我的</p>
            </div>
            <div style={{backgroundColor:'#fff',height:'88px',lineHeight:'88px',marginTop:'10px'}}> 
                <span className="yuan"></span>
                <span className="qq">调用QQ,微信昵称</span>
            </div>
            <ul className="list5">
               <li><NavLink to="/about/she">设置</NavLink></li>
               <li><NavLink to="/about/fan">反馈</NavLink></li>
               <li><NavLink to="/about/bang">帮助</NavLink></li>
               <li><NavLink to="/about/guan">关于</NavLink></li>
               <li><NavLink to="/about/fen">分享</NavLink></li>
            </ul>
        </div>
    )
}
}
