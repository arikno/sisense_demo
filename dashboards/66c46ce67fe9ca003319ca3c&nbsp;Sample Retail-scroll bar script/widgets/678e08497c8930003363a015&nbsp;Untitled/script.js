/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.transformPivot(
	{type: ['grandtotal']},
		function (metadata, cell) {
			if(cell.content == 'Grand Total' && metadata.colIndex == 0) {
				cell.content = 'רווח';
			} else if (cell.content == 'Grand Total' && metadata.colIndex != 0) {
				cell.content = 'סה״כ';
			}
		}
);
