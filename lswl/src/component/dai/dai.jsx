import React,{Component} from 'react'
import './dai.css'
import {NavLink} from 'react-router-dom'
export default class Dai extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/">返回</NavLink></p>
                <ul className="list3">
                   <li className="lit"><NavLink to="/director/dai">待参加</NavLink></li>
                   <li className="litt"><NavLink to="/director/yi">已参加</NavLink></li>
                </ul>
            </div>
            <ul className="dcj">
                <li className="three">类别</li>
                <li className="three">时间</li>
            </ul>
            <div className="fot">
                <div className="bott">
                    <p className="ditu">
                      <span className="da">王大锤搬家请客</span>
                      <span className="dai">带参加</span>
                    </p>
                    <p className="ditu">
                      <span className="di">地点名称地点名称</span>
                      <span className="qi">2016.8.21</span>
                   </p>
                </div>
                <div className="bott">
                    <p className="ditu">
                      <span className="da">王大锤搬家请客</span>
                      <span className="dai">带参加</span>
                    </p>
                    <p className="ditu">
                      <span className="di">地点名称地点名称</span>
                      <span className="qi">2016.6.21</span>
                   </p>
                </div>
                <div className="bott">
                    <p className="ditu">
                      <span className="da">王大锤搬家请客</span>
                      <span className="dai">带参加</span>
                    </p>
                    <p className="ditu">
                      <span className="di">地点名称地点名称</span>
                      <span className="qi">2016.5.21</span>
                   </p>
                </div>
            </div>
        </div>
    )
}
}