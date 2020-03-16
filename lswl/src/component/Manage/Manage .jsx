import React,{Component} from 'react'
import './Manage.css'
import {NavLink} from 'react-router-dom'
export default class Shou extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <div style={{backgroundColor:'#fff',height:'30px',lineHeight:'30px',padding:'10px 0px'}}>
                <p className="fh"><NavLink to="/">返回</NavLink></p>
                <ul className="list">
                   <li className="li"><NavLink to="/manage/shou">收礼</NavLink></li>
                   <li className="lis"><NavLink to="/manage/song">送礼</NavLink></li>
                </ul>
            </div>
            <ul className="list2">
                <li className="one"><NavLink to="/">类别</NavLink></li>
                <li className="one">时间</li>
                <li className="one">金额</li>
            </ul>
            <div className="bottom">
                <div className="two">
                    <p className="ming">
                      <span className="lei">类目名称</span>
                      <span className="red">15000.00</span>
                    </p>
                    <p className="ming">
                       <span className="xing">姓名</span>
                       <span className="shi">10人送礼  2016.5.21</span>
                    </p>
                </div>
                <div className="two">
                    <p className="ming">
                      <span className="lei">类目名称</span>
                      <span className="red">15000.00</span>
                    </p>
                    <p className="ming">
                       <span className="xing">姓名</span>
                       <span className="shi">10人送礼  2016.5.21</span>
                    </p>
                </div>
                <div className="two">
                    <p className="ming">
                      <span className="lei">类目名称</span>
                      <span className="red">15000.00</span>
                    </p>
                    <p className="ming">
                       <span className="xing">姓名</span>
                       <span className="shi">10人送礼  2016.5.21</span>
                    </p>
                </div>
                <div className="two">
                    <p className="ming">
                      <span className="lei">类目名称</span>
                      <span className="red">15000.00</span>
                    </p>
                    <p className="ming">
                       <span className="xing">姓名</span>
                       <span className="shi">10人送礼  2016.5.21</span>
                    </p>
                </div>
                <div className="two">
                    <p className="ming">
                      <span className="lei">类目名称</span>
                      <span className="red">15000.00</span>
                    </p>
                    <p className="ming">
                       <span className="xing">姓名</span>
                       <span className="shi">10人送礼  2016.5.21</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
}
