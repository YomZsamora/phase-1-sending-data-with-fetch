


let submitData = (username, emailAddress) => {
	
	const submittedData = {
		username: username,
		emailAddress: emailAddress
	};
	
	const configurationObject = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(submittedData),
	};
}
