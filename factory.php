<?php
	include 'converter.php';
	include_once 'PersonDAO.php';

	class ConverterFactory
	{
		static function getConverter($format)
		{
			$res = null;
			switch ($format) {
				case 'json':
					$res = new JsonConverter();
					break;
				case 'xml':
					$res = new XmlConverter();
					break;
				case 'html':
					$res = new HtmlConverter();
					break;
				default:
					break;
			}
			return $res;
		}
	}

	class ConnectionFactory
	{
		static function getConnection($format)
		{
			$res = null;
			switch ($format) {
				case 'mysql':
					$res = new MySql();
					break;
				default:
					break;
			}
			return $res;
		}
	}
?>