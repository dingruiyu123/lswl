import React,{Component} from 'react'
import './shou.css'
import {NavLink} from 'react-router-dom'
export default class Shou extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <ul className="list">
                   <li className="li"><NavLink to="/manage/shou">收礼</NavLink></li>
                   <li className="lis"><NavLink to="/manage/song">送礼</NavLink></li>
                </ul>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    )
}
}
