import React,{Component} from 'react'
import './guan.css'
import {NavLink} from 'react-router-dom'
export default class Guan extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
             <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/about">返回</NavLink></p>
                <p className="guanyu">关于</p>
            </div>
            <div className="tb">
                <div className="tubiao">
                    <div className="bule">icon</div>
                    <div className="liswl">礼尚往来</div>
                    <div className="vi">V1.0.0</div>
                    <div className="nin">您身边的家庭礼尚往来记账管理专家,礼数清晰,礼是提醒,从此不再担忧送礼收礼问题!</div>
                </div>
            </div>
        </div>
    )
}
}