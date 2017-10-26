<?php
	include 'factory.php';
	include 'person.php';

	if ($_GET['method'] == 'create')
	{
		$person = new Person(0, $_GET['fn'], $_GET['ln'], $_GET['age']);
		$connection = ConnectionFactory::getConnection($_GET['db']);
		$connection->create($person);
	}

	if ($_GET['method'] == 'read')
	{
		$connection = ConnectionFactory::getConnection($_GET['db']);
		echo $connection->read($_GET['format']);
	}

	if ($_GET['method'] == 'update')
	{
		$id = $_GET['id'];
		$fn = $_GET['fn'];
		$ln = $_GET['ln'];
		$age = $_GET['age'];

		$person = new Person($id, $fn, $ln, $age);
		$connection = ConnectionFactory::getConnection($_GET['db']);
		$connection->update($person);
	}

	if ($_GET['method'] == 'delete')
	{
		$id = $_GET['id'];

		$person = new Person($id, "", "", 0);
		$connection = ConnectionFactory::getConnection($_GET['db']);
		$connection->delete($person);
	}
?>