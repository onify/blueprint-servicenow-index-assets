const itemAssets = [];
environment.output.getServiceNowAssets.records.forEach(async function(snAsset) {
    const itemAsset = {
        type: "asset",
        key: snAsset.sys_id.value,
        name: snAsset.display_name.value,
        tag: ["servicenow", "asset", snAsset.sys_class_name.display_value.toLowerCase()],
        attribute: {
            cost_center: snAsset.cost_center.display_value,
            company: snAsset.company.display_value,
            department: snAsset.department.display_value,
            location: snAsset.location.display_value,
            assigned_to: snAsset.assigned_to.display_value,
            model: snAsset.model.display_value,
        },
        cost: {
            price: snAsset.cost.value
        }
    };
    itemAssets.push(itemAsset);
})

next(null, itemAssets);
