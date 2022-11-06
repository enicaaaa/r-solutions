using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Event
    {
        public Guid Id { get; set; }
        public virtual User User { get; set; } = new User();
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Flag { get; set; } = string.Empty;
        public virtual Location? Location { get; set; }
        public string ImgBefore { get; set; } = string.Empty;
        public string ImgAfter { get; set; } = string.Empty;
        public virtual List<User>? Assignee { get; set; }
        public string Type { get; set; } = string.Empty;
        public int Points { get; set; }
        public DateTime EventCreatedAt { get; set; }
        public DateTime? EventAssignedAt { get; set; }
        public TimeSpan? EventDurationTime { get; set; }

    }
}
