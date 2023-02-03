using System.ComponentModel.DataAnnotations;
using KuboApp.Models;

namespace KuboApp.Models
{
    public class Events : Base
    {
        [Required]
        public string title { get; set; }
        [Required]
        public string date { get; set; }
        [Required]
        public string month { get; set; }
        [Required]
        public string time { get; set; }
    }
}
