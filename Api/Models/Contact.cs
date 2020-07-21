using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContactApi.Models
{
    [Table("Contact")]
    public class Contact
    {
        [Key]
        public int id { get; set; }
        public string Name { get; set; }
        public string SocialNumber { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Pass { get; set; }
    }
}
