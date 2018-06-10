const React = require('react');
const cl = require('classnames')
const IconUpdate = require('react-icons/lib/fa/check')
const IconNonUpdate = require('react-icons/lib/ti/cancel')

const {
	TYPE_STRING,
	TYPE_NUMBER,
	TYPE_BOOL,
	TYPES_SCHEMA
} = require('hocs/options')

const RESET_SCHEMA = {}

Object.keys(TYPES_SCHEMA).forEach( key => {
	RESET_SCHEMA[TYPES_SCHEMA] = key
})

const getType = value => {
	switch(true) {
		case (typeof value == 'string'): return TYPE_STRING;
		case (typeof value == 'number' && !isNaN(value)): return TYPE_NUMBER;
		default: return TYPE_BOOL
	}
}



const Input = ({ change, name, type=TYPE_BOOL, value='' }) => {
	switch (type) {
		case TYPE_STRING: return <input autoFocus={true} type="text" defaultValue={value} onChange={e => change(name, e.target.value)} />
		case TYPE_NUMBER: return <input autoFocus={true} type="number" defaultValue={value} onChange={e => change(name, Number(e.target.value))} />
	}
	const id = `_checkbox__${name}_`;
	return (
		<div className="type-bool-form-options">
			<input id={id} 
				type="checkbox" 
				onChange={e => {
					change(name, !!e.target.checked)
					console.log(e.target.checked)
				}} 
				defaultChecked={!!value} />
			<label htmlFor={id}>{(!!value).toString()}</label>
		</div>
	)
}

const Str = ({ value, type }) => (
	<div className={cl('form-option-str',{
		string : type === TYPE_STRING,
		number : type === TYPE_NUMBER,
		bool : type === TYPE_BOOL,
		warn : value === null
	})}>{value === null ? 'NULL' : value.toString()}</div>
)

const ToggleTypes = ({ type, toggle }) => (
	<div className="form-option-type">
		{Object.keys(TYPES_SCHEMA).map( key => (
			<div key={key} 
				className={cl('form-option-type-tab',key,{
					active: TYPES_SCHEMA[key] === type
				})} 
				onClick={()=>toggle(TYPES_SCHEMA[key])} >
				{key}
			</div>
		))}
	</div>	
)


class SidebarFormOption extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name : this.props.name || null,
			value : this.props.value || null,
			type : getType(this.props.value),
			editName : false,
			editValue : false
		}



		this.toggleName = this.toggleName.bind(this)
		this.toggleValue = this.toggleValue.bind(this)
		this.toggleType = this.toggleType.bind(this)
		this.change = this.change.bind(this)
	}

	toggleName() {
		this.setState({
			editName : !this.state.editName,
			editValue : false
		})
	}
	toggleValue() {
		this.setState({
			editValue : !this.state.editValue,
			editName : false
		})
	}

	toggleType(type=TYPE_BOOL) {
		this.setState({
			type
		})
	}

	change(typeName, typeValue) {
		if (typeName != 'name' && typeName != 'value') return;
		this.setState({
			[typeName] : typeValue
		})
	}

	render() {
		return (
			<div className="form-option" >
				<div className={cl('form-option-name',{
					warn : !this.state.name
				})} 
				title="name"
				onClick={()=>!this.state.editName && this.toggleName()} >
					{this.state.editName && <Input type={TYPE_STRING} change={this.change} name="name" value={this.state.name}/>}
					{!this.state.editName && <Str value={this.state.name} type={TYPE_STRING} />}
				</div>
				<ToggleTypes type={this.state.type} toggle={this.toggleType} />
				<div className="form-option-value" 
					title="value" 
					onClick={()=>!this.state.editValue && this.toggleValue()}>
					{this.state.editValue && <Input type={this.state.type} change={this.change} name="value" value={this.state.value}/>}
					{!this.state.editValue && <Str value={this.state.value} type={this.state.type} />}
				</div>
				<div className={cl('form-option-button',{
						disable: this.state.name === null || this.state.value === null
					})} 
					onClick={()=>{
						if (this.state.name === null || this.state.value === null) return;
						this.props.setOption(this.state.name, this.state.value, this.state.type)
					}} >
					{(this.state.name === null || this.state.value === null) ? <IconNonUpdate size={14}/> : <IconUpdate size={14}/>}
				</div>
			</div>
		)
	}
}





module.exports = SidebarFormOption