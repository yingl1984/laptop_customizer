import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'

class VideoCard extends Component{
    // props: 
    // <VideoCard videoCard={this.props.features['Video Card']}
    // selectedVideoCard={this.selected['Video Card']}/>
    static defaultProps={videoCard:[]}
    render(){
        const option=this.props.videoCard.map(item => {
        const itemHash = slugify(JSON.stringify(item));
        
            return(
                <div key={itemHash} className="feature__item">
                    <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    checked={item.name ===this.props.selectedVideoCard.name}
                    onChange={() => this.props.onChange("Video Card", item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>
            )
        });

        return(
        <fieldset className="feature">
          <legend className="feature__name">
            <h3>Video Card</h3>
          </legend>
          {option}
        </fieldset>
        )      
    }
}

export default VideoCard