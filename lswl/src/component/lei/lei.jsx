import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './lei.css'
export default class Lei extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/">返回</NavLink></p>
                 <p className="wo">排行榜</p>
            </div>
             <ul className="shijian">
                <li className="ones">按盈亏</li>
                <li className="ones">按收入</li>
                <li className="ones">按支出</li>
            </ul>
            <div id="paih">
					<div id="paihes">
						<span>排行</span>
						<span>用户</span>
						<span>历史盈亏</span>
						<span>本月盈亏</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="paihe">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
				</div>
        </div>
    )
}
}