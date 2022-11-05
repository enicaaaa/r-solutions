using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Address
    {
        public Guid Id { get; set; }
        public string City { get; set; } = string.Empty;
        public string Street { get; set; } = string.Empty;
        public int Number { get; set; }
    }
}
