function get_distance(point_a, point_b)
{
	var R = 6371 * Math.pow(10,3);
	var lat1 = point_a.lat  * (Math.PI / 180);
	var lat2 = point_b.lat * (Math.PI / 180);
	var lon1 = point_a.lon * (Math.PI / 180);
	var lon2 = point_b.lon  * (Math.PI / 180);
	var latdiff = (lat2 - lat1);
	var londiff = (lon2 - lon1);
	
	var a = Math.sin(latdiff / 2) * Math.sin(latdiff / 2) + 
	Math.cos(lat1) * Math.cos(lat2) * Math.sin(londiff / 2) *
	Math.sin(londiff / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var	d = R * c;
	return (d/1000);
}
