using System.ComponentModel.DataAnnotations;

namespace KuboApp.Models
{
    public class QAndA : Base
    {
        [Required]
        public string author { get; set; }
        [Required]
        public string question { get; set; }
        [Required]
        public string answer { get; set; }
    }
}
