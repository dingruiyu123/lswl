import React,{Component} from 'react'
import './she.css'
import {NavLink} from 'react-router-dom'
export default class She extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
             <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/about">返回</NavLink></p>
                <p className="shezhi">设置</p>
            </div>
            <ul className="jian">
               <li>检查更新</li>
               <li>初始化</li>
               <li>密码锁</li>
               <li>记账提醒</li>
            </ul>
        </div>
    )
}
}