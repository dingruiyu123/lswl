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
import She from '../component/she/she'
import Fan from '../component/fan/fan'
import Bang from '../component/bang/bang'
import Fen from '../component/fen/fen'
import Guan from '../component/guan/guan'
import Lei from '../component/lei/lei'
import Index from './index.css'


function router() { 
    return(
        <div id="box">
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/manage' component={Manage}/>
                <Route exact path='/director' component={Director}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/manage/shou' component={Shou}/>
                <Route exact path='/manage/song' component={Song}/>
                <Route exact path='/director/dai' component={Dai}/>
                <Route exact path='/director/yi' component={Yi}/>
                <Route exact path='/about/she' component={She}/>
                <Route exact path='/about/fan' component={Fan}/>
                <Route exact path='/about/bang' component={Bang}/>
                <Route exact path='/about/guan' component={Guan}/>
                <Route exact path='/about/fen' component={Fen}/>
                <Route exact path='/lei' component={Lei}/>
                <Route component={Home}/>
                <Route component={Shou}/>
                <Route component={Song}/>
                <Route component={Dai}/>
                <Route component={Yi}/>
                <Route component={She}/>
                <Route component={Fan}/>
                <Route component={Bang}/>
                <Route component={Guan}/>
                <Route component={Fen}/>
                <Route component={Lei}/>
            </Switch>
        </div>
    )
 }

  export default router