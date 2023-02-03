using System.ComponentModel.DataAnnotations;

namespace KuboApp.Models
{
    public class QuickLinks : Base
    {
        [Required]
        public string content { get; set; }
        [Required]
        public string image { get; set; }
    }
}
