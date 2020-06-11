import React,{Component} from 'react'
import { Button ,message} from 'antd'
import './App.less'

export default class App extends Component{

    handlerClick= ()=>{
        message.success("success!")
    }
    render(){
        return  <Button type="primary" onClick={this.handlerClick}>Button</Button>
    }
}