using System;
using System.ComponentModel.DataAnnotations;

namespace KuboApp.Models
{
    public class Announcements : Base
    {
        [Required]
        public string title { get; set; }
        [Required]
        public string content { get; set; }
        [Required]
        public string author { get; set; }
        [Required]
        public string image { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime date { get; set; }
    }
}
