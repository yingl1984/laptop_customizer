import React, { Component } from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'

class OS extends Component{
    // props: {this.props.os}
    static defaultProps={os:[]}
    render(){
        const option=this.props.os.map(item => {
            const itemHash = slugify(JSON.stringify(item));
        
            return(
                <div key={itemHash} className="feature__item">
                    <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    
                    checked={item.name ===this.props.selectedOs.name}
                    // onChange={e => this.updateFeature(feature, item)}
                    onChange={() => this.props.onChange("Operating System", item)}
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
            <h3>Operating System</h3>
          </legend>
          {option}
        </fieldset>
        )
    }
}

export default OS