/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/


var filterName = 'CountryName';   


widget.on('processresult',function(se,ev){
	
	// Find the filter 
	var filterjaql;
	ev.widget.dashboard.filters.$$items.forEach((itemFilter) => {
        if ((itemFilter.isCascading === true) ? itemFilter.levels.some(level => level.title === filterName) : (itemFilter.jaql.title === filterName)) {
            filterjaql = itemFilter.isCascading ? itemFilter.levels.find(level => level.title === filterName).filter : itemFilter.jaql;
        }
    });
	
	//debugger
	
	if (filterjaql.filter.members && filterjaql.filter.members.length > 0) {
        // Handle case when specific filter value is selected
        var filterVal = filterjaql.filter.members[0]; 
        var categories = ev.result.xAxis.categories;
		// Find the position of filterVal in categories
        var loc = categories.indexOf(filterVal); 

        if (loc !== -1) {
            // Update min and max based on the location
            ev.result.xAxis.scrollbar = {
                enabled: true
            };
            ev.result.xAxis.min = Math.max(loc - 12, 0); // Ensure min does not go below 0
            ev.result.xAxis.max = Math.min(loc + 12, categories.length - 1); // Ensure max does not exceed array length
        } else {
            //console.warn('Filter value not found in categories:', filterVal);
            ev.result.xAxis.min = 0;
            ev.result.xAxis.max = 24;
        }
    } else {
        // Default range if no specific filter value is selected
        ev.result.xAxis.scrollbar = {
            enabled: true
        };
        ev.result.xAxis.min = 0;
        ev.result.xAxis.max = 24;
    }
});
