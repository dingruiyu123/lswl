import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/header/header'
import Home from '../component/home/Home'
import Director from '../component/director/director'
import Manage from '../component/Manage/Manage '
import About from '../component/about/about'
import Shou from '../component/shou/shou'
import Song from '../component/song/song'
import Dai from '../component/dai/dai'
import Yi from '../component/yi/yi'
import Index from './index.css'
function router() { 
    return(
        <div id="box">
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/manage' component={Manage}/>
                <Route path='/director' component={Director}/>
                <Route path='/about' component={About}/>
                <Route component={Home}/>
                <Route component={Shou}/>
                <Route component={Song}/>
                <Route component={Dai}/>
                <Route component={Yi}/>
            </Switch>
        </div>
    )
 }

  export default router