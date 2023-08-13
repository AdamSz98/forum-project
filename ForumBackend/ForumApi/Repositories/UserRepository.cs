namespace ForumApi.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void AddUser(User user)
        {
            _context.Users.Add(user);
        }
        public Task SaveAsync()
        {
            return _context.SaveChangesAsync();
        }
        public bool UsernameExists(string username)
        {
            return _context.Users.Any(u => u.Username == username);
        }
        public bool EmailExists(string email)
        {
            return _context.Users.Any(u => u.Email == email);
        }
        public Task<User> GetUserByUsername(string username)
        {
            return _context.Users.FirstOrDefaultAsync(u => u.Username == username)!;
        }
        public Task<User> GetUserByEmail(string email)
        {
            return _context.Users.FirstOrDefaultAsync(u => u.Email == email)!;
        }
    }
}
