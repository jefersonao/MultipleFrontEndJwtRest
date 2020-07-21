
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ContactApi.Models
{
	[Table("Login")]
	public class Login
	{
		[Key]
		public int id { get; set; }

		public string UserLogin { get; set; }

		public string Pass { get; set; }

		public string Name { get; set; }

	}
}
 