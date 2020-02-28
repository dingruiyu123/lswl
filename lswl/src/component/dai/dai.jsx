import React,{Component} from 'react'
export default class Dai extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
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
                      <span className="dai">已参加</span>
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