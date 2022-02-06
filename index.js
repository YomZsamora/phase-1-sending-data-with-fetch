

let submitData = (username, emailAddress) => {
	
	// Data being sent in fetch() must be stored in the body of the configurationObject
	const submittedData = {
		username: username,
		emailAddress: emailAddress
	};
	
	// The configurationObject contains three core components that are needed for standard POST requests: the HTTP verb, the headers, and the body.
	const configurationObject = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		// By passing an object in, JSON.stringify() will return a string.
		body: JSON.stringify(submittedData),
	};
}
