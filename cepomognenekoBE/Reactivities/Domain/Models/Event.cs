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
        public string Description { get; set; } = string.Empty;
        public string Flag { get; set; } = string.Empty;
        public virtual Location Location { get; set; } = new Location();
        public string ImgBefore { get; set; } = string.Empty;
        public string ImgAfter { get; set; } = string.Empty;
        public virtual List<User> Assignee { get; set; } = new List<User>();
        public string Type { get; set; } = string.Empty;
        public int Points { get; set; }
        public DateTime EventCreatedAt { get; set; }
        public DateTime EventAssignedAt { get; set; }
        public DateTime EventDurationTime { get; set; }

    }
}
