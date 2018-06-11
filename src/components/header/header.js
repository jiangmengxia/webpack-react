import './header.less';
import React, {Component} from 'react';

export default class Head extends Component{
    constructor(props){
        super(props);
        this.state = {
          username:'MIA YU',
          title:'G2 DEMO',
          show:false
        }
    }

    over(){
        this.setState({show:true});
    }

    listOver(){
        this.setState({show:true});
    }

    out(){
        this.setState({show:false});
    }

    listOut(){
        this.setState({show:false});
    }

    render(){
        let {username, title, show} = this.state;
        let demoListCls = 'show';
        if(!show){
            demoListCls = 'hide';
        }
        return(
            <div className='app-head'>
              <span className='title'>{title}</span>
              <a className='name' href='https://github.com/yomonah' target="_blank"><i className='fa fa-github'></i>{username}</a>
              <a className='jianshu' href='http://www.jianshu.com/u/b344d2977570' target="_blank" title='简书'>SIMPLE BOOK</a>
              <a className='blog' href='https://github.com/yomonah' target="_blank" onMouseOver={this.over.bind(this)} onMouseOut={this.out.bind(this)}>DEMO
                <ul className={'demo-list ' +demoListCls} onMouseOver={this.listOver.bind(this)} onMouseOut={this.listOut.bind(this)}>
                    <a href='https://yomonah.github.io/project/reactDemo/app.html'>REACT DEMO</a>
                    <a href='https://yomonah.github.io/project/g2Demo/index.html'>G2 DEMO</a>
                </ul>
              </a>
              <a className='home' href='https://yomonah.github.io/' title='主页'>HOME</a>
            </div>
        )
    }
}