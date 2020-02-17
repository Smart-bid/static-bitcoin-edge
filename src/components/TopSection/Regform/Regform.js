import React, {Component} from 'react'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import logo from '../../BottomSection/logo.png'

export default class Regform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                first_name: "",
                last_name: null,
                email: "",
                password: "Qa123456"
            },
            errors: '',
            step: 1
        };
    }

    updateValue(key, value, callback) {
        let obj = {},
            tempForm = this.state.form
        obj[key] = value
        Object.assign(tempForm, obj)
        // debugger

        if (key === 'first_name') {
            var getlName = obj.first_name.split(' ');
            if (getlName.length >= 2) {
                tempForm.first_name = getlName[0]
                tempForm.last_name = getlName[1]
            } else tempForm.last_name = null
        }


        this.setState({
            form: tempForm
        })
    }

    handleForward() {
        let validate = this.props.validateParams(this.state.form)

        if (validate.success) {
            this.props.setLeadData(this.state.form)
                .then(this.setState({
                    step: this.state.step + 1,
                    form: {
                        ...this.state.form,
                        phone_number: this.state.form.phone_number ? this.state.form.phone_number : '',
                    }
                }))
                .then(() => {
                    if (this.state.step === 2) this.props.handleLeadStep()
                })
                .then(() => this.setState({
                    errors: {}
                }))
        } else this.setState({errors: validate.errors})
    }

    handleSubmit() {
        let validate = this.props.validateParams(this.state.form)
        if (validate.success)

            this.props.setLeadData(this.state.form)
                .then(this.setState({loading: true}))
                .then(this.props.handleSubmit)
                .then(res => (res.redirectUrl && res.success) ? window.location = res.redirectUrl : this.setState({responseError: res.error}))
        else this.setState({errors: validate.errors})
    }

    render() {
        const {
            first_name,
            last_name,
            email,
            phone_number
        } = this.state.form;
        let languageManager = this.props.languageManager(),

            errorMsgs = (this.state.errors) ? Object.keys(this.state.errors).map(key => {
                if (this.state.errors[key].messages) return this.state.errors[key].messages
            }).filter(value => value) : []

        if (!this.state.loading) {
            return (
                <div className="Regform">
                    <div className='inner'>

                        {(this.state.step === 1) ?
                            <div className='form-wrapper one'>
                                <div className="errors-messages">
                                    {errorMsgs.map(arr => arr.map(error => <div key={error} className="errors">{error}</div>))}
                                </div>
                                <div className="form-group">
                                    <input className="form-control fname" type="text" name="first_name"
                                           placeholder={languageManager.fname} defaultValue={first_name}
                                           onChange={(e) => this.updateValue(e.target.name, e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control email" type="text" name="email"
                                           placeholder={languageManager.email} defaultValue={email}
                                           onChange={(e) => this.updateValue(e.target.name, e.target.value)}/>
                                </div>
                                <div className="green-arrow"><span> </span></div>
                                <div className="form-group submit-btn">
                                    <button onClick={this.handleForward.bind(this)}
                                            className='registerBtn'>{languageManager.button}</button>
                                </div>
                            </div>
                            : <div className='form-wrapper two'>
                                {errorMsgs.map(arr => arr.map(error => <div key={error} className="errors">{error}</div>))}
                                <div className="gtd-form-wrapper">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" name="first_name" placeholder={languageManager.fname}
                                                       defaultValue={first_name}
                                                       className="form-control gtd-field-fname"
                                                       onChange={(e) => this.updateValue(e.target.name, e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" name="last_name" placeholder={languageManager.lname}
                                                       className="form-control gtd-field-lname" defaultValue={last_name}
                                                       onChange={(e) => this.updateValue(e.target.name, e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder={languageManager.email}
                                               className="form-control gtd-field-email" defaultValue={email}
                                               onChange={(e) => this.updateValue(e.target.name, e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <div className="row" style={{margin: 0}}>
                                            <IntlTelInput
                                                preferredCountries={[this.props.countryCode]}
                                                defaultCountry={this.props.countryCode.toLowerCase()}
                                                containerClassName="intl-tel-input"
                                                inputClassName="inputfield form-control tel"
                                                autoPlaceholder={true}
                                                separateDialCode={true}
                                                value={phone_number}
                                                onPhoneNumberChange={(e, value) => this.updateValue('phone_number', value.replace(/\D/g, ''))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button onClick={this.handleSubmit.bind(this)}
                                            className='registerBtn '>{languageManager.button}</button>
                                </div>
                            </div>}
                    </div>

                </div>
            )
        } else {
            return (
                <div className="Regform">
                    {(this.state.responseError) ?
                        <div className="response-error">
                            <p>{this.state.responseError}</p>
                            <button className="registerBtn"
                                    onClick={() => this.setState({errors: {}, loading: false, step: 1})}>Ok
                            </button>
                        </div>
                        :
                        <img src={logo} alt="lodaing" className="loading"/>}
                </div>
            )
        }
    }
}
