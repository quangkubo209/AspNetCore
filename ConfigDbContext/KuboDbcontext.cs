using Microsoft.EntityFrameworkCore;
using KuboApp.Models;
using Microsoft.Extensions.Logging;

namespace KuboApp.ConfigDbContext
{
    public class KuboDbcontext : DbContext
    {
        public static readonly ILoggerFactory loggerFactory = LoggerFactory.Create(builder =>
        {
            builder.AddFilter(DbLoggerCategory.Query.Name, LogLevel.Information);
            //builder.AddFilter(DbLoggerCategory.Database.Name, LogLevel.Information);
            builder.AddConsole();
        });
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseLoggerFactory(loggerFactory);
            optionsBuilder.UseNpgsql("Host=localhost;Database=EntityTraining;Username=postgres;Password=123456");
        }

        //use fluent api to configure.
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<Announcements>(entity =>
        //    {
        //        entity.
        //    });
        //}

        public DbSet<Announcements> Announcements { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Events> Events { get; set; }
        public DbSet<QAndA> QAndA { get; set; }
        public DbSet<QuickLinks> QuickLinks { get; set; }
    }
}
