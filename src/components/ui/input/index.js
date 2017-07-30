import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Input extends React.Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        error: PropTypes.string
    };

    constructor(props) {
        super(props);

       // const { value } = this.props;
       // this.state = { value };

     this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const { value } = event.target;

       // console.log(value);
       // this потеря без привязки
       this.props.onChange('123');
        //this.props.test = 'chahgetest';
      //console.log(this.props.test);
       //this.setState({ value });
    }

    render() {
        const divClasses = classnames({
            'form-group': true,
            'has-error': this.props.error ? true : false
        });

       // const { value } = this.props;

        return (
            <div className={ divClasses }>
                <input
                    type={this.props.test}
                  //  value={ value } //this.props.value todoName
                    onChange={ this.handleChange }
                    className='form-control'

                />
                { this.props.error ? <span className='help-block'>{ this.props.error }</span> : null }
            </div>
        );
    }

}
