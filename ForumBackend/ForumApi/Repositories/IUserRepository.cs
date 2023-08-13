namespace ForumApi.Repositories
{
    public interface IUserRepository
    {
        void AddUser(User user);
        Task SaveAsync();
        bool UsernameExists(string username);
        bool EmailExists(string email);
    }
}
