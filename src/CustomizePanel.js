import React, { Component } from 'react';
import Processor from './Processor'
import OS from './OS'
import VideoCard from './VideoCard'
import Display from './Display'


class CustomizePanel extends Component{
    // props:
    //<CustomizePanel features={this.props.features} selected={this.state.selected}/>
    render(){
        
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Processor processor={this.props.features.Processor} 
                            selectedProcess={this.props.selected.Processor}
                            onChange={this.props.onChange}/>
                <OS os={this.props.features['Operating System']}
                    selectedOs={this.props.selected['Operating System']}
                    onChange={this.props.onChange}/>
                <VideoCard videoCard={this.props.features['Video Card']}
                            selectedVideoCard={this.props.selected['Video Card']}
                            onChange={this.props.onChange}/>
                <Display display={this.props.features.Display}
                        selectedDisplay={this.props.selected.Display}
                        onChange={this.props.onChange}/>
            </form>
        )
        
    }
}

export default CustomizePanel