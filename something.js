<!DOCTYPE html>
<html>
<head>

<meta name="generator" content="php-proxy.com">
<meta name="version" content="5.2.0">

<style type="text/css">
html body {
	font-family: Arial,Helvetica,sans-serif;
	font-size: 12px;
}

@font-face 
{
  font-family: con;
  src: url(/consolas.ttf);
}

#container {
	width:500px;
	margin:0 auto;
	margin-top:150px;
}

#error {
	color:red;
	font-weight:bold;
}

body{
    background-color: #282828;
    font-family: con;
    color: #ddd;
    margin: 0px;
    padding: 0px;
}

input, select, textarea
{
  background-color: #141414;
  color: #eeeeee;
  font-family: con;
}

#footer {
	text-align:center;
	font-size:10px;
	margin-top:35px;
	clear:both;
}
</style>

</head>

<body>


<div id="container">
		
	<div id="error">
		<p>(3) No URL set!</p>
	</div>
	
		
	<div id="frm">
	
	<!-- I wouldn't touch this part -->
	
		<form action="index.php" method="post" style="margin-bottom:0;">
			<input name="url" type="text" style="width:400px;" autocomplete="off" placeholder="http://" />
			<input type="submit" value="Go" />
		</form>
		
		<script type="text/javascript">
			document.getElementsByName("url")[0].focus();
		</script>
		
	<!-- [END] -->
	
	</div>
	
</div>

</body>
</html>