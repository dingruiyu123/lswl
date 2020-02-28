import React,{Component} from 'react'
import './song.css'
export default class Song extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            <ul className="lie">
                <li className="one">类别</li>
                <li className="one">时间</li>
                <li className="one">金额</li>
            </ul>
            <div className="butt">
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