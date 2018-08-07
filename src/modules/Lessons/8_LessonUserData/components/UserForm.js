import React, {Component} from 'react';
import TextInput from './../../../App/shared/TextField';
import DropdownField from './../../../App/shared/DropdownField';
import RadioField from "../../../App/shared/RadioField";
import MultiCheckboxField from "../../../App/shared/MultiCheckboxField";
import SubmitButton from "../../../App/shared/SubmitButton";
import Label from "../../../App/shared/Label";

class UserForm extends Component {
	constructor() {
		super();
		this.state = {
			isSaving: false,
			name: '',
			gender: '',
			genderOptions: [
				{'label': 'Male', 'value': 'M'},
				{'label': 'Female', 'value': 'F'},
			],
			educationOptions: ["Graduation", "Post Grad"],
			education: new Set(),
			country: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	onUpdate(event) {
		const {education} = this.state;

		if (event.target.checked) {
			education.add(event.target.value);
		} else {
			education.delete(event.target.value)
		}

		this.setState({
			[event.target.name]: education,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		this.setState({isSaving: true});
		setTimeout(() => {
			this.setState({isSaving: false});
		}, 5000);
	}

	render() {
		const {name, gender, genderOptions, education, educationOptions, country, isSaving} = this.state;
		return (<form>
				<fieldset>
					<Label labelText="Name"/>
					<TextInput name="name" value={name} onChange={this.onChange} placeholder="Enter your name"/>
				</fieldset>
				<fieldset>
					<Label labelText="Gender"/>
					<RadioField name='gender' value={gender} options={genderOptions} onChange={this.onChange}/>
				</fieldset>
				<fieldset>
					<Label labelText="Education"/>
					<MultiCheckboxField name='education' value={education} options={educationOptions} onChange={this.onUpdate}/>
				</fieldset>
				<fieldset>
					<Label labelText="Country"/>
					<DropdownField name="country" value={country} onChange={this.onChange}/>
				</fieldset>
				<SubmitButton isSaving={isSaving} handleSubmit={this.handleSubmit}/>
			</form>
		);
	}
}

export default UserForm;