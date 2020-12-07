import React, { Component } from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'

class Display extends Component{
    // props: 
    // <Display display={this.props.features.Display}
    // selectedDisplay={this.selected.Display}/>
    static defaultProps={display:[]}
    render(){
        const option=this.props.display.map(item => {
            const itemHash = slugify(JSON.stringify(item));
        
            return(
                <div key={itemHash} className="feature__item">
                    <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    
                    checked={item.name ===this.props.selectedDisplay.name}
                    // onChange={e => this.updateFeature(feature, item)}
                    onChange={() => this.props.onChange("Display", item)}
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
            <h3>Display</h3>
          </legend>
          {option}
        </fieldset>
        )
    }
}

export default Display