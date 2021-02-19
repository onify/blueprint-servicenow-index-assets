const settings = environment.output.serviceNowSettings;
const headers = {};
const authToken = 'Basic ' + Buffer.from(settings._servicenow_username + ':' + settings._servicenow_password).toString('base64');
headers.Authorization = authToken;

next(null, headers);
