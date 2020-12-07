import React, { Component } from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'

class Processor extends Component{
    // props: 
    // processor={this.props.features.Processor} 
    // selectedProcess={this.selected.Processor}
    static defaultProps={processor:[]}
    render(){
      
        const option=this.props.processor.map(item => {
            const itemHash = slugify(JSON.stringify(item));
        
            return(
                <div key={itemHash} className="feature__item">
                    <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    // name={slugify(feature)}
                    checked={item.name === this.props.selectedProcess.name}
                    // onChange={e => this.updateFeature(feature, item)}
                    onChange={() => this.props.onChange("Processor", item)}
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
            <h3>Processor</h3>
          </legend>
          {option}
        </fieldset>
        )
    }
}

export default Processor