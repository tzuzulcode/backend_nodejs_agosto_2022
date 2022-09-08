// import joi from 'joi'

function validation(data, schema){
	const result = schema.validate(data)
	return result
}

export default validation