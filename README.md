Blueprint for indexing Assets from ServiceNow

# Requirements

* Onify Hub v2
* Onify Flow license
* Curl command
* ServiceNow (dah :-)

# Setup

## Add settings for ServiceNow

* Replace `<ONIFY-HUB-API-URL>` below
* Replace `<AUTH-TOKEN>` below
* Replace `<SERVICENOW-INSTANCE>` below
* Replace `<SERVICENOW-USERNAME>` below
* Replace `<SERVICENOW-PASSWORD>` below

### Add setting for ServiceNow instance

```bash
curl -X POST "<ONIFY-HUB-API-URL>/api/v2/admin/config/settings?refresh=false" -H "accept: application/json" -H "authorization: <AUTH-TOKEN>" -H "Content-Type: application/json" -d "{ \"key\": \"_servicenow_url\", \"name\": \"ServiceNow URL\", \"value\": \"<SERVICENOW-INSTANCE>/api/now\", \"type\": \"string\", \"tag\": [ \"servicenow\" ], \"category\": \"custom\" }"
```

### Add setting for ServiceNow username

```bash
curl -X POST "<ONIFY-HUB-API-URL>/api/v2/admin/config/settings?refresh=false" -H "accept: application/json" -H "authorization: <AUTH-TOKEN>" -H "Content-Type: application/json" -d "{ \"key\": \"_servicenow_username\", \"name\": \"ServiceNow username\", \"value\": \"<SERVICENOW-USERNAME>\", \"type\": \"string\", \"tag\": [ \"servicenow\" ] }"
```

### Add setting for ServiceNow password

```bash
curl -X POST "<ONIFY-HUB-API-URL>/api/v2/admin/config/settings?refresh=false" -H "accept: application/json" -H "authorization: <AUTH-TOKEN>" -H "Content-Type: application/json" -d " { \"key\": \"_servicenow_password\", \"name\": \"ServiceNow password\", \"value\": \"<SERVICENOW-PASSWORD>/api/now\", \"type\": \"string\", \"tag\": [ \"servicenow\" ], \"category\": \"custom\" }"
```

# Deploy

1. Open `index-assets-servicenow.bpmn` in Camunda Modeler
2. Customize the flow (optional)
3. Click `Deploy current diagram` and follow the steps


# Run 

To test and run the flow, click `Start current diagram`
