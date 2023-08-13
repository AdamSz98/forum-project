namespace ForumApi.Helpers
{
    public interface IUserHelper
    {
        bool IsValidEmail(string input);
        string HashedPassword(string password);
        bool VerifyPasswordHash(string passwordIncoming, string passwordDb);
        string CreateToken(User user);
    }
}
