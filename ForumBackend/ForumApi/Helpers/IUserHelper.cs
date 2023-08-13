namespace ForumApi.Helpers
{
    public interface IUserHelper
    {
        bool IsValidEmail(string input);
        string HashedPassword(string password);
    }
}
