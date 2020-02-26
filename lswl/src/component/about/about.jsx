import React,{Component} from 'react'
import './about.css'
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
               <li>设置</li>
               <li>反馈</li>
               <li>帮助</li>
               <li>关于</li>
               <li>分享</li>
            </ul>
        </div>
    )
}
}
