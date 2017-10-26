<?php

	class Person
	{
		public $id = 0;
		public $fn = "";
		public $ln = "";
		public $age = 0;

		function __construct($id, $fn, $ln, $age)
		{
			$this->id = $id;
			$this->fn = $fn;
			$this->ln = $ln;
			$this->age = $age;
		}
	}

?>