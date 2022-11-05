using Domain;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> Users => Set<User>();
        public DbSet<Location> Locations => Set<Location>();
        public DbSet<Event> Events => Set<Event>();
        public DbSet<Address> Addresses => Set<Address>();

    }
}
